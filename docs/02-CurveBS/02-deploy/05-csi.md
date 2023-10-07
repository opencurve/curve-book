# CurveBS CSI 驱动程序


## 简介

该插件实现了 Container Orchestrator(CO) 和 Curve 集群之间的容器存储接口（CSI），从而支持动态地配置 Curve 卷并将其附加到工作负载容器。

Curve 项目信息请参考： [https://docs.opencurve.io](https://docs.opencurve.io) 

## 先决条件

该驱动程序目前使用csi规范v1.5.0开发，并支持kubernetes v1.17+。

其他启用 csi-v1.0+ 的容器编排器环境可能会正常工作。

### CSI 规范和 Kubernetes 版本兼容性

请参考[兼容性矩阵](https://kubernetes-csi.github.io/docs/#kubernetes-releases)。

## 开发者

请参阅 [csi spec](https://github.com/container-storage-interface/spec/blob/master/spec.md)
以及 [curve interface](https://github.com/opencurve/curve-csi/tree/master/docs/curve-interface) 了解更多信息。

## 配置

本CSI驱动支持原生k8s部署及helm部署两种方式：

2. kubernetes直接部署: refer to [deploy doc](https://github.com/opencurve/curve-csi/blob/master/docs/README.md)
2. helm chart部署: [helm installation](https://github.com/opencurve/curve-csi/blob/master/charts/curve-csi/README.md)

## 测试及用户手册

请参阅 [doc](https://github.com/opencurve/curve-csi/blob/master/docs/README.md)。

您可以通过CSC工具获取更多详细信息并测试驱动程序。