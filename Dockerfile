FROM node:6.0

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install --production
RUN ls /src

# Bundle app source
COPY . /src

EXPOSE  8080
CMD ["node", "/src/index.js"]
