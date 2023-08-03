---
slug: /faq
---

# 常见FAQ

## 关于Curve

### 1. Curve是什么？/ What is Curve?

Curve 是一款高性能、易运维、云原生的开源分布式存储系统。可应用于主流的云原生基础设施平台：
- 对接 OpenStack 平台为云主机提供高性能块存储服务；
- 对接 Kubernetes 为其提供 RWO、RWX 等类型的持久化存储卷；
- 对接 PolarFS 作为云原生数据库的高性能存储底座，完美支持云原生数据库的存算分离架构；
- Curve 亦可作为云存储中间件使用 S3 兼容的对象存储作为数据存储引擎，为公有云用户提供高性价比的共享文件存储。

Curve is a high-performance, easy-to-operate, cloud-native open source distributed storage system. Applicable to mainstream cloud-native infrastructure platforms:
- Connect to the OpenStack platform to provide high-performance block storage services for cloud VM;
- Connect to Kubernetes to provide persistent storage volumes of RWO, RWX and other types;
- Connecting with PolarFS as a high-performance storage base for cloud-native databases, it perfectly supports the storage-computation separation architecture of cloud-native databases;
- Curve can also be used as a cloud storage middleware to use S3-compatible object storage as a data storage engine, providing cost-effective shared file storage for public cloud users.


### 2. Curve与Ceph的区别是什么？ / What is the difference between Curve and Ceph?

Curve与Ceph从架构设计到具体的功能实现都有比较大的区别，以下仅列出一些大概区别，如果你想了解某些细节差异，可以通过微信群/slack/论坛联系我们沟通确认：
- 从一致性协议来说，Curve使用Raft协议实现一致性，Ceph是Paxos协议；
- 从空间分配方式来说，Curve是通过中心化的元数据服务来调度分配，Ceph是通过CRUSH算法hash方式分配；
- 从存储形态上来说，Curve目前支持块存储（CurveBS）、文件存储（CurveFS），Ceph在这两个形态之外还支持对象存储
- 其他大的差异包括：CurveBS支持基于PolarFS的云原生数据库存储底座（如PolarDB for postgresql等）；CurveBS快照会转存到对象存储系统；Curve FS支持将数据保存到兼容S3协议的对象存储系统（可以在公有云场景下部署），后续还会支持在CurveBS和S3之间进行数据生命周期管理；
- 具体到详细的功能对比，可以参考“Curve功能清单”，另外还有一些功能在开发计划中

Curve and Ceph are quite different from architecture design to specific function implementation. The following only lists some general differences. If you want to know some details, you can contact us through WeChat group/slack/forum to communicate and confirm:
- From the perspective of the consistency protocol, Curve uses the Raft protocol to achieve consistency, and Ceph is the Paxos protocol;
- From the perspective of space allocation, Curve is allocated through a centralized metadata service, and Ceph is allocated by hashing the CRUSH algorithm;
- In terms of storage form, Curve currently supports block storage(CurveBS) and file storage(CurveFS), and Ceph supports object storage in addition to these two forms
- Other major differences include: Curve BS supports PolarFS-based cloud-native database storage bases (such as PolarDB for postgresql, etc.); CurveBS snapshots will be transferred to object storage systems; CurveFS supports saving data to object storage systems compatible with the S3 protocol (can be deployed in public cloud scenarios), and will support data lifecycle management between CurveBS and S3 in the future;
- For detailed function comparison, you can refer to "Curve function list", and some functions are in the development plan

### 3. Curve与CubeFS的区别是什么？ / What is the difference between Curve and CubeFS?

最大的区别是： Curve支持块存储，不支持对象存储，CubeFS反之；另外Curve FS可以在公有云场景下对接S3存储引擎部署使用。如果你想了解某些细节差异，可以通过微信群/slack/论坛联系我们沟通确认。

The biggest difference is that Curve supports block storage, but not object storage, while CubeFS is the other way around. In addition, Curve FS can be deployed with S3 storage engines in public cloud scenarios. If you want to know some differences in details, you can contact us through WeChat group/slack/forum to communicate and confirm.

### 4. Curve与OpenEBS的区别是什么？ / What is the difference between Curve and OpenEBS?

最大的区别是： Curve支持文件存储。如果你想了解某些细节差异，可以通过微信群/slack/论坛联系我们沟通确认。

The biggest difference: Curve supports file storage. If you want to know some differences in details, you can contact us through WeChat group/slack/forum to communicate and confirm.

### 5. Curve与JuiceFS的区别是什么？ / What is the difference between Curve and JuiceFS?

最大的区别是： Curve支持块存储，CurveFS支持CurveBS存储后端，也支持S3存储后端，后续还会支持在CurveBS和S3之间进行数据生命周期管理。如果你想了解某些细节差异，可以通过微信群/slack/论坛联系我们沟通确认。

The biggest difference is that Curve supports block storage, CurveFS supports the CurveBS storage backend, and also supports the S3 storage backend, and will support data lifecycle management between CurveBS and S3 in the future. If you want to know some differences in details, you can contact us through WeChat group/slack/forum to communicate and confirm.

### 6. Curve能用在什么场景下？ / In what scenarios can Curve be used?

Curve能使用的主要场景如下：
- 对接 OpenStack 平台为云主机提供高性能块存储服务；
- 对接 Kubernetes 为其提供 RWO、RWX 等类型的持久化存储卷；
- 对接 PolarFS 作为云原生数据库的高性能存储底座，完美支持云原生数据库的存算分离架构；
- Curve 亦可作为云存储中间件使用 S3 兼容的对象存储作为数据存储引擎，为公有云用户提供高性价比的共享文件存储；
- 支持在物理机上挂载使用块设备或FUSE文件系统


The main scenarios where Curve can be used are as follows:
- Connect to the OpenStack platform to provide high-performance block storage services for cloud hosts;
- Connect to Kubernetes to provide persistent storage volumes of RWO, RWX and other types;
- Connecting with PolarFS as a high-performance storage base for cloud-native databases, it perfectly supports the storage-computation separation architecture of cloud-native databases;
- Curve can also be used as a cloud storage middleware to use S3-compatible object storage as a data storage engine, providing cost-effective shared file storage for public cloud users;
- Support mount using block device or FUSE file system on physical machine

### 7. Curve的云原生存储能力是如何体现的？ / How does Curve's cloud-native storage capability manifest?

主要体现在以下几点：
- 云原生部署：支持curveadm+docker部署方式；支持helm部署方式；支持chart部署方式；后续有计划支持rook部署方式
- 云原生使用：支持CSI配合K8S作为持久化卷使用（RWO、RWX等）
- 云原生运维：支持curveadm+docker运维，计划支持rook运维

Mainly reflected in the following points:
- Cloud native deployment: support curveadm+docker deployment method; support helm deployment method; support chart deployment method; follow-up plans to support rook deployment method
- Cloud native use: support CSI with K8S as persistent volume (RWO, RWX, etc.)
- Cloud native O&M: support curveadm+docker O&M, plan to support rook O&M

### 8. Curve是否有在生产环境使用过？规模如何？稳定性如何？有无出现过大规模故障？ / Has Curve been used in a production environment? What is the scale? How is the stability? Has there been a massive failure?

CurveBS块存储已在网易内部使用近3年，运行稳定，存储数据量数PB，无大规模故障。另外也有多家社区用户在使用CurveBS，目前未收到大规模故障反馈。

CurveFS目前已发布稳定版本，已在网易内部业务落地使用中。


CurveBS block storage has been used within NetEase for nearly 3 years (since mid-2019), with serveral PB data storage, and no large-scale failures. In addition, many community users are using CurveBS, and no large-scale failure feedback has been received so far.

CurveFS has not yet released a stable version (will be released in the near future), and it will first be used within NetEase after its release.

### 9. Curve的Roadmap是什么？ / What is Curve's Roadmap?

- 中文版：https://github.com/opencurve/curve/wiki/Roadmap_CN
- English：https://github.com/opencurve/curve/wiki/Roadmap

### 10. Curve开源的目标/目的是什么？ / What is the goal/purpose of Curve open source?

在现今的云基础设施领域，云原生应用如火如荼的在互联网行业落地，传统行业也开始有所实践。但是如果我们深入调查云原生基础设施3大板块：计算、存储、网络，你就能发现，云原生存储项目非常稀缺，开源的更少，如果再附加上稳定、高性能、公有云私有云均可使用的灵活弹性、简单易运维这些云原生场景下对存储系统的基础要求，则市面上基本没有合适的系统可供选择。基于上述原因，我们在2018年决定立项研发更好用的云原生存储系统：Curve。

Curve最初的立项目标只是解决网易集团内部使用开源Ceph存储的痛点，网易数帆作为云原生领域的实践者和领头羊，在给各类行业客户落地过程中，也深刻理解了上述客户痛点。为此我们决定将内部的Curve项目开源出来，让更多的客户享受到Curve的云原生存储优势。


Curve的愿景：将Curve打造成为性能卓越、全场景适用、稳定易运维的开源云原生分布式存储系统。


In today's cloud infrastructure field, cloud native applications are in full swing in the Internet industry, and traditional industries have begun to practice. But if we deeply investigate the three major sectors of cloud-native infrastructure: computing, storage, and network, you can find that cloud-native storage projects are very scarce, and even less open source. The basic requirements for storage systems in cloud-native scenarios such as usable flexibility, simplicity and ease of operation and maintenance, there are basically no suitable systems on the market to choose from. Based on the above reasons, in 2018, we decided to establish a project to develop a better cloud-native storage system: Curve.

The initial goal of Curve was to solve the pain points of using open source Ceph storage within NetEase Group. NetEase Shufan, as a practitioner and leader in the cloud native field, has also deeply understood the above-mentioned customer pain points in the process of landing for customers in various industries. For this reason, we decided to open source the internal Curve project so that more customers can enjoy the advantages of Curve's cloud-native storage.


Curve's vision: to build Curve into an open source cloud-native distributed storage system with excellent performance, applicable to all scenarios, stable and easy operation and maintenance.

### 11. Curve社区的沟通渠道有哪些？ / What are the communication channels of the Curve community?


- 微信群：添加微信号opencurve_bot邀请进群
- 论坛：https://ask.opencurve.io/
- slack：cloud-native.slack.com，channel #project_curve
- GitHub isue：https://github.com/opencurve/curve/issues
- 邮件列表：即将上线

` `

- WeChat group: add WeChat opencurve_bot to invite into the group
- Forum: https://ask.opencurve.io/
- slack: cloud-native.slack.com, channel #project_curve
- GitHub isue: https://github.com/opencurve/curve/issues
- Mailing list: Coming soon



## 部署运维相关

### 1. Curve 部署的最低配置是什么？/ What is the minimum requirements for deploy curve cluster?

你只需要拥有一台机器，就可以部署体验我们的 Curve 系统，当然了，这仅限于体验我们 Curve 系统的特性，如果你需要进行性能测试或部署线上环境，请参考我们以下 Curve 生产环境的推介配置。

特别地，我们对系统内核有一定的要求，请参考以下文档确保操作系统的内核版本满足要求：
* [软硬件环境需求](https://github.com/opencurve/curveadm/wiki/install-curveadm#软硬件环境需求)

You only need one machine to deploy and experience our curve system. Of course, this is only for experiencing the features of our curve system. If you need to perform performance testing or deploy in online environment, please refer to our curve production environment recommended configuration.

In particular, we have certain requirements for the system kernel, please refer to the following documents to ensure that the kernel version of the operating system meets the requirements:
* [software&hardware requirements](https://github.com/opencurve/curveadm/wiki/install-curveadm#软硬件环境需求)

### 2. Curve 生产环境的推荐配置是什么？/ What is the recommended configuration for Curve production environment?

针对 CurveBS, 我们将从以下几个部分给我出我们的推介配置：

* 数据盘磁盘：
   * 尽可能保证每个 chunkserver 服务单独拥有一块 SSD
   * 关闭数据盘缓存
   * 磁盘调度策略，SSD 盘 noop，HDD 盘 deadline

* 数据盘 raid 卡配置：
  * 数据盘全部为 JBOD 模式
  * RAID 卡关闭 consistent check
  * RAID卡缓存策略：WriteThrough

* 操作系统设置：
  * 系统允许的最大 fd 数量建议设为 10000000
  * 单个进程允许的最大 fd 数量，不要低于 2500000
  * 调整 mmap 数量，建议调整为 5642720

针对 CurveFS，我们推介给元数据服务 MetaServer 分配 3 台服务器，每台服务器运行 4 个 MetaServer，每个 MetaServer 尽可能拥有一块单独的 SSD。

For CurveBS, we will give me our recommended configuration from the following sections:

* Data disk disk:
    * As much as possible, ensure that each chunkserver service has a separate SSD
    * Turn off the data disk cache
    * Disk scheduling policy, SSD disk noop, HDD disk deadline

* Data disk raid card configuration:
   * All data disks are in JBOD mode
   * RAID card off consistent check
   * RAID card cache policy: WriteThrough

* Operating system settings:
   * The maximum number of fds allowed by the system is recommended to be set to 10000000
   * The maximum number of fds allowed by a single process, not less than 2500000
   * Adjust the number of mmap, it is recommended to adjust to 5642720

For CurveFS, we recommend to allocate 3 servers to the metadata service MetaServer, each server runs 4 MetaServers, and each MetaServer has a separate SSD as much as possible.

### 3. Curve 的部署工具是什么？有无指导手册？/ What is the deployment tools for Curve? Is there an instruction manual?

为了提高 Curve 系统的易用性，我们特地开发了部署运维工具 [CurveAdm](https://github.com/opencurve/curveadm)，目前 CurveAdm 具备完善的 [WiKi](https://github.com/opencurve/curveadm/wiki) 主页，你可以在 WiKi 中找到部署 [CurveBS](https://github.com/opencurve/curveadm/wiki/curvebs-cluster-deployment)/[CurveFS](https://github.com/opencurve/curveadm/wiki/curvefs-cluster-deployment) 的详细步骤。后续，我们还会在 Curve 论坛中推出 [SOP (Standard Operation Procedure)](https://ask.opencurve.io/t/topic/49) 系列教程，来帮助大家更好地使用 Curve，敬请期待。

In order to improve the usability of the Curve system, we have specially developed the deployment operation and maintenance tool [CurveAdm](https://github.com/opencurve/curveadm). Currently, CurveAdm has a complete [WiKi](https://github.com/opencurve/curveadm/wiki) homepage. You can find the detailed steps for deploying CurveBS/CurveFS in WiKi. In the future, we will also launch a series of [SOP (Standard Operation Procedure)](https://ask.opencurve.io/t/topic/49) tutorials in the Curve forum to help you use Curve better, so stay tuned.

### 4. Curve 运维排障工具有哪些？如命令行、dashboard、监控系统等？/ What are the Curve O&M troubleshooting tools? Such as command line, dashboard, monitoring system, etc.

Curve 的运维排障工具主要分为以为 3 大类：

* Curve 自带的配套运维工具：CurveBS 的 [curve_ops_tool](https://github.com/opencurve/curve/blob/master/docs/cn/curve_ops_tool.md) 以及 CurveFS 的 [curvefs_tool](https://github.com/opencurve/curve/tree/master/curvefs/src/tools#readme)
* Prometheus：Curve 提供一整套完整的 metric 体系，由 Prometheus 采集，最终由 Grafana 面板展示，详见[监控体系](https://github.com/opencurve/curve/blob/master/docs/cn/monitor.md)
* CurveAdm: CurveAdm 目前正在尝试提供高级的 troubleshooting 工具，详见 [CurveAdm 常见运维操作](https://github.com/opencurve/curveadm/wiki/maintain-curve)

Curve's operation and maintenance troubleshooting tools are mainly divided into three categories:

* Curve's own supporting O&M tools: [curve_ops_tool](https://github.com/opencurve/curve/blob/master/docs/cn/curve_ops_tool.md) of CurveBS and [curvefs_tool](https://github.com/opencurve/curve/tree/master/curvefs/src/tools#readme) of CurveFS
* Prometheus: Curve provides a complete set of metric systems, which are collected by Prometheus and finally displayed on the Grafana panel. See [Monitoring System](https://github.com/opencurve/curve/blob/master/docs/cn/monitor.md) for details
* CurveAdm: CurveAdm is currently trying to provide advanced troubleshooting tools, see [CurveAdm common operation and maintenance operations](https://github.com/opencurve/curveadm/wiki/maintain-curve)

### 5. 如果我在部署或运维过程中遇到了无法解决的问题，如何获取 Curve 社区的支持？/ How can I get support from the Curve community if I encounter an unsolvable problem during deployment or O&M?

Curve 社区目前正在推动完善部署运维工具 CurveAdm，我们的目标是用户部署运维零问题，为了实现这一目标，后续 CurveAdm 将推出一系列优化改进措施，如错误状态码、完善的环境检测等。当然了，在当前状态下，你如果在部署运维过程中遇到了无法解决的问题，可以通过以下三种方式中的任一一种来获取帮助：

* 在 [Curve](https://github.com/opencurve/curve) 或 [CurveAdm](https://github.com/opencurve/curveadm) 主页提交相关 Issue
* 通过扫描以下二维码，添加微信群，在微信群中与我们取得联系

![Curve小助手微信](./images/curve-wechat.jpeg)

* 运行 CurveAdm 的 `support` 命令直接获取 Curve 团队技术支持，详见[获得 Curve 团队技术支持](https://github.com/opencurve/curveadm/wiki/maintain-curve#获得-curve-团队技术支持)

The Curve community is currently promoting the improvement of the deployment and operation and maintenance tool CurveAdm. Our goal is to eliminate user deployment and operation and maintenance problems. In order to achieve this goal, CurveAdm will introduce a series of optimization and improvement measures in the future, such as error status codes and perfect environment detection. Of course, in the current state, if you encounter an unsolvable problem during deployment and operation, you can get help in any of the following three ways:

* Submit relevant issues on the [Curve](https://github.com/opencurve/curveadm) or [CurveAdm](https://github.com/opencurve/curveadm) homepage
* Slack: https://cloud-native.slack.com/archives/C03LFPT6BJM
* Add a WeChat group by scanning the QR code below, and get in touch with us in the WeChat group

![Curve小助手微信](./images/curve-wechat.jpeg)



* Run the support command of CurveAdm to directly obtain technical support from the Curve team. For details, see [Obtaining Technical Support from the Curve Team](https://github.com/opencurve/curveadm/wiki/maintain-curve#获得-curve-团队技术支持)

### 6. Curve 是否支持物理机安装包方式的手工部署？/ Does Curve support manual deployment of physical machine installation packages?

目前通过 CurveAdm 部署的集群和客户端都是跑在 Docker 容器内，后续 CurveAdm 也将推出物理机安装插件，这个插件可以帮助我们将客户端部署在各类物理机上（服务端仍然会跑在容器内）。另外，如果目前你有这方面的需求，也可以使用我们的 [Ansible](https://github.com/opencurve/curve/blob/master/docs/cn/deploy.md) 部署方式，虽然该部署方式即将被废弃，但它仍然是有效的。

当然了，如果你有部署方面的任何需求，都可以通过提交 Issue 或微信群沟通的方式告诉我们。

Now, the clusters and clients deployed by CurveAdm are running in Docker containers. In the future, CurveAdm will also launch a physical machine installation plug-in. This plug-in can help us deploy clients on various physical machines (the server will still run in the container). ). In addition, if you currently have this need, you can also use our [Ansible](https://github.com/opencurve/curve/blob/master/docs/cn/deploy.md) deployment method, although this deployment method is about to be deprecated, it is still valid.

Of course, if you have any deployment requirements, you can let us know by submitting an Issue or communicating in the WeChat group.

### 7. Curve 如何扩容？扩容是否会影响业务 IO？/ How does Curve scale out? Will capacity expansion affect IO?

你可以通过 CurveAdm 一键扩容集群，并且该操作并不影响业务 IO，详见[扩缩容](https://github.com/opencurve/curveadm/wiki/scale-curve)。

You can scale out the cluster with one click through CurveAdm, and this operation does not affect IO. See [scaling](https://github.com/opencurve/curveadm/wiki/scale-curve) for details.

### 8. Curve 如何升级？升级过程中是否影响业务 IO？/ How to upgrade Curve? Does the upgrade process affect IO?

你可以通过 CurveAdm 一键升级集群服务，并且该操作并不影响业务 IO，详见[升级服务](https://github.com/opencurve/curveadm/wiki/upgrade-curve)。

You can upgrade cluster services with one click through CurveAdm, and this operation does not affect IO. See [upgrading services](https://github.com/opencurve/curveadm/wiki/scale-curve) for details.

### 9. Curve 是否支持缩容？/ Does Curve support scale in cluster?

Curve 目前不支持缩容，我们并没有在线上尝试过此类操作。不过，为了满足更多用户需求，后续 CurveAdm 将会考虑提供缩容接口。

Now curve doesn't support scale in cluster, and we haven't tried this online. However, in order to meet the needs of more users, CurveAdm will consider providing a scaling interface in the future.

### 10. Curve 是否支持同城双活？异地容灾？两地三中心？/ Does Curve support dual-active in the same city? Disaster recovery in different places? Three centers in two places?

Curve 采用 Raft 强一致性协议，具备三副本，可以很好的实现数据的容灾，并且 Curve 的副本放置策略可由用户灵活配置，实现各类高可用的需求，为关键业务提供 7x24 不间断服务。

Curve adopts Raft strong consistency protocol and has three copies, which can well realize disaster recovery of data, and the copy placement strategy of Curve can be flexibly configured by users to meet various high-availability requirements and provide 7x24 uninterrupted services for key businesses.

### 11. Curve 是否支持超融合部署？/ Does Curve support hyperconverged deployment?

Curve 支持计算存储混合部署。

Curve supports compute-storage hybrid deployment.

### 12. Curve 是否支持 rook？是否可以用 k8s 部署？/ Does Curve support rook? Is it possible to deploy with k8s?

Curve 目前并不支持 rook，但适配 rook 已经考虑纳入 Curve 的 roadmap 中。关于 K8S 部署，目前 Curve 已提供相应的 CSI，包括 [curvebs-csi](https://github.com/opencurve/curve-csi) 和 [curvefs-csi](https://github.com/h0hmj/curvefs-csi)，而服务端加入 K8S 也在 Curve 的开发计划当中（云原生是 Curve 重要的定位之一，后续会在该领域投入更多精力）。

Curve does not currently support rooks, but the adaptation of rooks has been considered for inclusion in Curve's roadmap. Regarding K8S deployment, Curve has provided corresponding CSI, including [curvebs-csi](https://github.com/opencurve/curve-csi) and [curvefs-csi](https://github.com/h0hmj/curvefs-csi), and the server-side addition of K8S is also in Curve's development plan (cloud native is one of Curve's important positioning, and will be invested in this field in the future. more energy)

## 版本发布及打包相关
### 1、Curve版本发布周期是什么样的？版本号是如何定义的？/ What is the release cycle of Curve version? How is the version number defined?

Curve按照每3个月发布一个版本的节奏发布。
采用3段式版本号，x.y.z{-后缀}，x是大版本，y是小版本，z是bugfix，后缀用来区beta版本(-beta)、rc版本(-rc)、和稳定版本(没有后缀)。

发布大版本时x增加1，所谓大版本是指有重大的功能更新；平时每3月的小版本的更新y增加1。正式版本发布之后，如果有bugfix，新发布的版本z增加1。

Curve releases at a frequency of one version every 3 months.
Use a 3-segment version number, x.y.z{-suffix}, x is a major version, y is a minor version, z is a bugfix, and the suffix is used to distinguish beta version (-beta), rc version (-rc), and stable version (no suffix).

When a major version is released, x increases by 1. The so-called major version refers to a major function update; usually every 3-month minor version update y increases by 1. After the official version is released, if there are bugfixes, the newly released version z is increased by 1.

### 2、Curve目前的稳定版本是哪个？如何找到最新的稳定版？/ Which is the current stable version of Curve? How to find the latest stable version?

Curve块存储当前的稳定版为V1.2.4版本，https://github.com/opencurve/curve/releases/tag/v1.2.4

Curve最新的稳定版（含Curve文件存储）可以去release页面查找，https://github.com/opencurve/curve/releases

The current stable version is V1.2.4, https://github.com/opencurve/curve/releases/tag/v1.2.4

The latest stable version can be found on the release page, https://github.com/opencurve/curve/releases

### 3、Curve 1.x和2.x版本的区别是什么？/ What is the difference between Curve 1.x and 2.x versions?

Curve 1.x版本只有Curve块存储的代码，只包含Curve块存储的功能。Curve 2.x增加了Curve文件系统的功能。

The Curve 1.x version only has the code of Curve block storage, and only contains the function of Curve block storage. Curve 2.x adds the functionality of the Curve file system.

### 4、Curve是否有商业化版本？是否有商业化版本开发计划？我是否可以获取商业化支持？/ Is there a commercial version of Curve? Is there a commercial version development plan? Can I get commercialization support?

Curve暂时没有商业化版本，短期也没有商业化版本的开发计划。如果你需要商业化的支持，可以联系我们，我们再详细沟通。

There is no commercial version of Curve for the time being, and there is no development plan for a commercial version in the short term. If you need commercialization support, you can contact us and we will communicate in detail.

### 5、Curve块存储和文件存储的版本是独立发布的吗？如何获取两者的发行版？/ Are the versions of Curve block storage and file storage released independently? How can I get the distributions of both?

2.x版本之前，Curve只有块存储。
从2.X之后，Curve块存储和文件存储会使用统一的版本号，在同一个release发布。发行版可在 https://github.com/opencurve/curve/releases 获取。

Before version 2.x, Curve only had block storage.
After 2.X, Curve block storage and file storage will use a unified version number and release in the same release. Releases are available at 
 https://github.com/opencurve/curve/releases

### 6、我改了Curve代码，如何发布自己的版本？/ I changed the Curve code, how do I release my own version?

使用docker编译镜像，修改代码、编译、打镜像、推送镜像。

1. 拉取docker编译镜像，并进入镜像
   ```
   $ docker pull opencurvedocker/curve-base:build-debian9
   $ docker run -it opencurvedocker/curve-base:build-debian9 /bin/bash
   ```
2. 拉取curve代码，并修改代码
    ```
    $ cd <workspace>
    $ git clone https://github.com/opencurve/curve.git
    $ cd curve
    modify your code
    ```
3. 如果是修改的curve bs代码，在curve目录执行操作5~7；
4. 如果修改的是curve fs代码，进入curvefs目录，执行操作5~7。
   > $ cd curvefs
5. 代码编译，如果编译release版本，在后面加上release=1
   > $ make build [release=1]
6. 打镜像，TAG
   > $ make image tag=TAG
7. 推送镜像
   > $ docker push TAG

Use docker to compile images, modify code, compile, make image, and push images.

1. Pull docker to compile the image and enter the image
    ````
    $ docker pull opencurvedocker/curve-base:build-debian9
    $ docker run -it opencurvedocker/curve-base:build-debian9 /bin/bash
    ````
2. Pull the curve code and modify the code
     ````
     $ cd <workspace>
     $ git clone https://github.com/opencurve/curve.git
     $ cd curve
     modify your code
     ````
3. If it is the modified curve bs code, perform operations 5~7 in the curve directory;
4. If you modify the curve fs code, enter the curvefs directory and perform operations 5~7.
    > $ cd curvefs
5. Code compilation, if the release version is compiled, add release=1 after
    > $ make build [release=1]
6. Mirroring, TAG
    > $ make image tag=TAG
7. Push image
    > $ docker push TAG

### 7、Curve发布的版本都支持哪些操作系统发行版？/ Which operating system distributions are supported by the versions released by Curve?

Curve发行的版本支持Debian 9及以上版本，CentOs 8及以上版本。其他版本未测试过。

The version released by Curve supports Debian 9 and above, and CentOs 8 and above. Other versions have not been tested.

8、Curve是否可以在ARM64平台运行？相关版本如何获取？/ Can Curve run on ARM64 platform? How to get the relevant version?

https://github.com/opencurve/curve/tree/arm64 ，这个分支有Curve的对ARM64平台的支持。

https://github.com/opencurve/curve/tree/arm64 , this branch has Curve's support for the ARM64 platform.

doc to build curvebs v1.2.5 on arm64 platform: https://gist.github.com/h0hmj/f8764c082c9ecd03c074efe557cf3048

9、Curve除了AMD64、ARM64平台之外，还支持哪些CPU架构的平台？/ In addition to AMD64 and ARM64 platforms, what CPU architecture platforms does Curve support?

其他的CPU架构平台未测试过（已有用户成功移植到申威处理器平台）。如果您有兴趣，可以尝试移植Curve到其他CPU架构的平台。

Other CPU architecture platforms have not been tested. If you are interested, you can help test other CPU architecture platforms.


## 架构相关
### 1. Curve的部署架构是什么样的？我能把Curve用在哪些基础设施场景？/ What is the deployment architecture of Curve? What infrastructure scenarios can I use Curve for?

参考[关于Curve](https://github.com/opencurve/curve/wiki/Curve-FAQ#%E5%85%B3%E4%BA%8Ecurve)的问题1：`Curve是什么？`

Refer to Question 1 of [About Curve](https://github.com/opencurve/curve/wiki/Curve-FAQ#%E5%85%B3%E4%BA%8Ecurve): `What is Curve? `


### 2. Curve支持的业务场景有哪些？/ What are the business scenarios supported by Curve

参考[关于Curve](https://github.com/opencurve/curve/wiki/Curve-FAQ#%E5%85%B3%E4%BA%8Ecurve)的问题1：`Curve是什么？`

Refer to Question 1 of [About Curve](https://github.com/opencurve/curve/wiki/Curve-FAQ#%E5%85%B3%E4%BA%8Ecurve): `What is Curve? `

### 3. Curve的技术架构是什么样的？Curve块存储和文件存储的技术架构有何区别？/ What is the technical architecture of Curve? What is the difference between the technical architecture of Curve block storage and file storage?

[CurveBS架构](https://github.com/opencurve/curve-meetup-slides/blob/main/2020/1030-Curve%E8%AE%BE%E8%AE%A1%E8%A6%81%E7%82%B9-%E7%BD%91%E6%98%93%E6%95%B0%E5%B8%86-%E6%9D%8E%E5%B0%8F%E7%BF%A0.pdf)

[CurveFS架构](https://github.com/opencurve/curve/blob/master/docs/cn/curvefs_architecture.md)

CurveBS的架构和CurveFS的架构是类似的。CurveBS可以作为CurveFS的后端，用于存储文件数据。

[CurveBS Architecture](https://github.com/opencurve/curve-meetup-slides/blob/main/2020/1030-Curve%E8%AE%BE%E8%AE%A1%E8%A6%81%E7%82%B9-%E7%BD%91%E6%98%93%E6%95%B0%E5%B8%86-%E6%9D%8E%E5%B0%8F%E7%BF%A0.pdf)

[CurveFS Architecture](https://github.com/opencurve/curve/blob/master/docs/cn/curvefs_architecture.md)

The architecture of CurveBS is similar to that of CurveFS. CurveBS can be used as the backend of CurveFS ​​to store file data.

### 4. Curve和Ceph的技术架构区别是什么？/ What is the difference between the technical architecture of Curve and Ceph

架构上主要的区别有两个：一个是数据放置方面，Curve由中心节点选择，Ceph使用哈希算法计算得出；另一个多副本一致性方面，Curve使用Quorum机制协议，Ceph使用强一致协议.其他功能和实现上（客户端支持热升级、快照、文件元数据、数据节点使用的文件系统等等）的区别还有很多，建议阅读对比[Curve](https://github.com/opencurve/curve/blob/master/README.md#design-documentation)和Ceph的设计文档。

There are two main differences in architecture: one is data placement, Curve is selected by the central node, and Ceph uses a hash algorithm to calculate; the other is multi-copy consistency, Curve uses the Quorum mechanism protocol, and Ceph uses a strong consensus protocol.There are many differences in other functions and implementations (Client supports hot upgrade
, snapshots, file metadata, file systems used by data nodes, etc.), it is recommended to read the comparison [Curve](https://github.com/opencurve/curve/blob/master/README.md#design-documentation) and Ceph's design documentation.

### 5. Curve技术架构的先进性体现在哪里？/ Where is the advanced nature of Curve's technical architecture reflected?

块存储

服务端：

- 中性化节点架构。利用中心节点感知集群节点和负载、容量、异常，进行资源的实时调度与恢复
- Quorum机制的一致性协议。异常情况容错更优异，在异常情况下恢复较快，保证可靠性的同时，提高服务可用性
- 文件池。集群初始化时，创建指定大小的文件，降低IO过程中文件元数据的更新开销，降低IO延迟
- IO路径一次持久化。对于用户io, raft中大多数节点写完wal, apply写入缓存即可返回
- raft轻量级快照。读写操作是幂等的，raft快照只需要保存文件名，对io无影响
- 快照上传S3。快照存储到支持S3接口的对象存储，不限制数量

客户端：

- 条带化设计。大io使用条带化技术，在客户端进行分片，提高IO的并发度，让更多的节点参与IO处理
- ApplyIndex读。客户端带着applyIndex读，无需走一致性协议，使的读不会被写阻塞，极大的提高了读性能
- 支持多挂载。一个文件可以挂载到多个客户端，提供块级别的一写多读
- 支持热升级。client端使用client-server架构，版本升级只需要更新server，无需业务停服，对io秒级影响

文件存储

- 支持多种存储后端，支持公有云、私有云部署
- 支持多级缓存
- 支持原子性rename
- 支持多挂载
- 元数据和数据节点弹性可扩展

Block Storage

Server:

- Neutral node architecture. Use the central node to sense cluster nodes, load, capacity, and anomalies, and perform real-time scheduling and recovery of resources
- Consistency protocol for Quorum mechanism. Better fault tolerance for abnormal conditions, faster recovery under abnormal conditions, and improved service availability while ensuring reliability
- File pool. When the cluster is initialized, a file of a specified size is created to reduce the update overhead of file metadata during the IO process and reduce the IO delay.
- IO paths are persisted once. For user io, most nodes in raft finish writing wal, and apply write to the cache to return
- raft lightweight snapshot. Read and write operations are idempotent, and raft snapshots only need to save the file name, which has no effect on io
- Snapshot upload to S3. Snapshots are stored to object storage that supports the S3 interface, and the number is not limited

Client:

- Striped design. Big io uses striping technology to shard on the client side to improve IO concurrency and allow more nodes to participate in IO processing
- ApplyIndex read. The client reads with applyIndex, without the need to follow the consistency protocol, so that the read will not be blocked by the write, which greatly improves the read performance
- Support multiple mounts. A file can be mounted to multiple clients, providing block-level write-once read-many
- Support hot upgrade. The client side uses the client-server architecture, and the version upgrade only needs to update the server, without the need to stop the service, which has a second-level impact on io

File Storage
- Support multiple storage backends, support public cloud, private cloud deployment
- Support multi-level cache
- Support atomic rename
- Support multiple mounts
- Metadata and data nodes are elastically scalable

### 6. Curve技术架构是否存在短板？比如在可靠性、可用性、性能等方面？/ Are there any shortcomings in Curve's technical architecture? such as reliability, availability, performance, etc.

从架构上来说是没有的，从工程实践上来看还有很多可以优化的地方。比如bypass-kernel(spdk, rdma), curvefs一致性协议的快照优化等

There is no such thing in terms of architecture, and there are still many places that can be optimized in terms of engineering practice. For example, bypass-kernel (spdk, rdma), snapshot optimization of curvefs consistency protocol, etc.

### 7. Curve技术架构的演进方向是什么？对新硬件、新平台的支持有何规划？/ What is the evolution direction of Curve's technical architecture? What are the plans for support for new hardware and new platforms?

可以参考[roadmap](https://github.com/opencurve/curve/wiki/Roadmap_CN)

You can refer to the [roadmap](https://github.com/opencurve/curve/wiki/Roadmap)


## 功能相关

### 1. Curve的功能清单在哪里可以看到？ / Where can I find a list of Curve's features?

- https://github.com/opencurve/curve/wiki/Feature-list

### 2. Curve是否可以对接kubevirt？ / Can Curve be used by kubevirt?

可以通过Curve-CSI进行对接（依赖nbd内核模块），Curve-CSI仓库地址：https://github.com/opencurve/curve-csi

Can be connected through Curve-CSI (depending on nbd kernel module), Curve-CSI repository: https://github.com/opencurve/curve-csi

### 3. Curve对接QEMU是否要自行编译QEMU？从哪里找到相关补丁？ / Do I need to compile QEMU by myself when connecting to QEMU? Where can I find relevant patches?

是的，需要编译QEMU，补丁仓库地址：https://github.com/opencurve/curve-qemu-block-driver

Yes, you need to compile QEMU, patches repository: https://github.com/opencurve/curve-qemu-block-driver


### 4. Curve对接Libvirt是否要编译Libvirt？相关补丁在那里获取？ / Do I need to compile Libvirt by myself when connecting to Libvirt? Where can I find relevant patches?

是的，需要编译Libvirt，补丁仓库地址：https://github.com/opencurve/curve-qemu-block-driver

Yes, you need to compile Libvirt, patches repository: https://github.com/opencurve/curve-qemu-block-driver


### 5. Curve是否支持块存储？文件存储？对象存储？ / Does Curve support block storage? file storage? Object storage?

Curve支持块存储、文件存储，不支持对象存储（基于文件存储扩展支持S3协议接口在计划中）。

Curve supports block storage and file storage, but does not support object storage (the S3 protocol interface based on file storage extension is planned).

### 6. Curve是否支持客户端缓存？缓存的可靠性、数据一致性如何保证？ / Does Curve support client-side caching? How to ensure cache reliability and data consistency?

CurveBS块存储不支持客户端缓存，服务端缓存可以理解为是文件系统的pagecache。

CurveFS文件存储支持客户端缓存，包括内存和磁盘两种形态：内存缓存的数据可靠性无法保证（遵循POSIX语义，未flush或者close的数据可能丢失）；磁盘缓存需要由磁盘本身可靠性保证（建议使用RAID1等冗余模式）。多客户端的缓存数据一致性无法保证，但会定期更新，如果有强一致性需求，建议关闭磁盘缓存。

有关缓存的实现细节可以参考：[Caches](https://github.com/opencurve/curve/wiki/Curve%E6%BA%90%E7%A0%81%E5%8F%8A%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB#16-caches)

CurveBS block storage does not support client-side caching, and server-side caching can be understood as the pagecache of the file system.

CurveFS file storage supports client-side caching, including memory and disk: the data reliability of memory cache cannot be guaranteed (following POSIX semantics, data that is not flushed or closed may be lost); disk caching needs to be guaranteed by the reliability of the disk itself (recommended Use redundant modes such as RAID1). The cache data consistency of multiple clients cannot be guaranteed, but it will be updated regularly. If there is a strong consistency requirement, it is recommended to turn off the disk cache.

The implementation details of the cache can refer to [Caches](https://github.com/opencurve/curve/wiki/Curve%E6%BA%90%E7%A0%81%E5%8F%8A%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E6%B7%B1%E5%BA%A6%E8%A7%A3%E8%AF%BB#16-caches).

### 7. Curve服务端是否支持磁盘缓存？或者说类似ceph的wal/db缓存盘如何配置？ / Does the Curve server support disk caching? Or how to configure the wal/db cache disk similar to ceph?

可以将CurveBS chunkserver的wal文件保存到高性能磁盘设备上，数据盘使用低速磁盘设备。部署工具的支持正在开发中。

The wal file of the CurveBS chunkserver can be saved to a high-performance disk device, and the data disk uses a low-speed disk device. Deployment tool support is in development.


### 8. Curve是否支持不同磁盘类型组成不同的存储池？ / Does Curve support different disk types to form different storage pools?

暂不支持，相关功能已在开发计划中。

Currently not supported, related functions are already in the development plan.

### 9. Curve是否支持存储池扩容？是否支持缩容？ / Does Curve support storage pool scale-out? Does it support scale-in?

支持存储池扩容，暂不支持缩容。

Storage pool scale-out is supported, but shrinking(or scale-in) is not currently supported.

### 10. Curve是否支持回收站？删除的卷或者目录是否还能找回？ / Does Curve support RecycleBin? Can the deleted volume or directory be recovered?

CurveBS卷支持回收站功能，删除的卷在回收站清理前可以找回。CurveFS回收站功能也在开发中。

CurveBS volumes support RecycleBin, and deleted volumes can be retrieved before the RecycleBin is cleaned. CurveFS RecycleBin feature is also under development.

### 11. Curve是否支持XX硬件（如Optane、NVMe、RDMA网卡等）？ / Does Curve support XX hardware (such as Optane, NVMe, RDMA network cards, etc.)?

Curve本身对硬件没有特殊要求，但要利用好这些新型硬件，还需要软件的优化配合，这些都在计划中，有些已经在开发中，具体问题可以通过论坛、微信群等渠道联系我们进行详细交流。

Curve itself has no special requirements for hardware, but to make good use of these new hardware, software optimization is also required. These are all planned, and some are already under development. For specific questions, please contact us through forums, WeChat groups and other channels for detailed communication.

### 12. Curvefs的元数据占用资源大小？ / How much storage resources does Curvefs metadata occupy?

我们之前测试9个metaserver的集群，通过mdtest测试，大概创建2.2 Bil文件时，单metaesrver占用内存11GB，占用磁盘330GB。

We tested a cluster of 9 metaservers before. Through the mdtest test, when creating a 2.2 Bil file, a single metaesrver occupies 11GB of memory and 330GB of disk.

## 性能相关

### 1. Curve的性能指标是什么样的？/ What does Curve's performance metrics look like?

块存储：https://github.com/opencurve/curve/blob/master/CHANGELOG-1.2.md

文件存储：release2.3测试之后更新数据

Block Storage: https://github.com/opencurve/curve/blob/master/CHANGELOG-1.2.md

File storage: update data after release2.3 test

### 2. Curve测试过哪些硬件规格下的性能？/ What hardware specifications Curve has tested for performance?

块存储：HDD、Sata SSD、NVME

文件存储：元数据 Sata SSD; 数据 S3

Block Storage: HDD, Sata SSD, NVME

File Storage: Metadata Sata SSD; Data S3

### 3. Curve的性能相比Ceph高不少是怎么做到的？/ The performance of Curve is much higher than that of Ceph. How is it done?

从架构上来说，Curve使用Quorum机制的一致性协议，写大多数返回，延迟取决于多副本最快的大多数; Ceph使用强一致协议，写所有副本返回，延迟取决于最慢的那一个。工程实践的细节上就很难一一做对比了

Architecturally, Curve uses the consensus protocol of the Quorum mechanism, writing the majority to return, and the delay depends on the fastest majority of multiple copies; Ceph uses a strong consensus protocol, writing all copies to return, and the delay depends on the slowest one. It is difficult to compare the details of engineering practice.

### 4. Curve在性能优化方面的规划有哪些？演进方向是？/ What are Curve's plans for performance optimization? What is the direction of evolution

重点考虑点是工程实践上的：磁盘io和网络io可以bypass kernel，支持更高性能的磁盘

更多地可以参考[roadmap](https://github.com/opencurve/curve/wiki/Roadmap_CN)

The key consideration is engineering practice: disk io and network io can bypass the kernel and support higher-performance disks.

For more information, please refer to the [roadmap](https://github.com/opencurve/curve/wiki/Roadmap).

## 云原生数据库相关
### 1. Curve支持云原生数据库的架构是什么样的（以polardb for pg为例）？

Curve支持云原生数据库的架构方式是采用了curvebs + polarfs + pg的架构，即使用curve块存储作为底层存储引擎，在此之上通过适配polarfs提供高性能文件接口（这部分工作开源在这个仓库 https://github.com/opencurve/PolarDB-FileSystem/tree/curvebs_sdk_devio ），从而支持运行polardb for pg等基于共享存储的云原生数据库。

What is the architecture of Curve supporting cloud native database (take polardb for pg as an example)?

Curve supports cloud native database architecture by using curvebs + polarfs + pg architecture, that is, using curve block storage as the underlying storage engine, on top of which it provides a high-performance file interface by adapting polarfs (this part of the work is open source in this warehouse https://github.com/opencurve/PolarDB-FileSystem/tree/curvebs_sdk_devio ), which supports running cloud-native databases based on shared storage such as polardb for pg.

### 2. Curve在云原生数据库场景下的性能表现如何？有无相关指标数据？

curvebs在云原生数据库场景下，从初步性能测试来看（三节点sata SSD），写性能达到800至900us的时延，读性能可以达到200至300us的时延。

How does Curve perform in cloud native database scenarios? Is there any relevant indicator data?

In the cloud native database scenario of curvebs, from the preliminary performance test, the write performance can reach a latency of 800 to 900us, and the read performance can reach a latency of 200 to 300us.

### 3. Curve是否可以作为其他云原生数据库的存储底座？

curvebs + polarfs的方案，作为云原生数据库的存储底层，是比较通用的方案，可以作为其他云原生数据库的存储底座的。

Can Curve be used as a storage base for other cloud-native databases?

The solution of curvebs + polarfs, as the storage bottom layer of cloud-native databases, is a relatively general solution and can be used as a storage base for other cloud-native databases.

### 4. Curve是否可以作为kafka、redis、Elastic Search等中间件的存储底座？

curvebs + polarfs作为存储底层，同样可以提供作为kafka、redis、Elastic Search等中间件的存储底座，但是相应的，类比与云原生数据库之于mysql和pgsql，需要对这些组件的存储层进行一定的适配改造。

Can Curve be used as a storage base for middleware such as kafka, redis, and Elastic Search?

As the storage bottom layer, curvebs + polarfs can also provide a storage base for middleware such as kafka, redis, and Elastic Search, but correspondingly, analogy with cloud native databases for mysql and pgsql, the storage layer of these components needs to be retrofit.


## 开发测试相关

### 1. Curve 编译环境怎么搭建？/ How to build the Curve compilation environment?

关于 CurveBS 编译环境的搭建，可参考[编译环境搭建](https://github.com/opencurve/curve/blob/master/docs/cn/build_and_run.md)，文档中提供了物理机和 Docker 两种编译方式。

而 CurveFS 我们正在快速迭代中，目前也已提供物理机和 Docker 两种编译方式，但相应文档仍在完善中，不过你可以在以下 2 个目录中找到你需要的信息：

* [CurveFS 主目录](https://github.com/opencurve/curve/tree/master/curvefs)
* [CurveFS Docker 目录](https://github.com/opencurve/curve/tree/master/curvefs/docker)

特别需要注意的是，我们为物理机编译环境，提供了 Makefile，你可以利用此来快速编译、打镜像用来测试，你可以查看相应的 Makefile 来熟悉相关的使用：

* [Makefile for CurveBS](https://github.com/opencurve/curve/blob/master/Makefile)
* [Makefile for CurveFS](https://github.com/opencurve/curve/blob/master/curvefs/Makefile)

For the construction of the CurveBS compilation environment, please refer to Compilation Environment Construction. The documentation provides two compilation methods: physical machine and Docker.

As for CurveFS, we are iterating rapidly. Currently, we have provided two compilation methods: physical machine and Docker, but the corresponding documents are still being perfected, but you can find the information you need in the following two directories:

[CurveFS home directory](https://github.com/opencurve/curve/tree/master/curvefs)
[CurveFS Docker Directory](https://github.com/opencurve/curve/tree/master/curvefs/docker)

It should be noted that we provide a Makefile for the physical machine compilation environment. You can use this to quickly compile and mirror images for testing. You can view the corresponding Makefile to familiarize yourself with related uses:

[Makefile for CurveBS](https://github.com/opencurve/curve/blob/master/Makefile)
[Makefile for CurveFS](https://github.com/opencurve/curve/blob/master/curvefs/Makefile)

### 2. Curve 开发环境怎么搭建？我想调试 Curve 代码，怎么部署一套最小规模的开发集群？/ How to build the Curve development environment? I want to debug Curve code, how do I deploy a minimal development cluster?

你可以参考以上搭建一个编译环境，并使用 [CurveAdm](https://github.com/opencurve/curveadm) 部署一个单机器的集群。

You can refer to the above to build a compilation environment and use [CurveAdm](https://github.com/opencurve/curveadm) to deploy a single-machine cluster.

### 3. Curve 测试代码有哪些类型？我如果要给 Curve 贡献代码，需要补充哪些测试用例或测试代码？/ What are the types of Curve test codes? If I want to contribute code to Curve, what test cases or test code do I need to add?

Curve 的测试代码主要有以下几类：

* 单元测试
* 集成测试
* 异常测试

我们欢迎大家给 Curve 社区做任何贡献，包括但不限于代码、文档、issue。如果你的贡献有涉及代码的修改，我们希望你能补充这部分代码所涉及的单元测试，并尽可能地提高测试的覆盖率，将其保持在 `85%` 以上（当你提交相关 PR 触发我们的 CI 时，我们会自动统计代码的覆盖率，你可以通过此来校正覆盖率）。

Curve's test code mainly includes the following categories:

* unit test
* Integration Testing
* exception test

We welcome everyone to make any contributions to the Curve community, including but not limited to code, documentation, and issues. If your contribution involves modification of code, we hope you can supplement the unit tests involved in this part of the code, and improve the test coverage as much as possible, keeping it above 85% (when you submit the relevant PR, we will trigger our During CI, we will automatically count the coverage of the code, you can use this to correct the coverage).

## 如何贡献代码

### 1. 我想给Curve贡献代码，需要提前完成哪些准备工作？/ I want to contribute code to Curve, what preparations need to be done in advance

代码开发完成之后，提[pr](https://github.com/opencurve/curve/compare)到curve的master分支。提交pr时，请填写pr模板。pr提交之后会自动触发CI，CI通过并且经过review之后，代码才可合入。CI的Jenkins用户名密码为netease/netease，如遇到CI运行失败可以登录Jenkins平台查看失败原因。 具体规则请见[CONTRIBUTING](https://github.com/opencurve/curve/blob/master/CONTRIBUTING.md).

After finishing the development of your code, you should submit a pull request to master branch of CURVE and fill out a pull request template. The pull request will trigger the CI automatically, and the code will only be merged after passing the CI and being reviewed. The Jenkins username and password of CI is netease/netease. If the CI fails to run, you can login to the Jenkins platform to view the reason for the failure.

For more detail, please refer to [CONTRIBUTING](https://github.com/opencurve/curve/blob/master/CONTRIBUTING.md).

### 2. 如何保证我贡献的代码质量符合Curve项目要求？/ How to ensure that the quality of the code I contribute meets the requirements of the Curve project

请参考[编码规范](https://github.com/opencurve/curve/blob/master/README_cn.md#%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83)

请参考[覆盖率测试要求](https://github.com/opencurve/curve/blob/master/README_cn.md#%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87%E8%A6%81%E6%B1%82)

please refer to [Coding style guides](https://github.com/opencurve/curve/blob/master/README.md#coding-style-guides)

please refer to [Code coverage requirement](https://github.com/opencurve/curve/blob/master/README.md#code-coverage-requirement)

### 3. 我贡献的代码如何才能被Curve社区merge？/ How can my contributed code be merged by the Curve community?

Please refer to the above two questions.

### 4. 新手参与者该怎么逐步上手Curve项目？推荐路径是什么？/ How should novice participants get started with the Curve project step by step? What is the recommended path?

可以先从标有 `good first issue` 的issue入手，这些issue比较独立，并且需求很明确。

You can start with the issues marked `good first issue`, which are relatively independent and have clear requirements.

### 5. 除了提交代码给Curve项目外，我还能给Curve社区做哪些有意义的事情？/ In addition to submitting code to the Curve project, what other meaningful things can I do for the Curve community?

帮助完善Curve文档，参与Curve的各种版本测试并提交发现的问题或建议，给Curve的微信公众号(OpenCurve)投稿，在[Curve论坛](https://ask.opencurve.io/)中提出问题或者回答用户问题，参与Curve社区的系列直播活动

You can help to write documents for Curve, participate in various version tests of Curve and then post issues or advices, contribute articles to Curve's WeChat public account (OpenCurve), ask questions or answer user questions in the [Curve Forum](https://ask.opencurve.io/), and participate in the Curve community Series of live events.
