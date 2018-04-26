# Kubernetes Tech Talk - 4/25/2018

To use, deploy services.yaml, and copy the LoadBalancer IP used to the axios request in ``` k8s-react-demo/src/Hostname.tsx```.

Build both ```k8s-react-demo``` and ```k8s-go-demo``` images, and push them to an image registry.

Modify the ```k8s-deploy.yaml``` in both directories to the new respective images. 

Apply both deployments. 

Scale the ```k8s-react-demo``` deployment, and check the changing hostname on the ```k8s-react-demo``` LoadBalancer IP.