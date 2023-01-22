---
title: 无法编译resources文件夹下的配置文件
date: 2021-11-26 10:32:21
permalink: /pages/f45480/
categories:
  - java
  - maven
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 解决步骤

- **resources文件夹名字错了**
- **build标签里写**

```xml
<resources>
            <!-- ide开发 -->
            <resource>
                <directory>${project.basedir}/src/main/resources/</directory>
                <targetPath>${project.build.outputDirectory}</targetPath>
            </resource>
</resources>
```

- 检查pom文件中将项目的打包方式是否设置成了pom

# 参考资料

resources文件夹名字错了

[检查pom文件，是否有排除资源，rebuild ](https://blog.csdn.net/xingkaichun/article/details/91857025)

[pom文件中将项目的打包方式设置成了pom，导致的问题](https://blog.csdn.net/llllllllll4er5ty/article/details/103297623)

