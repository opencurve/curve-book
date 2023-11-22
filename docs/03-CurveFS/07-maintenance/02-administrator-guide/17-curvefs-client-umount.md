# Curve 卸载文件系统

1. 适用环境: 
2. 版本号: v2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 客户端成功卸载文件系统
10. 参考步骤:

```plaintext
提示：卸载操作会导致文件系统不可用，需要业务方发起操作。

1. 查看要卸载的文件系统状态：
   $ curveadm client status
   
     Get Client Status: [OK]
     
     Id            Kind     Host          Container Id  Status       Aux Info
     --            ----     ----          ------------  ------       --------
     462d538778ad  curvefs  client-host  dfa00fd01ae8  Up 36 hours  {"fsname":"test","mount_point":"/mnt/test"}

2. 卸载CurveFS文件系统
   $ curveadm umount <mount-point> --host <host>
   
   * <curvefs-name>: 文件系统名，用户可自行定义, 但必须为小写字母、数字、连字符组合，即满足正则表达式 ^([a-z0-9]+\\-?)+$
   * <mount-point>: 挂载路径，用户可自行定义，但必须为绝对路径
   * --host: 将卷挂载到指定主机，用户可自行选择，请确保该主机已被导入
   
   卸载示例：
   $ curveadm umount /mnt/test --host client-host
   
     Umount FileSystem: [OK]
       + host=client-host  mountPoint=/mnt/test [1/1] [OK]
       
     出现以上提示则表示卸载成功。

4. 再次查看客户端状态，则看不到相应的挂载项。
   $ curveadm client status
   
   Get Client Status: [OK]

    Id            Kind     Host          Container Id  Status       Aux Info
    --            ----     ----          ------------  ------       --------
```

11. 参考影响:

* 时间: 卸载后文件系统不可用，直至重新挂载

* 业务方: 挂载当前fs的业务方

* 用户：挂载当前fs的用户

12. 参考风险:

* 数据面: 无

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: 重新挂载

14. 需求发起方: 业务方

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE