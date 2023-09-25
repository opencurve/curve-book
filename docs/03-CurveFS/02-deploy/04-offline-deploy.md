# 离线部署文档

## 离线环境准备

### Curve镜像准备

1. 拉取镜像
Curve官方镜像（如`opencurve/curve/curvefs:v2.4`）到本地环境（可访问外网的机器）

```bash
$ sudo docker pull opencurve/curve/curvefs:v2.4
```

2. 导出镜像
```bash
# 查看下载到的Curve镜像
$ sudo docker image ls
opencurve/curve/curvefs  v2.4  5717f16d4bec   1 months ago   1.84GB

# 导出镜像
$ sudo  docker save -o curve_v2.4.tar 5717f16d4bec
```

3. 拷贝镜像到本地仓库节点
```bash
$ scp curve_v2.4.tar  ${desthost}:/path/to/save/image
```

4. 导入镜像
```bash
$ docker load --input curve_v2.4.tar

# 查看导入的镜像
$ sudo  docker image ls 
opencurve/curve/curvefs  v2.4  5717f16d4bec   1 months ago   1.84GB
```

### 本地镜像仓库搭建

使用docker-registry来进行本地仓库的搭建，搭建完本地仓库后, 把前面步骤中下载的Curve镜像上传到本地仓库。主要有以下几步：

1. 运行 docker-registry
```bash
$ docker run -d -p 5000:5000 --restart=always --name registry registry
```

2. 标记Curve镜像
标记下载到的Curve镜像，比如把下载来的镜像（`opencurve/curve/curvefs:v2.4`）标记为`127.0.0.1:5000/curvefs:v2.4_local`（其中`127.0.0.1`为本地仓库服务IP，`5000`为本地仓库服务端口号，请根据实际环境修改）

```bash
# 查看下载到的Curve镜像
$ sudo  docker image ls 
opencurve/curve/curvefs  v2.4  5717f16d4bec   1 months ago   1.84GB

# 标记镜像
$ sudo docker tag opencurve/curve/curvefs:v2.4  127.0.0.1:5000/curvefs:v2.4_local

# 查看标记完的镜像
$ sudo  docker image ls
 127.0.0.1:5000/curvefs                           v2.4_local                       5717f16d4bec   13 months ago   1.84GB
```

3. 上传镜像
```bash
$ docker push 127.0.0.1:5000/curvefs:v2.4_local
```

更多详情可参考[私有仓库搭建](https://yeasy.gitbook.io/docker_practice/repository/registry)

### 修改镜像地址
修改客户端部署配置文件`client.yaml`以及服务端集群部署配置文件`topology.yaml`中的镜像地址配置项（`container_image`）为本地仓库镜像地址（如：`127.0.0.1:5000/curvefs:v2.4_local`）


## 部署
### 安装CurveAdm
CurveAdm是Curve部署工具，有外网的机器可以一键安装，具体安装参见[CurveAdm安装](https://github.com/opencurve/curveadm/wiki/install-curveadm#%E5%AE%89%E8%A3%85-curveadm)

但由于本文是介绍内网环境的部署，所以需按如下步骤操作：
- 下载CurveAdm到本地可访问外网机器，下载地址（最新版本可咨询Curve社区成员）： [CurveAdm](https://curveadm.nos-eastchina1.126.net/release/curveadm-v0.2.0.tar.gz) 
- 把CurveAdm拷贝到内网安装需部署Curve集群的主控机
- 解压CurveAdm
- 拷贝执行程序并设置环境变量

```bash
$ mv curveadm ~/.curveadm

# 可考虑更新到~/.bash_profile进行持久化
$ export PATH=~/.curveadm/bin:$PATH
```

### 主机配置

配置Curve集群要使用的服务器列表，提交列表给CurveAdm管理。主机配置过程比较简单，在`hosts.yaml`中添加实际主机名和ip，然后提交就可以了。

具体配置参考文档：[主机管理](https://github.com/opencurve/curveadm/wiki/hosts#%E4%B8%BB%E6%9C%BA%E9%85%8D%E7%BD%AE)

### Curve服务端部署

需修改`topology.yaml`中的镜像为本地镜像地址，示例如下：

```yaml
kind: curvefs
global:
  container_image: 127.0.0.1:5000/curvefs:v2.4_local  ## 修改为本地镜像
```
其他的配置项请参考文档 [CurveFS集群部署](https://github.com/opencurve/curveadm/wiki/curvefs-cluster-deployment) 或 [CurveBS集群部署](https://github.com/opencurve/curveadm/wiki/curvebs-cluster-deployment)

### client端部署
需修改`client.yaml`中的镜像为本地镜像地址，示例如下：
```yaml
kind: curvefs
global:
  container_image: 127.0.0.1:5000/curvefs:v2.4_local ## 修改为本地镜像
```

其他的配置项请参考文档 [部署CurveFS客户端](https://github.com/opencurve/curveadm/wiki/curvefs-client-deployment) 或 [部署CurveBS客户端](https://github.com/opencurve/curveadm/wiki/curvebs-client-deployment)
