#/bin/bash

PATH=$1
TAG=$2

docker build -f $PATH . -t phucla132/$TAG:latest

fi