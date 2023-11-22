# Curve 修改chunkserver配置

1. 适用环境: 
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称，具体的chunkserver服务
9. 验收标准: 该指定chunkserver配置修改成功，chunkserver重启成功并可以正常对外提供服务
10. 参考步骤:

```plaintext
1. 需要先确认当前集群是否健康：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   注：1. 集群健康（ok）：如果集群健康，继续执行后续步骤。重启当前服务后需确保集群仍是健康状态。
      2. 集群异常（warn/error）：
         使用工具查看是否是chunkserver异常：
         $ curve bs status chunkserver
         2.1 如果是当前要重启的服务导致的异常（warn/error）并希望通过修改配置恢复，则继续执行后续步骤。但重启之后不能保证集群是健康状态。
         2.2 如果当前要重启的服务正常，其他的服务异常导致的集群不健康，则继续执行后续步骤。但是重启当前服务后集群仍然处于不健康状态。
   
2. 备份本地集群拓扑文件：
   $ cp topology.yaml topology-old.yaml

   注：当本地拓扑文件丢失时，我们可以通过如下命令保存当前的集群拓扑来恢复：
   $ curveadm config show > topology.yaml

3. 编辑本地集群拓扑文件，在拓扑文件中增加/删除/修改chunkserver服务的配置项：
   $ vim topology.yaml

4. 提交修改的集群拓扑:
   $ curveadm config commit topology.yaml
   
5. 重新加载服务：
   $ curveadm reload --role chunkserver
   
   CurveAdm 使用上述命令默认重新加载集群中的所有 chunkserver 服务，如需重新加载指定服务，可通过添加以下 3 个选项来实现：

   --id: 重新加载指定 id 的服务
   --host: 重新加载指定主机的所有服务
   --role: 重新加载指定角色的所有服务
   以上 3 个选项可任意组合使用，服务对应的 id、host、role 可通过 curveadm status 来查看。

   示例 1：重新加载 id 为 c9570c0d0252 的chunkserver服务
   $ curveadm reload --id c9570c0d0252
   
   示例 2：重新加载 server-host1 这台主机上的所有 chunkserver 服务
   $ curveadm reload --host server-host1 --role chunkserver
   
   示例 3：重新加载集群中所有的chunkserver服务（不建议按照role同时修改chunkserver配置，否则会导致IO hang）
   提醒：该操作会根据当前集群拓扑的变更修改相应服务的配置，然后再同时重启机器中的所有chunkserver服务，所以在执行下列操作时，可能会导致IO短暂时间的不可用。
   $ curveadm reload --role chunkserver
   
6. 再次查看指定的chunkserver服务是否已经启动（Status为Up状态）:
   $ curveadm status

7. 查看集群的健康状态：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is: ok

   注：如果集群在修改此chunkserver的配置之前健康，则需要保证修改此服务配置后集群仍是健康状态；
      如果集群在修改此chunkserver服务配置之前异常，则有以下两种情况：
      1. 修改此chunkserver服务配置之前，是由当前chunkserver服务导致的集群异常，则修改当前服务的配置后不能保证集群仍然是健康的，是符合预期的。
      2. 修改此chunkserver服务配置之前，不是当前chunkserver服务导致的集群异常，则修改当前服务的配置后仍然是不健康的状态，是符合预期的。
```

11. 参考影响:

* 情况1：修改某个chunkserver服务（按照id）/修改某个副本域的所有的chunkserver（按照host）

  * 时间: 无

  * 业务方: 无

  * 影响主题: 无

  * 用户：无

* 情况2：同时修改涉及多个副本域的chunkserver

  * 时间: 在修改配置，chunkserver重启之前，在此期间，IO可能会卡住

  * 业务方: 所有使用当前集群的业务方

  * 影响主题: chunkserver正在修改配置重启

  * 用户：所有使用当前集群的用户

* 情况3：同时修改所有的chunkserver服务配置（不建议按照role同时修改chunkserver配置，否则可能会导致IO hang）

  * 时间: 在所有的chunkserver修改配置及重启过程中，集群不可用

  * 业务方: 所有使用当前集群的业务方

  * 影响主题: chunkserver正在修改配置，服务重启

  * 用户：所有使用当前集群的用户

12. 参考风险:

* 情况1：修改某个chunkserver服务（按照id）/修改某个副本域的所有的chunkserver（按照host）

  * 数据面：无

  * 管控面：无

  * 恢复能力：无需恢复

* 情况2：同时修改涉及多个副本域的chunkserver

  * 数据面：可能会导致IO hang

  * 管控面：无

  * 恢复能力：无需恢复

* 情况3：同时修改所有的chunkserver服务配置（不建议按照role同时修改chunkserver配置，否则会导致IO hang）

  * 数据面：可能有短暂的IO抖动。如果所有的chunkserver在同一时刻进入重启，该时刻读写IO hang

  * 管控面：无
  
  * 恢复能力：无需恢复

13. 参考回滚策略: 回退chunkserver配置到之前的值

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE