# 静态PV配置

## CurveFS CSI使用node节点上的缓存盘
如果client需要开启diskcache并使用宿主机额外的硬盘或云盘，需要在csi driver部署之前先把云盘或者本地盘挂载好。之后格式化硬盘或云盘然后mount到一个path（如`/data/curvefs-diskcache`），然后通过hostpath的方式映射进csi的daemonset pod里的`/curvefs/client/data/cache`路径，配置可以参考下面这个yaml：

https://github.com/opencurve/curvefs-csi/blob/main/deploy/csi-node-daemonset-enable-cache.yaml

上述配置文件中的 `/data/curvefs-diskcache` 对应的就是上面配置的缓存盘目录，可以修改为自己自定义的路径名称。

一个开启diskcache的静态pv模板如下:
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: static-pv-curvefs
spec:
  accessModes:
  - ReadWriteMany
  capacity:
    storage: 1000Mi
  csi:
    driver: csi.curvefs.com
    volumeAttributes:
      fsType: s3
      mdsAddr: <mdsaddr>
    volumeHandle: <curvefs>
  mountOptions:
  - diskCache.diskCacheType=2  # 开启read和write缓存, 1为read缓存，默认为0是无缓存
  - fuseClient.supportKVcache: true  # 以下配置可按需修改，下同
  - diskCache.forceFlush: false
  - enableSumInDir: false
  - diskCache.fullRatio: 95
  - diskCache.safeRatio: 50
  persistentVolumeReclaimPolicy: Retain  # 不要修改该策略
  volumeMode: Filesystem
```

## 静态PV实现跨namespace共享文件系统
为了实现跨namespace共享文件系统，需要每一个namespace创建一组PVC和PV，其中PV指向的是后端的同一个FS。

### 预先创建文件系统
比如这里的文件系统名为`curvefs`，安装新工具并且配置配置文件，具体安装参考如下文档：

https://github.com/opencurve/curve/tree/master/tools-v2#install

安装完成后使用如下命令创建fs：

`curve fs create fs --fsname curvefs --fstype s3 --s3.ak ${AK} --s3.sk ${SK} --s3.endpoint http://localhost:9000 --s3.bucketname curvefs --s3.blocksize 4MiB --s3.chunksize 4MiB`

### 按照如下模板声明PV
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: static-pv-curvefs
spec:
  accessModes:
  - ReadWriteMany
  capacity:
    storage: 1000Mi
  csi:
    driver: csi.curvefs.com
    volumeAttributes:
      fsType: s3
      mdsAddr: <mdsaddr>
    volumeHandle: <curvefs>
  mountOptions:
  - diskCache.diskCacheType=2  # 开启read和write缓存,1为read缓存，默认为0是无缓存
  persistentVolumeReclaimPolicy: Retain  # 不要修改该策略
  volumeMode: Filesystem
```

需要自定义修改的字段：
- `mdsaddr`：连接的fs集群的mds地址
- `volumeHandle`：预先创建的fs的名字，比如curvefs

**其他重点说明：**
- persistentVolumeReclaiPolicy: 策略为Retain，不要试图修改


### 声明PVC绑定上述PV
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: static-pvc-curvefs
  namespace: <namespace>
spec:
  accessModes:
  - ReadWriteMany
  resources:
    requests:
      storage: 100Mi
  storageClassName: ""
  volumeMode: Filesystem
  volumeName: static-pv-curvefs
```

需要自定义修改的字段：
- namespace：指定pvc的namespace，比如ns1。
### 对需要共享pv的namespace重复上述2-3步骤
对于不同的namespace，需要重复上述的2，3步骤，新建的PV指定同一个FS，新建的PVC指定新的namespace即可。

这样不同namespace的pod挂载各自namespace下PVC即可。
