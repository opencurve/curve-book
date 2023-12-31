# 迁移数据到 CurveFS

CurveFS在不同应用场景落地使用时，不可避免的涉及到将原系统数据迁移到CurveFS，特别是大数据和AI相关业务，他们数据量巨大（包括海量小文件），如何做到高效、可靠的数据迁移是一切的开始。

## 源数据存储介质

1. 本地磁盘目录
2. 集中式存储或分布式存储：NAS存储、NFS、ceph、glusterfs、minio等
3. 云存储：包括各类公有云文件存储和对象存储等

## 数据迁移的工具

我们调研了几种常见的数据迁移工具，同时也在相同场景下测试他们在CurveFS上的表现：

| 名称      | 需单独安装 | 核心应用场景                                                 | 增量同步 | 校验 | 并发 | 多机并发 |
| --------- | ---------- | :----------------------------------------------------------- | -------- | ---- | ---- | -------- |
| cp        | 否         | 本机文件的拷贝，不支持网络传输和远程同步                     | 否       | 否   | 否   | 否       |
| rsync     | 否         | 支持通过SSH RSH协议在本地或远程系统之间同步和备份文件        | 是       | 是   | 否   | 否       |
| rclone    | 是         | 支持本地和云服务之间的数据同步，支持超过50+中云服务          | 是       | 是   | 是   | 否       |
| juicesync | 是         | 多机分布式数据同步，主要支持本地、对象存储、POSIX文件系统、HDFS间的数据互相同步 | 是       | 是   | 是   | 是       |

测试数据集使用测试工具mdtest生成，命令为：`mdtest -z 10 -b 2 -I 1000 -w 131072 -C -F -d /curvefs/data` ，共 2047000 个 128KB 文件：

| 名称                  | 命令                                                         | 主要请求（文件数n，目录数m）                                 | 耗时比较             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------- |
| cp(v8.26)             | `cp -a src dst`                                                | lookup: n+m<br/>mkdir: m<br/>getattr: m<br/>create: n<br/>getxattr: size/128k \* n<br/>write: size/128k \*n<br/>flush: n<br/>release: n<br/>setattr: n + 2m<br/>setxattr: n + m<br/>removexattr: m | 2h10min，带宽33MiB/s |
| rsync(v3.1.2)         | `rsync -a --progress src dst`                                  | lookup: 4n + 3m<br/>mkdir: m<br/>getattr: 2\*n + m<br/>create: n<br/>getxattr: size/128/2 \* n<br/>write: size/128 \* n<br/>flush: n<br/>release: n<br/>setattr: 3\*n + 2\*m<br/>rename: n | 5h13min，带宽13MiB/s |
| rsync(v3.1.2)         | `rsync -a --inplace --progress src dst`                        | lookup: 3n + 3m<br/>mkdir: m<br/>getattr: n + m<br/>create: n<br/>getxattr: size/128/2 \* n<br/>write: size/128 \* n<br/>flush: n<br/>release: n<br/>setattr: 3n + 3m | 3h30min带宽22MiB/s   |
| rclone(v1.63.1)       | `rclone copy --inplace --metadata --create-empty-src-dirs --links --transfers 20 --progress src dst` | lookup: n + m<br/>mkdir: m<br/>getattr: n + m<br/>create: n<br/>getxattr: size/32 \* n<br/>write: size/32 \* n<br/>flush: n<br/>release: n<br/>setattr: 4n<br/>readdir: m | 37min，带宽115MiB/s  |
| juicesync(v1.1.0-rc1) | `juicefs sync --threads=20 --list-threads=2 --links --dirs --perms src dst` | lookup: 3n + 3m<br/>mkdir: m<br/>getattr: huge<br/>create: n<br/>getxattr: size/32 \* n<br/>write: size/32 \* n<br/>flush: n<br/>release: n<br/>setattr: 3n + 3m<br/>readdir: huge | 2h28min带宽28MiB/s   |

> 注：上述命令中`src`为迁移数据的源目录，`dst`为迁移的目标目录，这里是 CurveFS 挂载点，下同。

## 采用的迁移方案

这次迁移是将某业务方存储在CephFS中的文件全量迁移至CurveFS中，数据特点是大文件极少，几百字节到数十kB的小文件巨多，单目录文件数量多达5千万个，文件总数量近百亿。

1. 目前CurveFS rename操作是原子操作，耗时相对较长，所以工具需要支持直写（--inplace)。
2. 需要支持并发，在海量小文件时效果更加明显。
3. 支持校验，数据迁移过程保证文件的完整性尤为重要。

选择迁移工具：rclone v1.63.1

迁移命令：`rclone copy --inplace --metadata --create-empty-src-dirs --links --transfers 500 --progress --fast-list --checkers 16 src dst`

| 参数                    | 含义                                               |
| ----------------------- | -------------------------------------------------- |
| --inplace               | 直写目的文件，不用先写临时文件再rename             |
| --metadata              | 保留文件元数据（mode uid gid time)                 |
| --create-empty-src-dirs | 保留空目录，默认源中如果有空目录则不会在目的端创建 |
| --links                 | 保留符号链接                                       |
| --transfers             | 上传并发度                                         |
| --progress              | 显示同步进度                                       |
| --fast-list             | 提高list速度，会增加内存使用                       |
| --checkers              | 校验线程数                                         |

## 注意事项

1. rclone copy 不会同步最上层目录，只会同步其内容，例如(src: /A/file，dest: /B) rclone copy /A /B，结果是/B/file，而不是/B/A/file。
2. 单rclone并发度不能设置太高，自身竞争可能会比较大，但可以分多个目录跑多个rclone进程，我们本次迁移采用100-500，具体需要关注client节点负载和源&目的系统的集群压力。
3. rclone目前不支持保留目录的元数据，即使指定了--metadata。我们基于rclone最新稳定版（v1.63.1)进行了修改，使得其支持在本地后端同步时对目录元数据进行保留（https://github.com/opencurve/curve-rclone/tree/v1.63.1-dir-metadata）。
3. rclone默认使用size 和 mod time进行校验，如果对完整性要求更强，可以在命令中指定 --checksum，这样会基于文件size 和 checksum进行校验。

最后关于迁移时间的预估，除了考虑数据size的大小还要考虑文件数量，如果是大文件居多可根据带宽进行评估，如果小文件居多需要根据qps进行初步评估，同时需要结合源端和目的端系统的系统压力、网络带宽等综合评估迁移所需时间。具体的迁移方案需要根据业务特点综合考虑，保证数据的平滑、高效、可靠的迁移。


## 后续规划
后续我们将会把rclone整合到CurveAdm运维工具中，方便用户一键启动数据迁移操作，欢迎感兴趣的小伙伴参与开发设计。
