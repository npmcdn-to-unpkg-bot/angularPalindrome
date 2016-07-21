FROM node:6.0-slim

WORKDIR /app

# Install app dependencies
COPY package.json /app/package.json
RUN npm install --production 
RUN ls /app/node_modules

# Bundle app source
COPY . /app

EXPOSE  8080
CMD ["node", "/app/index.js"]
