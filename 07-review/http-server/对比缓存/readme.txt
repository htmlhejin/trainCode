#! /usr/bin/env node   
node表示以哪种形式启动脚本

commander模块表示可以在myserver后输入不同的命令来执行不同的任务，如vue --help,vue create xxx,也想让myserver可以这样，需要安装commander



babel src -d dist  表示把src中的高级语法文件转成低级语法文件输出到dist目录下，但是会报错，'babel' 不是内部或外部命令，也不是可运行的程序
我们可以使用npx babel src -d dist把src中的高级语法文件转成低级语法文件输出到dist目录下,安装完node后自动就有了npx