/**
 * ! Kubenetes architruee
 * 1 cluster = 1master ndoe + mu;tiple workder nodes
 * master node controls and manages cluster  
 * worker nodes - where you app (containers)actually runs  
 * 
 * 
 * ! master node  components 
 * ? api server
 * it is the front door of the kubenrets cluster
 * every comamnd or request (like kubectl gets  pots) goes thorugh the  api serve 
 * it valdiates process  and sends it  request to right component 
 * 
 * 
 * ? etcd 
 * it is th ekey value database of the entire cluster 
 * stores configuration , vcluter state , secrets ,etc
 * if  etcd crashes, kuberneets lsoes  memmory of eevrything 
 * 
 * 
 * ? controller manager 
 * ensures that the cluster is in the  desired state
 * example : if  3 pods are needed and only 2 are running  it will cretae the  3rd pod
 * words like a watchdog 
 * 
 * 
 * ? scheduler
 * decides whcih node will run the new pod
 * checks avbaible resources (cpu ram ) and scheudels
 * pods  smartly 
 * 
 * 
 * 
 * ! workder node component 
 * ? kubelet 
 * agent running on eveyr workder node 
 * it tlaks to the master and runs the assigned pods
 * checks if the pod is healthy or crahsed 
 * 
 * ? kub-proxy
 * manages netwrokingand routing insdie cluster
 * ensures traffic reaches  the  correct pod insdie the node  
 * 
 * 
 */