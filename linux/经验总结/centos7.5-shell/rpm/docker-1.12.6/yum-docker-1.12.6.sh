#����Ѱ�װdocker��docker-engine��docker-ce��ص����������ж�ص�
yum -y remove docker docker-common docker-selinux docker-engine docker-engine-selinux container-selinux docker-ce
#ɾ�����еľ������������ݾ������ļ���
rm -rf /var/lib/docker
yum localinstall *.rpm -y
systemctl enable docker
systemctl start docker
docker version
#���в�������hello-world
docker run --rm hello-world