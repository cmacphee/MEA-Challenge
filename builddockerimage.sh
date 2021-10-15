#!/bin/bash
#ask for tag variable
echo "Enter a tag for the image"
read tag
#installs the dependencies
npm install
#build node
npm build
#builds image using docker file
docker build -t nodeappimage_connor:${tag} .
echo "we have built a docker image with the tag: ${tag}"
#display current images
docker images
#deleted old container
docker stop nodeappcontainer
docker rm nodeappcontainer
echo "old container deleted"
#build container with new image
docker run -d -p 9000:9000 --name nodeappcontainer nodeappimage:${tag}
docker ps
