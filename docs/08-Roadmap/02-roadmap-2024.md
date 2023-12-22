# Curve Roadmap 2024 

## Curve

| 类型 | 需求描述 | 计划时间 | issue链接 |
| --- | --- | --- | --- |
| 功能 | HDFS SDK实现优化，提升性能，支持高级权限管理 | Q1 | TBD |
| 功能 | 支持Ceph Rados作为存储引擎，提升易用性 | Q2 | TBD |
| 功能 | 支持回收站，提升易用性和数据安全性 | Q4 | TBD |
| 功能 | 支持文件系统快照，提升易用性和数据安全性 | Q4 | TBD |
| 性能 | 分布式缓存架构改进，自研分布式缓存集群，提升缓存性能和易用性，支持持久化写缓存 | Q1 | TBD |
| 性能 | 元数据引擎架构改进，提升元数据分布的亲和性，减少元数据操作RPC次数，进一步提升元数据缓存效率 | Q1 | TBD |
| 运维 | 集群监控完善，提升易用性 | Q1 | TBD |
| 运维 | 命令行工具完善，提升易用性 | Q1 | TBD |
| 运维 | curve-fuse客户端热更新，避免停服升级 | Q2 | TBD |
| 运维 | 支持元数据备份，提升数据可靠性 | Q3 | TBD |
| 测试 | 自动化集成测试工具完善，提升项目质量和版本测试效率 | Q2 | TBD |



## CurveAdm

| 类型 | 需求描述 | 计划时间 | issue链接 |
| --- | --- | --- | --- |
| 功能 | 完善集群服务的在线迁移 | Q1 | TBD |
| 功能 | 完善集群服务的在线扩容 | Q1 | TBD |
| 功能 | 部署过程中，显示定义server对应的故障域 | Q1 | TBD |
| 功能 | 集成rqlite或者提供部署标准的部署步骤 | Q1 | TBD |
| 功能 | 内部功能替换老工具 | Q1 | https://github.com/opencurve/curveadm/issues/321 |
| 功能 | 支持监控target定时更新 | Q1 | https://github.com/opencurve/curve/issues/2564 |
| 功能 | 提供 playbook 管理功能 | Q1 | https://github.com/opencurve/curveadm/issues/343 |
| 性能 | 提升大集群status速度 | Q1 | https://github.com/opencurve/curveadm/issues/381 |




## CSI / Operator

| 类型 | 需求描述 | 计划时间 | issue链接 |
| --- | --- | --- | --- |
| 功能 | CSI挂载恢复，csi node-server重启可以自动挂载 | Q2 | TBD |
| 功能 | CSI支持quota | Q2 | TBD |
| 功能 | Operator支持集群更新升级 | Q4 | TBD |

