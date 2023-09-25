# 性能测试指南


## 测试工具

| **测试工具** | 适用场景                         | 说明                                                         | 下载地址                                                     |
| ------------ | -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| fio          | 适用于裸盘情况下的性能测试       | fio是测试IOPS的非常好的工具，用来对硬件进行压力测试和验证，支持13种不同的I/O引擎，包括:sync,mmap, libaio, posixaio, SG v3, splice, null, network, syslet, guasi, solarisaio 等等 | <http://freecode.com/projects/fio>                           |
| vdbench      | 适用于文件系统盘情况下的性能测试 | vdbench是一个 I/O 工作负载生成器，用于验证数据完整性和度量直接附加和网络连接的存储的性能。它是一个免费的工具，容易使用，而且常常用于测试测试大量文件、目录的创建、删除性能，以及对文件的读写性能。 | <https://www.oracle.com/technetwork/cn/server-storage/vdbench-downloads-1901681-zhs.html> |


## 单客户端文件系统盘性能测试

（1）vdbench是java开发的测试工具，需要java环境。

​               apt-get install openjdk-7-jdk   -y 

 （2）做文件系统

​                mkfs.ext4 /dev/vdc  (vdc为云盘)

（3） mount设备

​                mount /dev/vdc /mnt

（4）在vdbench文件目录下执行:./vdbench -t

​               出现如下信息则说明可正常使用

vdbench测试需要写测试配置文件。在vdbench 目录下创建profile文件。

​         单节点配置可参考我的如下测试配置文件

```
hd=default,vdbench=/home/chenyunhui/vdbench50406,user=root,shell=ssh
fsd=fsd1,anchor=/mnt,depth=1,width=10,files=10,size=1000m,shared=yes,openflags=o_direct
fwd=fwd1,fsd=fsd1,threads=4,xfersize=4k,fileio=random,fileselect=random,rdpct=50
rd=rd1,fwd=fwd*,fwdrate=max,format=restart,elapsed=3600,interval=1
```

该配置为10 * 10  * 1G的文件数据，具体文件数据可以根据底层集群规模来定。

其中比较重要的参数为：

anchor= 将在其中创建目录结构的目录

width= 要在定位符下创建的目录数

depth= 要在定位符下创建的级别数(目录深度)

files= 要在最低级别创建的文件数

sizes= (size,size,...) 将创建的文件大小

distribution= bottom（如果希望仅在最低级别创建文件）和 all（如果希望在所有目录中创建文件）

fileio= random 或 sequential，表示文件 I/O 将执行的方式。

fileselect= random 或 sequential，标识选择文件或目录的方式。

xfersizes= 数据传输（读取和写入操作）处理的数据大小。

rdpct= 读取和写入操作的百分比。0为全写

threads= 此工作负载的并发线程数量。每个线程需要至少 1 个文件

elapsed= 以秒为单位的运行持续时间。默认设置为 30



vdbench可以在测试时增加-jn的参与用于测试时同时进行数据校验。vdbench每次写操作都会记录在一个表里，对每个512字节数据 的8字节逻辑字节地址和1字节的校验值进行记录，校验值中会记录为第几次写。第一次创建写为00，后续每次覆盖写加1。再次运行时会读出之前的校验日志并进行数据校验。

 读写数据测试和记录校验数据使用命令：

  ./vdbench -jn -f profile  执行该命令时同时会进行数据校验。

但是需要注意，使用vdbench进行一致性校验测试更加适宜于稳定性测试和一致性测试，性能测试过程中使用会影响性能

最后产生的测试结果都是output下面

**errorlog.html**

当为测试启用了数据验证时，它可包含一些数据块中的错误的相关信息：

- 无效的密钥读取
- 无效的 lba 读取（一个扇区的逻辑字节地址）
- 无效的 SD 或 FSD 名称读取
- 数据损坏，即使在使用错误的 lba 或密钥时
- 数据损坏
- 坏扇区

**flatfile.html**

包含 vdbench 生成的一种逐列的 ASCII 格式的信息。

**histogram.html**

一种包含报告柱状图的响应时间、文本格式的文件。

**logfile.html**

包含 Java 代码写入控制台窗口的每行信息的副本。logfile.html 主要用于调试用途

**parmfile.html**

显示已包含用于测试的每项内容的最终结果

**resourceN-M.html、resourceN.html、resourceN.var_adm_msgs.html**

- 摘要报告
- stdout/stderr 报告
- 主机 N 的摘要报告
- 最后 “nn” 行文件 /var/adm/messages 和 /var/adm/messages。每个 M 个 JVM/Slave 的目标主机 N 和主机 N 上为 0。

**sdN.histogram.html、sdN.html**

每个 N 存储定义的柱状图和存储定义 “N” 报告。

**summary.html**

主要报告文件，显示为在每个报告间隔的每次运行生成的总工作负载，以及除第一个间隔外的所有间隔的加权平均值。

- interval：报告间隔序号
- I/O rate：每秒观察到的平均 I/O 速率
- MB sec：传输的数据的平均 MB 数
- bytes I/O：平均数据传输大小
- read pct：平均读取百分比
- resp time：以读/写请求持续时间度量的平均响应时间。所有 vdbench 时间都以毫秒为单位。
- resp max：在此间隔中观察到的最大响应时间。最后一行包含最大值总数。
- resp stddev：响应时间的标准偏差
- cpu% sys+usr：处理器繁忙 = 100（系统 + 用户时间）（Solaris、Windows、Linux）
- cpu% sys：处理器利用率：系统时间



## 多客户端文件系统盘性能测试

多数情况下我们会进行多客户端的测试。多客户端测试参数可配置如下：

```
hd=default,vdbench=/root/vdbench50406,user=root,shell=ssh
hd=hd1,system=183.136.181.150
hd=hd2,system=115.238.123.189

fsd=fsd1,anchor=/mnt1,depth=1,width=10,files=1,size=1000m,openflags=o_direct
fsd=fsd2,anchor=/mnt2,depth=1,width=10,files=1,size=1000m,openflags=o_direct
fwd=fwd1,fsd=fsd1,host=hd1,threads=4,xfersize=4k,fileio=random,fileselect=random,rdpct=50
fwd=fwd2,fsd=fsd2,host=hd2,threads=4,xfersize=4k,fileio=random,fileselect=random,rdpct=50


rd=rd1,fwd=fwd*,fwdrate=max,format=restart,elapsed=3600,interval=1,warmup=300
```

上面的例子是测试两台机器的云盘，每个云盘4个线程对1*10 * 1G的文件进行读写，4K的块大小，50%的写，50%随机，热身写300s，然后测试3600s

相比于多个客户端上跑fio,使用vdbench进行多客户端测试的好处有：

- 1、能够每秒显示整个测试的io叠加，这样测试整个集群的io的时候，可以把所有虚机启动起来，然后进行io的压测，而不是去压单个rbd的iops，那个没有太大的意义，只能是一个数值，真正的环境大多也不是给一个业务使用的，也可以跑起一个业务以后，再看剩余的机器还能跑多少性能
- 2、在测试输出报告里面会根据主机统计一次io，这个面向的业务场景就是，比如某台主机上面可能挂载多块云盘，那么可以根据主机进行统计
- 3、在报告里面还会根据设备显示io个延时的信息，也就是只要是测试设备，每一个的性能指标都能查到，这个的好处就是检测集群里面的io是不是均匀的，如果做了qos，设备的测试性能值是不是跟设置限制一样
