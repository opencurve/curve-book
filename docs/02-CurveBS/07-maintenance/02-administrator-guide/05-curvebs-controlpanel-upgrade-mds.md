# Curve 升级mds

1. 适用环境: 
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 管控面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称，具体的mds服务
9. 验收标准: 指定mds服务升级到新的版本，集群健康，并且可以正常对外提供服务
10. 参考步骤:

```plaintext
前置检查：升级前请确认下版本的兼容性，有些版本可能不能直接升级到某些高级版本，需要去做确认。

1. 首先需要使用工具查看当前集群是否健康
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   注：1. 如果集群健康（ok），则继续后续步骤。
      2. 如果集群异常（warn/error），不建议升级。
   
2. 备份本地拓扑文件：
   $ cp topology.yaml topology-old.yaml
   
   提醒: 如果找不到本地集群拓扑，则使用如下命令导出配置：
   $ curveadm config show > topology.yaml
   
2. 修改集群拓扑：
   修改集群拓扑文件中的镜像名为需要升级的新镜像名，只需要修改镜像即可：
   $ vim topology.yaml
   
   kind: curvebs
   global:
     container_image: quay.io/opencurve/curve/curvebs:latest  # 修改镜像
     ...
   
3. 重新提交集群拓扑：
   $ curveadm config commit topology.yaml
   
4. 升级指定服务：
   $ curveadm upgrade --role mds
   
   注：上述命令默认是会升级集群中的所有的mds服务，如果只需要指定服务，可通过添加以下3个选项来实现：
   --id: 升级指定 id 的服务
   --host: 升级指定主机的所有服务
   --role: 升级指定角色的所有服务

   示例 1：升级集群中所有mds服务
   $ curveadm upgrade --role mds
   提示：`curveadm upgrade --role mds` 默认是滚动升级集群每一个mds服务，用户在升级一个mds服务后 需要使用工具确定集群是否健康。如果集群是健康的话，然后再输入yes开始升级下一个服务。
   
   在执行上述命令之后，需要由用户确认升级页面。 输入 yes 开始升级当前服务：
       Upgrade 1/3 service:
       + host=server-host1  role=mds  image=quay.io/opencurve/curve/curvebs:latest
       Do you want to continue? [yes/no]: (default=no)

   在一个mds服务升级成功后，使用如下命令查看集群集群的健康状态：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   示例 2：升级 id 为 c9570c0d0252 的mds服务
   $ curveadm upgrade --id c9570c0d0252
   
   示例 3：升级 server-host1 这台主机上的所有 mds 服务
   $ curveadm upgrade --host server-host1 --role mds

   
3. 再次查看集群服务状态，查看指定mds服务是否启动成功：
   $ curveadm status
   
4. 查看集群是否健康：
   $ curve bs status cluster
   结果输出有下面字样则集群健康：Cluster health is:  ok
   
   如果集群状态ok，则表示升级成功。
```

11. 参考影响:

* 时间: 无

* 业务方: 无

* 影响主题: 无

* 用户：无

12. 参考风险:

* 数据面: IO可能有短暂的抖动

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: 回退mds

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE