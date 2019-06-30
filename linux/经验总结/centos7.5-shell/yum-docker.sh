#https://blog.csdn.net/qq_33326449/article/details/79650583
#https://blog.csdn.net/shida_csdn/article/details/78477362
# 安装依赖包
yum install -y yum-utils device-mapper-persistent-data lvm2
# 添加Docker软件包源
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
#关闭测试版本list（只显示稳定版）
sudo yum-config-manager --enable docker-ce-edge
sudo yum-config-manager --enable docker-ce-test
# 更新yum包索引
yum makecache fast
#NO.1 直接安装Docker CE （will always install the highest  possible version，可能不符合你的需求）
#yum install docker-ce
#NO.2 指定版本安装
yum list docker-ce --showduplicates | sort -r  
# yum install docker-ce-17.09.0.ce -y