FROM node:6.0

# Install app dependencies
COPY package.json /src/package.json
RUN  npm install --production


# Bundle app source
COPY . /src

#execute test
RUN cd /src; npm test

EXPOSE  3412
CMD ["node", "/src/server.js"]
