
# 使用 CurveAdm 部署分布式缓存


## 分布式缓存介绍

分布式缓存集群不是必须要部署的，但如需进一步提升性能，可以为 CurveFS 集群部署分布式缓存服务（当前基于memcached集群），CurveFS 客户端缓存当前有内存、本地硬盘、分布式缓存3类，分别为L1、L2、L3级缓存，均支持读写缓存。

基于memcached集群的分布式缓存，当前支持通过Extstore来通过硬盘扩展缓存容量，详情可参与官方文档：https://github.com/memcached/memcached/wiki/Extstore


### 部署步骤

部署分布式缓存集群，以及将缓存集群配置到 CurveFS 集群的详细步骤请参阅文档：[部署分布式缓存](https://github.com/opencurve/curveadm/wiki/deploy_memcached)