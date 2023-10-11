# Curve 集群扩容

1. 适用环境: 
2. 版本号: v2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 扩容完成，且集群正常工作
10. 参考步骤:

```plaintext
1. 使用工具查看当前集群是否健康：
   $ curve fs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   注：1. 如果集群健康（ok）的话，则继续后续的步骤。
      2. 如果集群处于warn状态，需要判断是否是因为当前要扩容的服务导致的集群异常。如果不是当前要扩容的服务类型导致的，可以继续执行后续步骤。否则，则不要继续后续操作。
      3. 如果集群是error状态，则扩容可能是无意义操作，所以不要执行后续步骤。
   
2. 提交主机列表：

   2.1 添加新增机器至主机列表：
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
       - host: server-host5  # 新增机器
         hostname: 10.0.1.5
       - host: server-host6  # 新增机器
         hostname: 10.0.1.6

   2.2 提交主机列表：
   $ curveadm hosts commit hosts.yaml
   
   注：如果找不到本地hosts.yaml文件，可以通过如下命令导出主机列表：
   $ curveadm hosts show > hosts.yaml
   
3. 修改集群拓扑：

   3.1 备份当前拓扑文件：
   $ cp topology.yaml topology-old.yaml
   
   注：如果找不到本地集群拓扑，则使用如下命令导出拓扑配置：
   $ curveadm config show > topology.yaml
   
   3.2 修改集群拓扑
   $ vim topology.yaml
   
     kind: curvefs
     global:
       container_image: opencurvedocker/curvefs:latest
       log_dir: ${home}/curvefs/logs/${service_role}
       data_dir: ${home}/curvefs/data/${service_role}
       variable:
         home: /tmp
         machine1: server-host1
         machine2: server-host2
         machine3: server-host3
         machine4: server-host4  # 新增机器
         machine5: server-host5  # 新增机器
         machine6: server-host6  # 新增机器
    
     # 如下以扩容metaserver为例，将新增机器添加到metaserver_services下
     # 如果要扩容mds，则将新增机器添加到mds_services下即可
     metaserver_services:
       config:
         listen.ip: ${service_host}
         listen.port: 6800
         listen.external_port: 7800
         metaserver.loglevel: 0
       deploy:
         - host: ${machine1}
         - host: ${machine2}
         - host: ${machine3}
         - host: ${machine4}  # 新增机器
         - host: ${machine5}  # 新增机器
         - host: ${machine6}  # 新增机器
           config:
             metaserver.loglevel: 3
             
    注：
    * 每一次只能扩容同一种角色的服务
    * 对于扩容metaserver服务来说，每次扩容都会新增一个逻辑池，新增的服务都位于该逻辑池中，请确保每次扩容至少增加 3 台主机
   
4. 扩容集群：
   $ curveadm scale-out topology.yaml
   
   提醒：扩容操作属于幂等操作，用户在执行失败后可重复执行，不用担心服务残留问题
   
5. 再次查看集群服务状态，查看指定扩容服务是否启动成功（Status为Up状态）：
   $ curveadm status
   
6. 查看集群是否健康：
   $ curve fs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   注：如果扩容前集群处于warn状态，但不是当前服务导致的问题。如果当前服务扩容成功，但是集群会仍然处于warn状态，是符合预期的。
```

11. 参考影响:

* 时间: 无

* 业务方: 无

* 用户：无

12. 参考风险:

* 数据面: 无

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