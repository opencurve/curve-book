# Curve 停止metaserver

1. 适用环境: 
2. 版本号: v2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称，具体的metaserver服务
9. 验收标准: 该指定的metaserver服务停止成功，并且集群仍然健康
10. 参考步骤:

```plaintext
1. 查看集群服务状态和指定的metaserver状态：
   $ curveadm status
   
   注：如果指定的metaserver已经处于退出状态（Status为Exited状态），则不用再次执行停止操作。
   
2. 使用如下命令停止metaserver服务：

   如果是停止某个指定的metaserver，使用--id选项:
   $ curveadm stop --id <Id>
   
   如果要停止某个节点上的所有的metaserver服务，使用如下命令：
   $ curveadm stop --host <host> --role metaserver
   
   如果要停止集群中所有的metaserver服务，使用如下命令（一般不会做此操作）
   警告：如果要停掉所有的metaserver，则整个集群不可用，请谨慎确认之后再进行操作。
   $ curveadm stop --role metaserver
   
3. 再次查看集群服务状态，查看指定metaserver服务是否已经退出（Status为Exited状态）：
   $ curveadm status
   
4. 使用工具查看当前集群是否健康：
   $ curve fs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  warn
   
   当停掉部分的metaserver的时候，集群状态是warn状态，符合预期。
   如果停掉部分metaserver，集群状态是error状态，则表示集群出错，需要重新拉取刚才停掉的metaserver。
   （一般不会做此操作）停掉所有的metaserver，集群状态是error状态，符合预期。
```

11. 参考影响:

* 情况1：停止某个metaserver服务（按照id）/某个副本域的所有metaserver（按照host）

  * 时间: 无

  * 业务方: 无

  * 影响主题: 无

  * 用户：无

* 情况2：同时停掉涉及多个副本域的metaserver

  * 时间: 在metaserver重启成功之前，可能发生IO hang

  * 业务方: 所有使用当前集群的业务方

  * 影响主题: 跨副本域的metaserver挂掉

  * 用户：所有使用当前集群的用户

* 情况3：同时停掉所有的metaserver服务（一般不会做此操作）

  * 时间: 待集群中有metaserver被重新拉取之前，整个集群不可用。

  * 业务方: 所有使用当前集群的业务方

  * 影响主题: metaserver挂掉

  * 用户：所有使用当前集群的用户

12. 参考风险:

* 情况1：停止某个metaserver服务（按照id）/某个副本域的所有metaserver（按照host）

  * 数据面：无

  * 管控面：无

  * 恢复能力：无需恢复

* 情况2：同时停掉涉及多个副本域的metaserver

  * 数据面：有可能发生IO hang。

  * 管控面：无
  
  * 恢复能力：无需恢复

* 情况3：同时停掉所有的metaserver服务（一般不会做此操作）

  * 数据面：集群不可用，IO hang

  * 管控面：无
  
  * 恢复能力：无需恢复

13. 参考回滚策略: 重启metaserver

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE