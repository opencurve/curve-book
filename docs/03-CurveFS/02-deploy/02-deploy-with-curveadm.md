#  物理机部署 CurveFS 集群
为了提升 Curve 的运维便利性，我们设计开发了 [CurveAdm](https://github.com/opencurve/curveadm) 项目，其主要用于部署和管理 Curve 集群，目前已支持部署CurveBS & CurveFS，相关使用文档请参考 [CurveAdm用户手册](https://github.com/opencurve/curveadm/wiki)，并根据手册首先安装CurveAdm工具之后再进行Curve集群的部署。

##  部署 CurveFS 集群
使用 CurveAdm 部署 CurveFS 集群过程中如遇到错误，会在终端打印对应的错误码和解决方案链接，如参考解决方案链接的指导后仍然无法解决错误问题，可以添加终端打印的微信号来与我们取得进一步联系。

集群部署过程当前主要分为以下几个主要步骤：

### 1. 准备节点列表

详细步骤请参阅文档：[主机管理](https://github.com/opencurve/curveadm/wiki/hosts)

### 2. 准备集群拓扑文件

详细步骤请参阅文档：[集群拓扑](https://github.com/opencurve/curveadm/wiki/topology#curvefs-%E9%9B%86%E7%BE%A4%E6%8B%93%E6%89%91)

### 3. 部署集群

部署集群命令执行过程中，CurveAdm工具会自动执行部署环境预检工作，以确保所有节点均满足部署条件，只要当一切检测正常才会真正开始部署集群，关于预检的介绍请参阅文档：[环境预检](https://github.com/opencurve/curveadm/wiki/precheck)

关于集群部署的详细步骤请参阅文档：[部署集群](https://github.com/opencurve/curveadm/wiki/curvefs-cluster-deployment)


### 4. 部署客户端

详细步骤请参阅文档：[部署客户端](https://github.com/opencurve/curveadm/wiki/curvefs-client-deployment)


### 5. 部署分布式缓存【可选】

如需进一步提升性能，可以为 CurveFS 集群部署分布式缓存服务（当前基于memcached集群），CurveFS 客户端缓存当前有内存、本地硬盘、分布式缓存3类，分别为L1、L2、L3级缓存，均支持读写缓存。

部署分布式缓存的详细步骤请参阅文档：[部署分布式缓存](https://docs.opencurve.io/CurveFS/deploy/distributed-cache)


## 命令行工具
- CurveFS 提供了命令行工具以查看集群状态和进行基本集群操作：[命令行工具说明](https://docs.opencurve.io/CurveFS/maintenance/command-line-tools)
- 对于集群管理员，可以参阅管理员指导文档来完成对集群的运维管理工作：[管理员操作指导](https://docs.opencurve.io/category/%E7%AE%A1%E7%90%86%E5%91%98%E6%93%8D%E4%BD%9C%E6%8C%87%E5%AF%BC-1)
