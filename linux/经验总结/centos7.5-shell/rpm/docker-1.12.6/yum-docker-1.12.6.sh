#如果已安装docker、docker-engine、docker-ce相关的软件包，则卸载掉
yum -y remove docker docker-common docker-selinux docker-engine docker-engine-selinux container-selinux docker-ce
#删除所有的镜像、容器、数据卷、配置文件等
rm -rf /var/lib/docker
yum localinstall *.rpm -y
systemctl enable docker
systemctl start docker
docker version
#运行测试容器hello-world
docker run --rm hello-world