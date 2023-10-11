# Curve 挂载nbd盘到物理机

1. 适用环境: 
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 客户端成功map卷
10. 参考步骤:

```plaintext
1. 导入客户端主机。
   需要先导入客户端所需的主机列表，如果在部署集群时已将客户端主机导入，可直接跳过此步骤。请确保在之后映射/取消映射中指定的主机都已导入。
   
   可以通过 curveadm hosts show 查看要映射的客户端主机是否已经导入：
   $ curveadm hosts show
   
   如果之前没有导入主机的话，则需要添加：
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
       - host: client-host  # 新添加的要映射的客户端主机
         hostname: 10.0.1.4
         
    使用如下命令提出主机列表：
    $ curveadm hosts commit hosts.yaml

2. 准备客户端配置文件：
   $ vim client.yaml
   
      kind: curvebs
      # 镜像
      container_image: <>
      # 后端mds地址
      mdsOpt.rpcRetryOpt.addrs: 10.0.1.1:6700,10.0.1.2:67     10.0.1.3:6700
      # 其他的映射项配置
      log_dir: /home/curve/curvebs/logs/client
    
    注1：所有未在客户端配置文件上出现的配置项，我们都将使用默认配置值。

    注2：配置文件中的 mds.listen.addr 配置项需填写集群中 MDS 服务地址，用户在部署好 CurveBS 集群后， 可通过 curveadm status 查看集群 MDS 服务地址：
    $ curveadm status
    Get Service Status: [OK]
    
    cluster name      : my-cluster
    cluster kind      : curvebs
    cluster mds addr  : 10.0.1.1:6700,10.0.1.2:6700,10.0.1.3:6700
    cluster mds leader: 10.0.1.1:6700 / 505da008b59c
    ...
  
3. 映射Curvebs卷：
   $ curveadm map <volume-user>:<volume-name> --host <host> -c client.yaml --create --size 10GiB
   
   * <volume-user>: 该卷所属用户名，用户可自行定义
   * <volume-name>: 卷名，用户可自行定义
   * --host: 将卷挂载到指定主机，用户可自行选择，请确保该主机已被导入
   * --create：当卷不存在时，则自行创建
   * --size: 指定创建卷的大小，默认为 10GiB
   * -c: 指定客户端配置文件

   当用户映射卷成功后，在相应的主机上即能看到 CurveBS 卷对应的 nbd 设备：
   $ lsblk | grep nbd

4. 查看客户端状态是否已经Up状态。如果为Up状态表示映射卷成功。
   $ curveadm client status
   
   Get Client Status: [OK]

    Id            Kind     Host          Container Id  Status       Aux Info
    --            ----     ----          ------------  ------       --------
    362d538778ad  curvebs  client-host1  cfa00fd01ae8  Up 36 hours  {"user":"curve","volume":"/test1"}
```

11. 参考影响:

* 时间: 无

* 业务方: 无

* 用户：无

12. 参考风险:

* 数据面: 无

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: unmap卷

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE
