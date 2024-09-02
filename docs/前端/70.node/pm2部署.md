# pm2简介
能够充分利用多核 CPU且能够负载均衡、能够帮助应用在崩溃后、指定时间(cluster model)和超出最大内存限制等情况下实现自动重启。
- 自动重启：避免nohup 失败后就彻底的挂啦的问题。

## 使用方法
`pm2 start npm --name "my-app-prod" -- run start -- --ENV=product`
>  这里的--之后的参数会传递给你的npm脚本，因此--ENV=develop会被正确地传递
>  用 pm2 启动一个名称为my-app-prod。 启动指令为 npm run start --ENV=product
>  缺点：重复执行，会有多个my-app-prod 任务 存在 pm2 list 列表里面。

## 推荐使用方法
利用PM2的生态系统文件：
```Javascript
module.exports = {
    apps: [
        {
            name: 'my-app-prod',
            script: 'npm',
            exec_interpreter: 'node', // 使用 node 解释器
            exec_mode: 'cluster', // 强制使用 fork 模式(单个可以正常输出日志) ,  默认是 cluster 模式：
            log_file: './logs/combined.log',
            out_file: './logs/out.log',
            error_file: './logs/error.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            args: 'run start',
            env: {
                // NODE_ENV: 'product',  // 定义环境变量。可以在${process.env.NODE_ENV}使用。
            },
            instances: 'max', // 'max' 根据 CPU 核数启动实例数量,  //1 确保只启动一个实例：建议模式为fork，也就是单线程工作。
            autorestart: true, // 自动重启。
            restartDelay: 3000,// 在这里设置重启间隔时间，例如设置为5秒（5000毫秒）
            watch: false,
            max_memory_restart: '1G',
        },
    ],
};



module.exports = {
    apps: [
        {
            name: 'tg-bot', // 应用程序的名称
            script: 'dist/index.js', // 要运行的脚本文件
            instances: '1', // 实例数量。'max'表示使用所有CPU核心数
            exec_mode: 'cluster', // 运行模式，此处为集群模式
            increment_var: 'PORT', // 在集群模式下递增的端口变量名
            // 在这里设置重启间隔时间，例如设置为5秒（5000毫秒）
            restartDelay: 3000,
            env: {
                NODE_ENV: 'product', // 设置环境变量，此处为生产环境
            },
            watch: true, // 是否监视文件变化，如果文件发生变化，pm2会重新加载应用程序
            ignore_watch: ["logs/*.log"], // 指定要忽略的文件或文件夹的匹配模式。这样可以排除日志文件或其他不希望触发重启的文件,否则会一直重启服务。
            // 合并日志输出到单一文件。  必须指定否则合并没有用。
            log       : './logs/combined.log',
            merge_logs: true, // 这一行确保了stdout和stderr被合并
            log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS', // 将输出时间格式化的日志，否则就没有对应时间输出。
        },
    ],
};

```
以上定义：集群模式，将产生多个实例,并存在服务器上。    
使用：    
`pm2 start ecosystem.config.js`
> 如果修改代码再次用pm2 start就行。

## [pm2-cluster集群模式示例代码](https://www.jianshu.com/p/3ddb9eab15a3)
```Javascript
// pm2.config.js
module.exports = {
  apps: [
    {
      script: "httpServer.js",
      instances: "4",
      exec_mode: "cluster",
    },
  ],
};
```

## 部署过程中遇到的问题。
- ecosystem.config.js 更改不生效的问题。
> 需要 pm2 delete  my-app-prod , 再 start

- 端口冲突的问题
> 需要先 pm2 stop xxx , 再delete ，再start .

- 抱错日志和代码内容不一致的问题
> 缓存，需要 stop ， delete ， reset ，甚至删除 ~/.pm2 整个文件。
> 哈哈哈，其实本质是他将报错,调试日志放到不同的文件中，你删除对应文件，获得不理他就行。


## 部署Fastify项目踩的坑。
- 背景使用啦自定义的日志，引入了pinoPretty，并自定义logger删除req和res的公共内容。
- 在cluster模式下，就只能使用默认的日志。 亲测仅仅只能有日志级别的更改。  这种情况可以使用pm2的集群模式。
- 因为cluster模式下，端口冲突的问题，多实例启动不了，改成 `instances : 1`
- 因为cluster模式下，日志不打印的问题。 改成` exec_mode: 'fork' `模式就行。
- 如需多实例并自定义日志，来实现多线程的操作，应采用nginx等反向代理来实现。 不要使用pm2的集群模式。


## 日志轮换插件
pm2-logrotate插件允许你同时配置日志文件的大小限制和时间间隔，以确保日志文件不会无限制增长，同时定期轮换日志文件。
```bash
# 安装
pm2 install pm2-logrotate
# 配置
## 按文件大小轮换，并且按时间间隔轮换。 2者满足一个就轮换
pm2 set pm2-logrotate:max_size 10M     # 设置每个日志文件的最大大小为 10MB
pm2 set pm2-logrotate:retain 10        # 保留最近的 10 个日志文件
pm2 set pm2-logrotate:compress true    # 启用日志压缩
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss   # 设置日期格式
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'       # 每天轮换一次日志
# 生效
pm2 restart all
```
