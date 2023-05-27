#!/bin/bash

sleep 30
kubectl port-forward service/uda-app-service 8080:80
sleep 10     

if curl -s --connect-timeout 10 "http://127.0.0.1:8080" | grep "React App"
then
  exit 0
else
  exit 1
fi