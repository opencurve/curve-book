# Curve 回退chunkserver

1. 适用环境:
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称，具体的chunkserver服务
9. 验收标准: 该指定的chunkserver服务回退到上一个版本，集群健康，并且可以正常对外提供服务
10. 参考步骤:

```plaintext
1. 使用工具查看当前集群是否健康：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   注：如果集群不健康（error/warn状态），请不要回退
   
2. 提交备份的topology-old.yaml拓扑文件：
   $ curveadm config commit topology-old.yaml
   
3. 回退指定服务：
   $ curveadm upgrade --role chunkserver

   注：上述命令默认是会回退集群中的所有的chunkserver服务，如果只需要指定服务，可通过添加以下3个选项来实现：
   --id: 回退指定 id 的服务
   --host: 回退指定主机的所有服务
   --role: 回退指定角色的所有服务

   示例 1：回退集群中的所有 chunkserver 服务
   $ curveadm upgrade --role chunkserver
   提示：`curveadm upgrade --role chunkserver` 默认是滚动回退/回退集群每一个chunkserver服务，用户在回退完一个chunkserver服务后 需要进入容器内确定集群是否健康。如果集群是健康的话，再输入yes开始回退下一个服务。
   
   在执行上述命令之后，需要由用户确认回退页面。 输入 yes 开始回退当前服务：
      Upgrade 1/3 service:
      + host=server-host1  role=chunkserver  image=quay.io/opencurve/curve/curvebs:latest
      Do you want to continue? [yes/no]: (default=no)

   在一个chunkserver服务回退成功后，使用如下命令查看集群的健康状态：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   示例 2：回退 id 为 c9570c0d0252 的chunkserver服务
   $ curveadm upgrade --id c9570c0d0252
   
   示例 3：回退 server-host1 这台主机上的所有 chunkserver 服务
   $ curveadm upgrade --host server-host1 --role chunkserver
   
4. 再次查看集群服务状态，查看指定 chunkserver 服务是否启动成功（Status为Up状态）：
   $ curveadm status
   
5. 查看集群是否健康：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
```

11. 参考影响:

* 情况1：回退某一个chunkserver（按照id）/某个副本域的所有chunkserver（按照host）

  * 时间: 在chunkserver降级成功直至集群健康，IO可能有短暂时间抖动

  * 业务方: 所有使用当前集群的业务方

  * 影响主题: chunkserver正在降级

  * 用户：所有使用当前集群的用户

* 情况2：同时回退所有的chunkserver服务(滚动回退，回退之后需确认集群健康然后回退下一个)

  * 时间: 无

  * 业务方: 无

  * 影响主题: 无

  * 用户：无

12. 参考风险:

* 情况1：回退某一个chunkserver（按照id）/某个副本域的所有chunkserver（按照host）

  * 数据面：IO可能有短暂时间抖动。如果该chunkserver上面的copyset属于leader的话，回退则会造成重新选举，从而发生IO抖动

  * 管控面：无

  * 恢复能力：无需恢复

* 情况2：同时回退所有的chunkserver服务(滚动回退，回退之后需确认集群健康然后回退下一个)

  * 数据面：无

  * 管控面：无
  
  * 恢复能力：无需恢复

13. 参考回滚策略: 升级chunkserver

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE