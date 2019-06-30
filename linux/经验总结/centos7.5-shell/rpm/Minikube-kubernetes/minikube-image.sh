docker pull wulinghui/storage-provisioner:v1.8.1
docker pull wulinghui/k8s-dns-sidecar-amd64:1.14.8
docker pull wulinghui/k8s-dns-kube-dns-amd64:1.14.8
docker pull wulinghui/kube-proxy-amd64:v1.10.0
docker pull wulinghui/kubernetes-dashboard-amd64:v1.10.0
docker pull wulinghui/kube-addon-manager:v8.6
docker pull wulinghui/k8s-dns-dnsmasq-nanny-amd64:1.14.8
docker pull wulinghui/kube-controller-manager-amd64:v1.10.0
docker pull wulinghui/kube-scheduler-amd64:v1.10.0
docker pull wulinghui/etcd-amd64:3.1.12
docker pull wulinghui/kube-apiserver-amd64:v1.10.0
docker pull wulinghui/pause-amd64:3.1

docker tag wulinghui/storage-provisioner:v1.8.1 gcr.io/k8s-minikube/storage-provisioner:v1.8.1
docker tag wulinghui/k8s-dns-sidecar-amd64:1.14.8  k8s.gcr.io/k8s-dns-sidecar-amd64:1.14.8
docker tag wulinghui/k8s-dns-kube-dns-amd64:1.14.8  k8s.gcr.io/k8s-dns-kube-dns-amd64:1.14.8
docker tag wulinghui/kube-proxy-amd64:v1.10.0  k8s.gcr.io/kube-proxy-amd64:v1.10.0
docker tag wulinghui/kubernetes-dashboard-amd64:v1.10.0  k8s.gcr.io/kubernetes-dashboard-amd64:v1.10.0
docker tag wulinghui/kube-addon-manager:v8.6  k8s.gcr.io/kube-addon-manager:v8.6
docker tag wulinghui/k8s-dns-dnsmasq-nanny-amd64:1.14.8  k8s.gcr.io/k8s-dns-dnsmasq-nanny-amd64:1.14.8
docker tag wulinghui/kube-controller-manager-amd64:v1.10.0  k8s.gcr.io/kube-controller-manager-amd64:v1.10.0
docker tag wulinghui/kube-scheduler-amd64:v1.10.0  k8s.gcr.io/kube-scheduler-amd64:v1.10.0
docker tag wulinghui/etcd-amd64:3.1.12  k8s.gcr.io/etcd-amd64:3.1.12
docker tag wulinghui/kube-apiserver-amd64:v1.10.0  k8s.gcr.io/kube-apiserver-amd64:v1.10.0
docker tag wulinghui/pause-amd64:3.1  k8s.gcr.io/pause-amd64:3.1