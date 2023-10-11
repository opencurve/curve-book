# Curve 启动snapshotclone

1. 适用环境:
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 管控面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称，具体的snapshotclone服务
9. 验收标准: 该指定的snapshotclone服务启动成功，集群健康
10. 参考步骤:

```plaintext
1. 查看集群服务状态和指定节点的snapshotclone状态：
   $ curveadm status
   
   注：如果指定的snapshotclone已经处于运行状态（Status为Up状态），则不用再次启动。
   
2. 如果处于Exit状态的话，则使用下述命令启动服务：

   如果是启动某一个指定的snapshotclone，使用--id选项:
   $ curveadm start --id <Id>
   
   如果要启动某一个节点上所有snapshotclone服务，使用如下命令：
   $ curveadm start --host <host> --role snapshotclone
   
   如果要启动所有的snapshotclone，使用如下命令：
   $ curveadm start --role snapshotclone
   
3. 再次查看集群服务状态，查看指定snapshotclone服务是否启动成功（Status为Up状态）：
   $ curveadm status
   
4. 使用工具查看集群状态是否健康：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
```

11. 参考影响:

* 时间: 无

* 业务方: 无

* 影响主题: 无

* 用户：无

12. 参考风险:

* 数据面: 无

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: 停止snapshotclone

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE