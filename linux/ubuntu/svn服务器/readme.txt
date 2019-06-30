1. Ubuntu16.04 搭建svn - sm_wang的博客 - CSDN博客。里面的错误
```authz配置文件的错误。
[groups]
admin = swmang
[/]
@admin = rw
* = rw
```

2. 本地检出的测试。
svn co svn://127.0.0.1/repository --username smwand --password 123456

3. 本地出现： svn: E170001 : Authorization failed 的问题，大部分都是配置文件的问题。

4. 