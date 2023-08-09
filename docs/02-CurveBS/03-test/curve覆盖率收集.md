# curve覆盖率收集优化

curve主要从2个维度衡量单元测试覆盖率：行覆盖率和分支覆盖率。

项目组内规定，所有模块行覆盖率需要达到70%；分支覆盖率mds模块需要达到70%，其他模块需要达到65%。否则ci自动失败，代码无需进入review阶段，更没法进入仓库。

先看看效果：

我们在ci配置了单元测试覆盖率收集的job,每次提交代码都会触发编译、单元测试和覆盖率收集。


一些覆盖率收集的注意事项：

1.因为我们是用bazel编译的，而bazel自带的coverage（继承自test, test继承自build）参数并不成熟，因此，不考虑使用coverage参数，直接使用build参数；build需要带上--collect_code_coverage参数

2.bazel编译时，需要注意build文件的放置，因为覆盖率解析的时候需要gcno和gcda文件路径匹配，基本上src每个目录均会放置BUILD，层层依赖


3.覆盖率收集会收集到很多第三方依赖等代码的覆盖率，影响我们自己的覆盖率，因此lcov需要通过--remove参数去除这些依赖的覆盖率收集

4.分支覆盖的时候，所有跳转都被计算成分支，而我们真正的关心的是类似那些if...else的分支，因此需要通过脚本解析，去除这些不需要的分支，思路如下：

（a.按照lcov常规的方法收集覆盖率 

   b.解析lcov生成的文件中的每一行， SF：开头的行为源文件的名称 BRDA：开头的行为分支覆盖检测的那一行，其中分a,b,c,d，a代表源文件的代码行，b和c是内部定义的值，大概是代码块等信息；d代表是否覆盖，0表示未覆盖，其他数字代表覆盖次数

 c.去源文件中去除注释，搜索是否是if开头的，如果不是，则将这个BRDA去除 ）

  d.我们已经直接提供了脚本filterbr.py  gen-coverage.py，直接运行gen-coverage.py即可，所有文件保留在./coverage目录下面

5.一些很难覆盖到的行或者分支，比如abort()等，可以通过参数过滤，但是不建议使用，参数配置如下，直接在源代码中添加"//LCOV_EXCL_BR_LINE"去除该行分支覆盖率统计或者"//LCOV_EXCL_LINE"去除该行行覆盖率统计。

lcov_excl_br_line = LCOV_EXCL_BR_LINE|g_return_if_fail|g_return_val_if_fail

lcov_excl_line = LCOV_EXCL_LINE|g_return_if_reached|g_return_val_if_reached|g_assert_not_reached 




