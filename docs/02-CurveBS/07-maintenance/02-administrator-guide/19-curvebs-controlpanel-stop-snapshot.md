# Curve 停止snapshotclone

1. 适用环境: 
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 管控面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 具体节点
9. 验收标准: 该节点的snapshotclone服务停止成功，并且集群健康
10. 参考步骤:

```plaintext
1. 查看集群服务状态和指定节点的snapshotclone状态：
   $ curveadm status
   
   注：如果指定的snapshotclone已经处于退出状态（Status为Exited状态），则不用重复操作。
   
2. 如果处于Up状态，则使用下述命令停止服务，

   如果是停止某个指定的snapshotclone，使用--id选项:
   $ curveadm stop --id <Id>
   
   如果要停止某个节点上的所有的snapshotclone服务，使用如下命令：
   $ curveadm stop --host <host> --role snapshotclone
   
   如果要停止集群中所有的snapshotclone服务，使用如下命令：（一般不会进行操作）
   注意：如果停止所有的snapshotclone，则导致集群不可用，请在进行下列操作前仔细确认是否要停掉所有的snapshotclone服务
   $ curveadm stop --role snapshotclone
   
3. 再次查看集群服务状态，查看指定snapshotclone服务是否已经退出（Status为Exited状态）：
   $ curveadm status
   
4. 使用工具使用查看当前集群状态：
   $ curve bs status cluster
   
   当停止部分snapshotclone服务后，上述命令输出提示集群处于warn状态 Cluster health is： warn，符合预期。
   如果停止部分snapshotclone服务后，上述命令输出提示集群处于error状态 Cluster health is： error，则表示集群出错，需要重新拉起刚才停掉的snapshotclone。
   （一般不会做此操作）停掉所有的snapshotclone服务，集群应该处于error状态 Cluster health is： error。
```

11. 参考影响:

* 情况1：停止部分snapshotclone

  * 时间: 无

  * 业务方: 无

  * 影响主题: 无

  * 用户：无

* 情况2：停掉所有的snapshotclone服务

  * 时间：直至有snapshotclone服务启动之前，快照服务不可用

  * 业务方：所有使用当前集群的业务方

  * 影响主题：snapshotclone挂掉

  * 用户：所有使用当前集群的用户

12. 参考风险:

* 情况1：停止部分snapshotclone服务

  * 数据面: 无

  * 管控面: 无

  * 恢复能力: 无需恢复

* 情况2：停掉所有snapshotclone服务

  * 数据面: 无

  * 管控面: 快照服务不可用

  * 恢复能力: 无需回复

13. 参考回滚策略: 重新拉起snapshotclone

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE