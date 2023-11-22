# Curve 挂载文件系统

1. 适用环境: 
2. 版本号: v2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 客户端成功挂载
10. 参考步骤:

```plaintext
1. 导入客户端主机。
   需要先导入客户端所需的主机列表，如果在部署集群时已将客户端主机导入，可直接跳过此步骤。请确保在之后挂载/卸载中指定的主机都已导入。
   
   可以通过curveadm hosts show 查看要挂载的客户端主机是否已经导入：
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
       - host: client-host  # 新添加的要挂载的客户端主机
         hostname: 10.0.1.4
         
    使用如下命令提出主机列表：
    $ curveadm hosts commit hosts.yaml

2. 准备客户端配置文件，填写s3相关信息和挂载项配置
   $ vim client.yaml
   
      kind: curvefs
      # s3信息
      s3.ak: <> 
      s3.sk: <>
      s3.endpoint: <>
      s3.bucket_name: <>
      # 镜像
      container_image: <>
      # 后端mds地址
      mdsOpt.rpcRetryOpt.addrs: 10.0.1.1:6700,10.0.1.2:670    10.0.1.3:6700

      # 其他的挂载项配置
      log_dir: /home/curve/curvefs/logs/client
      data_dir: /data/curvefs
   
3. 挂载CurveFS文件系统
   $ curveadm mount <cirvefs-name> <mount-point> --host <host> -c client.yaml
   
   * <curvefs-name>: 文件系统名，用户可自行定义, 但必须为小写字母、数字、连字符组合，即满足正则表达式 ^([a-z0-9]+\\-?)+$
   * <mount-point>: 挂载路径，用户可自行定义，但必须为绝对路径
   * --host: 将卷挂载到指定主机，用户可自行选择，请确保该主机已被导入
   
   挂载示例：
   $ curveadm mount test /mnt/test --host client-host -c client.yaml
   
     Check Kernel Module: [OK]
       + host=client-host  module=fuse [1/1] [OK]
  
     Check S3 Configure <service>: [OK]
  
     Mount FileSystem: [OK]
       + mountFSName=test  mountFSType=s3  mountPoint=/mnt/test [1/1] [OK]
  
     Mount test to /mnt/test (client-host) success ^_^
     
     出现如上提示，则表示挂载成功。

4. 查看客户端状态是否已经Up状态。如果为up状态则挂载点正常。
   $ curveadm client status
   
   Get Client Status: [OK]

    Id            Kind     Host          Container Id  Status       Aux Info
    --            ----     ----          ------------  ------       --------
    462d538778ad  curvefs  client-host  dfa00fd01ae8  Up 36 hours       {"fsname":"test","mount_point":"/mnt/test"}
```

11. 参考影响:

* 时间: 无

* 业务方: 无

* 用户：无

12. 参考风险:

* 数据面: 无

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: 无

14. 需求发起方: CURVE

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE
