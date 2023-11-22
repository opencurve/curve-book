# Curve 从物理机卸载nbd盘

1. 适用环境: 
2. 版本号: v1.2.6+
3. CurveAdm版本：v0.2.0+
4. 最后更新日期: 2023/09/30
5. 层面: 数据面
6. 运维级别: P1
7. 所属产品: 存储
8. 需求明细: 节点名称
9. 验收标准: 客户端成功取消卷映射
10. 参考步骤:

```plaintext
1. 查看要取消卷映射的文件系统状态：
   $ curveadm client status
   
     Get Client Status: [OK]
     
     Id            Kind     Host          Container Id  Status       Aux Info
     --            ----     ----          ------------  ------       --------
     362d538778ad  curvebs  client-host1  cfa00fd01ae8  Up 36 hours  {"user":"curve","volume":"/test1"}
     
2. unmap卷
   $ curveadm unmap <user>:<volume-name> --host server-host1
   
   * <user>和<volume-name>都可以从上述的curveadm client status中查看；
   * --host: 将卷挂载到指定主机，用户可自行选择，请确保该主机已被导入。

4. 再次查看客户端状态，则看不到相应的挂载项。如果看不到的话则认为不可用
   $ curveadm client status
   
   Get Client Status: [OK]

    Id            Kind     Host          Container Id  Status       Aux Info
    --            ----     ----          ------------  ------       --------
```

11. 参考影响:

* 时间: unmap后卷不可用，直至重新map当前卷

* 业务方: 使用该卷的业务方

* 用户：使用该卷的用户

12. 参考风险:

* 数据面: 无

* 管控面: 无

* 恢复能力: 无需恢复

13. 参考回滚策略: 重新map

14. 需求发起方: 业务方

15. 接收方:

16. 评审责任人: SRE负责人，SA负责人，CURVE负责人

17. 用户通知责任人: 技术支持

18. 执行责任人: CURVE/SA

19. 测试回归责任人: CURVE

20. 执行审核责任人: SA/CURVE/SRE