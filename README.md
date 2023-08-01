# 如何提交文档

文档界面一般分为3大部分，左侧导航栏，中间内容，右侧文档TOC。

左侧导航栏由目录结构直接生成，右侧文档TOC由markdown header解析生成。

## 目录结构介绍

所有的文档在docs目录下。结构预期如下

```
intro.md (网站介绍页面，打开网站的默认页面)
curvebs
    - _category_.json
    - deploy
        - _category_.json
        - offline-deploy.md
    ...
curvefs
    ...
```

这里主要分为两块

1. markdown文档，一般无需更多设置
2. 目录层级，在每个目录下，需要一个_category_.json，来描述这个目录的名称，排序，目录index生成，能否折叠，默认是否折叠等

一个完整的_category_.json的example

```json
{
  "position": 2,
  "label": "Tutorial",
  "collapsible": true,
  "collapsed": false,
  "className": "red",
  "link": {
    "type": "generated-index",
    "title": "Tutorial overview"
  },
  "customProps": {
    "description": "This description can be used in the swizzled DocCard"
  }
}
```

一般只需要如下的example, 顺序我们将约定使用数字前缀进行标识。

```json
{
  "label": "Tutorial",
  "link": {
    "type": "generated-index",
  }
}
```

## how to

### 已有目录添加文档

直接添加文档即可

### 需要修改目录结构

1. 添加对应的目录和_category_.json
2. 然后添加文档即可
