#!/bin/bash
# 以下是一个在 Mac 上使用的 shell 脚本，可以不断地尝试将 Git 代码推送到 GitHub，直到成功为止

# 定义要执行的命令
command="git push origin master"

while true; do
    # 执行命令
    eval $command

    # 检查命令的退出状态码
    if [ $? -eq 0 ]; then
        echo "代码已成功推送到 GitHub！"
        break
    else
        echo "代码推送失败，正在重试..."
    fi
done