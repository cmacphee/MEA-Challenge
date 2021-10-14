#Node base image.
FROM node:14-alpine
# Copy all files into the image working directory
COPY . .
#Install all dependencies
RUN npm install
#Establish PORT to be used
ENV PORT=9000
# Run 'npm start' on container start-up. This is the main process.
ENTRYPOINT ["npm", "start"]
