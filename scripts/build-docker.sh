#!/usr/bin/env bash
TAG=$1

pwd
docker build -f app/Dockerfile . -t phucla132/fe-app:$TAG
