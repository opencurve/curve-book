# curvefs fs级别配额

## 背景

curvefs缺少配额功能。

根据经验，常用的配额往往是bytes的配额，即容量限制。

考虑到我们的代码做目录级别的配额，现有代码缺失的功能过多，工作量比较大。

目前暂时考虑实现fs级别的bytes的配额功能。fs也对应了目前k8s的pvc级别。

目前只针对fstype为s3的fs实现了这一功能，fstype为block的暂未测试。

## 实现

### 数据持久化

fs配额依赖于两个数值：

1.  设定的quota值：存在FsInfo中的capacity
2.  现有的使用量：存在fs root inode的xattr中的curve.fs.bytes

## 相关数据更新流程

#### 设定的quota值

在fs创建的时候，quota值就会被设定。默认值将会为0，代表默认不启用quota检查。

我们应该提供修改quota值的命令行工具（todo1）

#### fs现有的bytes使用量

1.  一个client对应一个fs, 他会聚合一个时间段（目前是默认5s，应该可配置todo2）内的数值，然后上报fsdelta给metaserver

    1.  涉及到的client操作有write, truncate, unlink等
    2.  为了性能考虑，这样的rpc不适合每个操作都上报，所以做了聚合，定期上报
    3.  client如果crash，这几秒的数据会丢失；我们应该提供能够校准的手段（todo3）
2.  fsdelta请求发到metaserver后，metaserver会聚合后走raft请求持久化更新到fs的root inode的xattr中

    1.  为了性能考虑，我们不会来一个fsdelta就处理一下，会聚合一段时间内（目前默认5s，应该可配置todo4）的更新，集中apply
    2.  xattr的更新存在问题，wanghai的一些代码会强制覆盖整个xattr,而不是更新需要更新的部分。需要注意关闭配置项enableSumInDir，不然会导致统计大幅度失准

## quota限制生效流程

涉及的client操作有FuseOpWrite和Truncate

1.  相关数据的维护：我们不可能每次op检查的时候都去metaserver查询最新的数据，所以我们将quota的值和实际的使用量进行缓存，并定期更新（目前是默认5s，应该可配置todo5）
2.  检查流程：检查剩余空间是否足够，这里如果本地有未上报的fsdelta，我们会将其加入到计算中

