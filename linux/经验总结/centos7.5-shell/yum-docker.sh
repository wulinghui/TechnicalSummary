#https://blog.csdn.net/qq_33326449/article/details/79650583
#https://blog.csdn.net/shida_csdn/article/details/78477362
# ��װ������
yum install -y yum-utils device-mapper-persistent-data lvm2
# ���Docker�����Դ
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
#�رղ��԰汾list��ֻ��ʾ�ȶ��棩
sudo yum-config-manager --enable docker-ce-edge
sudo yum-config-manager --enable docker-ce-test
# ����yum������
yum makecache fast
#NO.1 ֱ�Ӱ�װDocker CE ��will always install the highest  possible version�����ܲ������������
#yum install docker-ce
#NO.2 ָ���汾��װ
yum list docker-ce --showduplicates | sort -r  
# yum install docker-ce-17.09.0.ce -y