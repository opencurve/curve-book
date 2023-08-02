**高性能 | 更稳定 | 易运维 | 云原生**

- 高性能 : CurveBS vs CephBS

  CurveBS: v1.2.0

  CephBS: L/N
  性能:
  块存储场景下，CurveBS随机读写性能远优于CephBS。
  测试环境：6台服务器*20块SATA SSD，E5-2660 v4，256G，3副本，使用nbd场景。

  单卷场景：
![单卷场景](../../images/1-nbd.jpg)

  多卷场景：
![多卷场景](../../images/10-nbd.jpg)

- 更稳定
  - 块存储场景下，常见异常CurveBS的稳定性优于CephBS。

    | 异常场景 | 单盘故障 | 慢盘 | 机器宕机 | 机器卡住 |
    | :----: | :----: | :----: | :----: | :----: |
    | CephBS | 抖动7s | 持续io抖动 | 抖动7s | 不可恢复 |
    | CurveBS | 抖动4s | 无影响 | 抖动4s | 抖动4s |

- 易运维
  - 我们开发了 [CurveAdm](https://github.com/opencurve/curveadm/wiki)来帮助运维人员。

    | 工具 |CephAdm | CurveAdm|
    | :--:  | :--: |:--: |
    | 一键安装  |   ✔️ |   ✔️ |
    | 一键部署  | ❌(步骤稍多) |  ✔️ |
    | playground |  ❌|   ✔️|
    | 多集群管理  |  ❌ |   ✔️ |
    | 一键扩容 | ❌(步骤稍多)|   ✔️|
    |一键升级 |   ✔️ |   ✔️|
    |一键停服 |  ❌ |   ✔️|
    |一键清理 |  ❌ |   ✔️ |
    |部署环境检测|  ❌ |   ✔️ |
    |操作审计| ❌ |   ✔️|
    |周边组件部署| ❌ |   ✔️|
    |一键日志上报| ❌ |   ✔️|
    |集群状态统计上报|  ❌|   ✔️|
    |错误码分类及解决方案|  ❌ |   ✔️|
  - 运维
    块存储场景下，CurveBS常见运维更友好。

    | 运维场景 | 客户端升级 | 均衡 |
    | :----: | :----: | :----: |
    | CephBS | 不支持热升级 | 外部插件调整，影响业务IO |
    | CurveBS | 支持热升级，秒级抖动 | 自动均衡，对业务IO无影响 |
- 云原生
  - 部署：详见[curve-operator](https://github.com/opencurve/curve-operator)
  - 使用：详见[curve-csi](https://github.com/opencurve/curve-csi)
  - [我们对云原生的理解](https://github.com/opencurve/curve/wiki/Roadmap_CN)。


> TBD