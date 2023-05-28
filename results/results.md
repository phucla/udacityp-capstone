# UDACITY - CAPSTONE RESULTS

## Use image repository to store Docker images

![Docker build](images/docker.png)

## Execute linting step in code pipeline

### Check lint failed

![lint failed](images/lint%20error.png)

### Check lint passed

![lint failed](images/lint%20pass.png)

## Build a Docker container in a pipeline

![Docker build](images/build-docker-1.png)
![Docker build](images/build-docker.png)

## The Docker container is deployed to a Kubernetes cluster

The cluster is deployed with CloudFormation or Ansible. This should be in the source code of the student’s submission.

### Deploy network

![Deploy network](images/create%20network%201.png)
![Deploy network](images/create%20network%202.png)

### Deploy cluster

![Deploy cluster](images/create%20cluster%201.png)
![Deploy cluster](images/create%20cluster%202.png)

## Use Blue/Green Deployment or a Rolling Deployment successfully

### Screenshot of the Circle CI or Jenkins pipeline showing all stages passed successfully.

![Circle CI](images/circleci-full.png)

### Screenshot of the Circle CI or Jenkins pipeline showing all stages passed successfully.

![Circle CI](images/circleci-full.png)

### Screenshot of your AWS EC2 page showing the newly created (for blue/green) or modified (for rolling) instances running as the EKS cluster nodes.

#### EC2

![EC2](images/ec2.png)

#### EKS

![EC2](images/node-group.png)

#### Revert when smoke test failed

![EC2](images/smoke%20test%20failed.png)

### Kubectl deployment is successful

![Kubectl](images/kubectl-all.png)
![Deploy app](images/deploy-app.png)
![Smoke test passed](images/smoke-test-passed.png)

### Screenshot showing that you can access the application after deployment.

![App](images/app%20v1.png)
