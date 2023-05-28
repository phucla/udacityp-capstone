#!/bin/bash

URL="http://a17e3eb369c9347cda05c744748a1837-9b7ae2c4c411d008.elb.us-east-1.amazonaws.com/"            
echo ${URL}   

if curl -s --connect-timeout 10 ${URL} | grep "React App"
then
  exit 0
else
  exit 1
fi