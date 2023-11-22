# Curve 坏盘更换

1. 适用环境:
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 新盘对应的chunkserver重启成功
10. 参考步骤:

```plaintext
1. 剔除坏盘：
   在坏盘情况下，对应的chunkserver会退出，集群会自动做迁移，使用如下命令查看故障的chunkserver的ID（Status为Exited状态的chunkserver）
   $ curveadm status -v
   
2. 跟SA确认盘是否进行过读写压测，排查坏盘、慢盘等异常。

3. 检查磁盘磁盘缓存是否关闭
   $ sudo /sbin/hdparm -W /dev/sd{number}  | grep "write-caching"
     确认write-caching=0

4. 检查磁盘调度策略为noop
   $ cat /sys/block/sd{number}/queue/scheduler
   应该输出[noop] deadline cfq

5. 提交新增磁盘列表
   $ vim format.yaml

   host:
     - server-host3
   disk:
     - /dev/sdc:/data/chunkserver3:90  # 替换上来的磁盘

   警告：format.yaml 文件中只需填写新增机器上的磁盘列表即可，切勿将已在集群中服务的磁盘列表填入其中，避免造成无法挽回的损失。

6. 格式化替换上来的磁盘
   $ curveadm format -f format.yaml

7. 拉起当前服务：
   $ curveadm start --id <ID>
   
   这里的ID为因为坏盘而停止的chunkserver服务ID，也就是第1步看到的ID
   
5. 再次查看集群当前chunkserver状态是否被成功拉起状态（Status为Up状态）：
   $ curveadm status
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