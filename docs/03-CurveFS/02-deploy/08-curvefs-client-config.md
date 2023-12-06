# CurveFS Client Config For Curveadm
## 简要说明

本篇文章简要介绍下Curveadm使用到的，CurveFS client端涉及到的一些主要配置项

## 通用配置

通用配置展示的是一些必要的基础配置项。


| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| kind | curvefs | 所属的是fs还是bs集群 |
| mdsOpt.rpcRetryOpt.addrs |127.0.0.1:9000,127.0.0.1:9001,127.0.0.1:9002 | fs集群信息|
|container_image| | 使用的fs的镜像|
|  log_dir |  | curve-fuse日志路径(这里指的是宿主机上的路径) |
|  core_dir | /core | core文件保存路径(指宿主机上的路径)|
| s3.bucket_name |  | s3信息 |
|  s3.ak |  | s3信息 |
| s3.sk  |  | s3信息 |
| s3.endpoint |  | s3信息 |
| s3.bucket_name |  | s3信息 |


## 缓存盘配置项

如果没有本地缓存盘，那么client的读写便会直接与s3对象存储交互，而s3的访问时延和吞吐均受限，因此建议使用缓存盘来提升读写能力。一般推荐使用SSD/NVMe盘或者高性能云盘做缓存盘，不建议使用HDD盘。由于缓存盘会占用大量空间和吞吐，因此也不建议与系统盘共用。缓存盘的容量越大，缓存数据越多，性能越好。建议至少100G。缓存盘的使用方法很简单，只需格式化对应硬盘，然后挂载后可以使用该路径作为本地缓存路径配置到配置项`diskCache.cacheDir`。若是多个Client共用一个本地缓存盘，那么可以通过不同路径名来配置，比如client1的配置项为`diskCache.cacheDir=/mnt/cache/client1`，client2的配置项为`diskCache.cacheDir=/mnt/cache/client2`。另外还支持对每个client配置缓存盘容量限制和性能限制（IOPS、BPS等）。

- 写缓存

client写入过程中，如果可使用缓存，那么便会先把s3对象写入本地缓存盘，然后再异步写入s3 (注意：数据重要场景不建议直接使用单硬盘作为写缓存，存在数据丢失风险。可本地raid1或者使用云盘作为本地缓存盘)。

对于上述因异常未来得及上传s3的数据，在客户端进程被再次拉起后会继续上传到s3。

关于缓存盘面更详细内容可参考[本地缓存盘](https://github.com/opencurve/curve/blob/master/docs/cn/diskcache_design.md)

- 读缓存

可以借用预读机制或者是预热机制，把s3上的数据提前加载到缓存盘，提升读性能

| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| diskCache.cacheDir | /mnt/curvefs_cache| 缓存盘路径(指宿主机目录) |
|diskCache.diskCacheType| 2| 0:不使用,1:仅读缓存,2:读写缓存|
|  diskCache.maxUsableSpaceBytes | 107374182400 | 缓存盘最多可使用容量 |
|  diskCache.maxFileNums | 1000000 | 最多缓存文件数量 |
|  diskCache.fullRatio | 90 | 缓存目录对应文件系统使用率达到该阈值,缓存盘不可写，直传s3|
|  diskCache.safeRatio | 70 | 缓存目录对应文件系统使用率达到该阈值，开始清理 |

 ## 其他

 | 名称 | 默认值 | 说明 |
| --- | --- | --- |
| client.loglevel | 0 | 0，3，6，9(越大输出日志越细致) |
| s3.throttle.iopsTotalLimit| 0 | s3总的iops限流(默认不限)|
| s3.throttle.iopsReadLimit| 0 | s3读iops限流|
| s3.throttle.iopsWriteLimit| 0 | s3写iops限流|
| s3.throttle.bpsTotalMB| 0 | s3总的带宽限流(默认不限)|
| s3.throttle.bpsReadMB| 0 | s3读带宽限流|
| s3.throttle.bpsWriteMB| 0 | s3写带宽限流|


