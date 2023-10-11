# Curve 重启snapshotclone

1. 适用环境:
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 管控面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称，具体的snapshotclone服务
9. 验收标准: 指定的snapshotclone服重启成功，集群健康，并且可以正常对外提供服务
10. 参考步骤:

```plaintext
1. 使用工具查看集群是否健康，当前snapshotclone是否异常：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   注：1. 集群健康（ok）：如果集群健康，继续执行后续步骤。重启当前服务后需确保集群仍是健康状态。
      2. 集群异常（warn/error）：
         使用工具查看是否是snapshotclone异常：
         $ curve bs status snapshotclone
         2.1 如果是当前要重启的服务导致的异常（warn/error）并希望重启恢复，则继续执行后续步骤。但重启之后不能保证集群是健康状态。
         2.2 如果当前要重启的服务正常，其他的服务异常导致的集群不健康，则继续执行后续步骤。但是重启当前服务后集群仍然处于不健康状态。
      
2. 使用如下命令重启snapshotclone服务：

   如果是重启某个指定的snapshotclone服务，使用--id选项：
   $ curveadm restart --id <Id>
   
   如果要重启某个节点下的所有的snapshotclone服务，使用如下命令：
   $ curveadm restart --host <host> --role snapshotclone
   
   如果要重启集群中所有的snapshotclone服务，使用如下命令：
   注意：如果重启所有的snapshotclone，则导致集群短暂不可用，在重启期间所有IO出错，请谨慎进行下列操作。
   $ curveadm restart --role snapshotclone
   
3. 再次查看集群服务状态，查看指定snapshotclone服务是否重启成功：
   $ curveadm status
   
4. 查看集群是否健康：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok

   注：如果集群在重启之前健康，则需要保证重启服务后集群仍是健康状态；
      如果集群在重启之前异常，则有以下两种情况：
      1. 重启之前，是由当前服务导致的集群异常，重启当前服务后不能保证集群仍然是健康的，是符合预期的。
      2. 重启之前，不是当前服务导致的集群异常，则重启后集群仍然是不健康的状态，是符合预期的。
```

11. 参考影响:

* 情况1：重启部分snapshotclone服务

  * 时间: 无

  * 业务方: 无

  * 影响主题: 无

  * 用户：无

* 情况2：同时重启所有的snapshotclone服务

  * 时间: 直至有snapshotclone服务启动之前，快照服务不可用
  
  * 业务方: 所有使用当前集群的业务方

  * 影响主题: snapshotclone正在重启

  * 用户：所有使用当前集群的用户

12. 参考风险:

* 情况1：重启部分snapshotclone服务

  * 数据面：无

  * 管控面：无

  * 恢复能力：无需恢复

* 情况2：同时重启所有的snapshotclone服务

  * 数据面：无

  * 管控面：快照服务短暂不可用，等待服务重启
  
  * 恢复能力：无需恢复

13. 参考回滚策略: 无

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE