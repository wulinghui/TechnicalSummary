# 背景
被工作要求内网办公，并且没有网络的情况。搭建jdk17的springboot3的开发环境

# jdk17的下载
- 如果是公网环境直接在idea中 File -> Project Structure -> Project -> SDK -> Download Jdk 就行啦。 就所有的idea都可以使用啦。
## 内网环境操作
- 需要去oracle[下载jdk17](https://www.oracle.com/cn/java/technologies/downloads/#jdk17-windows)
- 下载完成后在idea 中 File -> Project Structure -> Project -> SDK -> Add Jdk from disk  选择解压的路径就行啦。 不需要在本地配置jdk17的环境，本地环境还可以是jdk8。

# idea的下载
- 注意： window7 只能使用 2023.1.5的idae版本。其他往上的版本会出现不兼容的情况。
- 注意： 2020版本的idea不支持jdk17。
- 下载idea就行[idea历史版本下载_idea 历史版本下载-CSDN博客](https://blog.csdn.net/u011628753/article/details/143186038)

## [idea插件](https://blog.csdn.net/libusi001/article/details/108055998)
- 不要去官网下载后在安装。 有时候会出现不兼容的情况。
- 建议直接在公网将对应的插件安装好后。 点击idea中 File -> Manage IDE settings -> Export Settings 复制对应的路径
- 进入上面复制的目录后，找到对应的plugins。
- 在内网中，将plungins复制到对应的上面的那个路径下就行啦。


## maven仓库强制走本地
- 默认不配置，有些情况会出现就算本地仓库有啦还是去远程拉依赖。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

<localRepository>E:/repository</localRepository>

    <mirrors>
        <mirror>
            <id>central</id>
            <mirrorOf>*</mirrorOf>
            <name>central</name>
            <url>file://E:/repository</url>
        </mirror>
    </mirrors>
</settings>

```
