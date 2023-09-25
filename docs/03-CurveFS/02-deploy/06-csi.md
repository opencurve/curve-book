# Curvefs CSI 驱动程序

## 介绍

CurveFS CSI 驱动程序实现容器编排器的 CSI 规范来管理 CurveFS 文件系统。

代码库：https://github.com/opencurve/curvefs-csi


## 先决条件

- Kubernetes 1.18+

## CSI 已实现接口

- ControllerServer: CreateVolume, DeleteVolume, ValidateVolumeCapabilities
- NodeServer: NodePublishVolume, NodeUnpublishVolume, NodeGetInfo, NodeGetCapabilities
- IdentityServer: GetPluginInfo, Probe, GetPluginCapabilities

## 如何使用

### 通过 kubectl

1.给节点添加标签
   ````bash
   kubectl label node <nodename> curvefs-csi-controller=enabled
   # 为 pod 运行的所有节点添加以下标签
   kubectl label node <nodename> curvefs-csi-node=enabled
   ````
2.部署csi驱动
   ````bash
   kubectl apply -f deploy/csi-driver.yaml
   kubectl apply -f deploy/csi-rbac.yaml
   kubectl apply -f deploy/csi-controller-deployment.yaml
   kubectl apply -f deploy/csi-node-daemonset.yaml
   ````
    注意：如果您想启用DiskCache，请阅读下面的相关部分
3.创建storage class和pvc
   ````bash
   # 复制并填写 storageclass-default.yaml 中的待填充项
   kubectl apply -f storageclass.yaml
   # 复制并修改pvc-default.yaml
   kubectl apply -f pvc.yaml
   ````
4. 现在您可以将此 pvc 绑定到 pod

#### DiskCache配置相关

DiskCache 是客户端使用基于磁盘的缓存来提高 io 性能。

如果client需要开启diskcache并使用宿主机额外的硬盘或云盘，需要在csi driver部署之前先把云盘或者本地盘挂载好。之后格式化硬盘或云盘然后mount到一个path（如/data/curvefs-diskcache），然后通过hostpath的方式映射进csi的daemonset pod里的/curvefs/client/data/cache路径，配置可以参考下面这个yaml：

https://github.com/opencurve/curvefs-csi/blob/main/deploy/csi-node-daemonset-enable-cache.yaml

上述配置文件中的 /data/curvefs-diskcache 对应的就是上面配置的缓存盘目录，可以修改为自己自定义的路径名称。

之后将“diskCache.diskCacheType=2”或“diskCache.diskCacheType=1”添加到storageclass.yaml的mountOptions部分，2表示开启read和write缓存, 1为read缓存，默认为0是无缓存。

已知问题：

- 启用discache（类型=2，写入）后，metadatasever 中的元数据将比 s3 存储中的数据更新，如果 csi 节点 pod 崩溃但写入缓存未完全上传到 s3 存储，您可能会丢失这部分数据。 重新挂载会崩溃，因为你只有元数据但没有数据（还没有刷新到 s3）。


## 构建状态

| Curvefs CSI 驱动程序版本 | CurveFS 版本 | CurveFS CSI 驱动程序映像 |
|------------------------|-------------|------------------------|
| v1.0.0 | v2.3.0-rc0   | curvecsi/curvefscsi:v1.0.0    |
| v1.0.1 | v2.4.0-beta2 | curvecsi/curvefscsi:v1.0.1    |
| v1.0.2 | v2.5.0-beta  | curvecsi/curvefscsi:v1.0.2    |
| v1.0.3 | v2.6.x       | curvecsi/curvefscsi:v1.0.3    |

更多版本请参考：https://github.com/opencurve/curvefs-csi/blob/main/README.md#build-status

## 在其他k8s发行版上使用

- KubeSphere：https://www.kubesphere.io/zh/blogs/kubesphere-curve/
- Rainbond：https://www.rainbond.com/blog/curve/

## 后续工作

- 更多创建/安装选项支持（需要未来的 CurveFS 支持）
- 将 s3 ak/sk 等敏感信息移至secret配置
- 子路径挂载支持（需要未来的 CurveFS 支持）
- 将fuse挂载点隔离到一个单独的 Pod 中，灵感来自 juicefs-csi
- 容量配额支持（需要未来的 CurveFS 支持）