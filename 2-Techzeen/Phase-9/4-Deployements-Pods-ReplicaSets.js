/**
 * Deployment  Pods replicasets and scalifgn with kubectl 
 * 
 * star fdockedr 
 * firr vs code mein aake minikube ko start laro 
 * 
 * what dpoes minkube status do 
 * 
 * PS C:\Users\Aayu0\Desktop\kubernetes> minikube start --driver=docker
😄  minikube v1.38.1 on Microsoft Windows 11 Home Single Language 25H2
✨  Using the docker driver based on existing profile
👍  Starting "minikube" primary control-plane node in "minikube" cluster
🚜  Pulling base image v0.0.50 ...
🏃  Updating the running docker "minikube" container ...
🐳  Preparing Kubernetes v1.35.1 on Docker 29.2.1 ...
🔎  Verifying Kubernetes components...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
PS C:\Users\Aayu0\Desktop\kubernetes> minikube status
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured

PS C:\Users\Aayu0\Desktop\kubernetes> 
apiVersion: v1
kind: Pod

metadata:
  name: pizza-pod
  labels:
    app: pizza
    department: pizza

spec:
  containers:
    - name: chef
      image: kicbase/echo-server:1.0
      ports:
        - containerPort: 8080
PS C:\Users\Aayu0\Desktop\kubernetes> kubectl describe pod pizza
Name:             pizza-pod
Namespace:        default
Priority:         0
Service Account:  default
Node:             minikube/192.168.49.2
Start Time:       Mon, 10 Aug 2026 21:36:15 +0530
Labels:           app=pizza
                  department=pizza
Annotations:      <none>
Status:           Running
IP:               10.244.0.6
IPs:
  IP:  10.244.0.6
Containers:
  chef:
    Container ID:   docker://188d84b9ecfc313b067737fee3e99e378da1880f0901b0254d3cd98348036ee0
    Image:          kicbase/echo-server:1.0
    Image ID:       docker-pullable://kicbase/echo-server@sha256:127ac38a2bb9537b7f252addff209ea6801edcac8a92c8b1104dacd66a583ed6
    Port:           8080/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Mon, 10 Aug 2026 21:36:16 +0530
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-dtr45 (ro)
Conditions:
  Type                        Status
  PodReadyToStartContainers   True 
  Initialized                 True 
  Ready                       True 
  ContainersReady             True 
  PodScheduled                True 
Volumes:
  kube-api-access-dtr45:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    Optional:                false
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s

PS C:\Users\Aayu0\Desktop\kubernetes> kubectl create deployement pizza-deployement --image=kicbase/echo-server:1.0
error: unknown flag: --image
See 'kubectl create --help' for usage.
kubectl get pods --selector=department=pizza
NAME        READY   STATUS    RESTARTS   AGE
pizza-pod   1/1     Running   0          4m29s
PS C:\Users\Aayu0\Desktop\kubernetes> 

 * ! what are replicaset 
 * 
 * PS C:\Users\Aayu0\Desktop\kubernetes> kubectl create deployment pizza-deployment --image=kicbase/echo-server:1.0
deployment.apps/pizza-deployment created
PS C:\Users\Aayu0\Desktop\kubernetes> kubectl get deployments
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
hello-k8s          1/1     1            1           3h52m
pizza-deployment   1/1     1            1           5s
PS C:\Users\Aayu0\Desktop\kubernetes> kubectl scale deployment pizza-deployment --replicas=3
deployment.apps/pizza-deployment scaled
PS C:\Users\Aayu0\Desktop\kubernetes> kubectl get pods
NAME                               READY   STATUS              RESTARTS        AGE
hello-k8s-58fc8679fb-mcwcm         1/1     Running             1 (3h44m ago)   3h52m
pizza-deployment-6c5f7b895-5s85h   0/1     ContainerCreating   0               5s
pizza-deployment-6c5f7b895-p4zmh   1/1     Running             0               5s
pizza-deployment-6c5f7b895-qw4xl   1/1     Running             0               42s
pizza-pod                          1/1     Running             0               3m31s
PS C:\Users\Aayu0\Desktop\kubernetes> 
 * 
 * 
 * 
 */