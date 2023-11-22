# Curve 迁移服务

1. 适用环境: 
2. 版本号: v2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 迁移完成，且集群正常工作
10. 参考步骤:

```plaintext
0. 集群的迁移就是将当前节点的所有服务下线，在另一个节点恢复这些服务。

1. 需要先确认当前集群是否健康：
   $ curve fs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   注：如果集群不健康，需要判断是否仍然需要迁移，否则可能导致集群服务不可用。
   
2. 备份本地集群拓扑文件：
   $ cp topology.yaml topology-old.yaml
   
   注：当本地拓扑文件丢失时，我们可以通过如下命令保存当前的集群拓扑来恢复：
   $ curveadm config show > topology.yaml

3. 添加新增机器至主机列表：
   $ vim hosts.yaml
   
     global:
       user: curve
       ssh_port: 22
       private_key_file: /home/curve/.ssh/id_rsa

     hosts:
       - host: server-host1
         hostname: 10.0.1.1
       - host: server-host2
         hostname: 10.0.1.2
       - host: server-host3
         hostname: 10.0.1.3
       - host: server-host4  # 新增机器
         hostname: 10.0.1.4
    
    注：如果找不到本地的hosts.yaml文件，则使用如下命令重新导出：
    $ curveadm hosts show > hosts.yaml

4. 编辑本地集群拓扑文件，在拓扑文件中添加新机器：
   $ vim topology.yaml
   
   kind: curvefs
   global:
     variable:
       machine1: server-host1
       machine2: server-host2
       machine3: server-host3
       machine4: server-host4  # 新增机器
  
   metaserver_services:
     config:
       listen.ip: ${service_host}
       listen.port: 6800
       listen.external_port: 7800
       metaserver.loglevel: 0
     deploy:
       - host: ${machine1}
       - host: ${machine2}
       - host: ${machine4}    # 将 ${machine3} 修改为 ${machine4}
         config:
           metaserver.loglevel: 3
      
   注：
      * 每一次只能迁移同一种角色的其中一个服务
      * 每一次只能迁移同一台主机的服务
   
5. 迁移服务：
   $ curveadm migrate topology.yaml
   
6. 再次查看新节点对应的服务是否已经启动（Status为Up状态）：
   $ curveadm status

7. 查看集群的健康状态：
   $ curve fs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok

8. 如果要继续迁移，请等待当前服务迁移完成，集群健康。
   重复3-7步骤
```

11. 参考影响:

* 时间: 无

* 业务方: 无

* 用户：无

12. 参考风险:

* 数据面: 在服务迁移过程中，相当于停服然后重启。如果迁移etcd/mds可能没有影响，对于metaserver来说可能会有IO抖动，因为copyset的leader可能重新选举。

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: 无

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE
