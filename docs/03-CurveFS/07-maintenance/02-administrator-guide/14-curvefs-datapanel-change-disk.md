# Curve 坏盘更换

1. 适用环境:
2. 版本号: v2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 新盘对应的metaserver服务重启成功
10. 参考步骤:

```plaintext
1. 剔除坏盘：
   在坏盘情况下，对应的metaserver会退出，集群会自动做迁移，使用如下命令查看故障的metaserver的ID（Status为Exited状态的metaserver）
   $ curveadm status -v

2. 跟SA确认盘是否进行过读写压测，排查坏盘、慢盘等异常。

3. 检查磁盘磁盘缓存是否关闭
   $ sudo /sbin/hdparm -W /dev/sd{number}  | grep "write-caching"
   确认write-caching=0

4. 检查磁盘调度策略为noop
   $ cat /sys/block/sd{number}/queue/scheduler
   应该输出[noop] deadline cfq

5. 手动将新盘挂载到data_dir:
   mount </dev/sd{number}> <data_dir>
   其中data_dir可以通过curveadm status -v查看
   
6. 重新拉起当前服务：
   $ curveadm start --id <ID>
   
   这里的ID为因为坏盘而停止的metaserver服务ID，也就是第1步看到的ID
   
7. 再次查看集群当前metaserver状态是否被成功拉起状态（Status为Up状态）：
   $ curveadm status
   
8. 查看集群是否健康：
   $ curve fs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
```

11. 参考影响:

* 时间: 无

* 业务方: 无

* 用户：无

12. 参考风险:

* 数据面: IO可能有短暂时间抖动

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: 无

14. 需求发起方: CURVE

15. 接收方:

16. 评任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE