FROM node:6.0-slim

# Install app dependencies
WORKDIR /app
ADD package.json /app/package.json
RUN npm install --production
RUN ls /app/node_modules


# Bundle app source
ADD . /app


#execute test
RUN cd /app; npm test

EXPOSE  3412
CMD ["node", "/app/server.js"]
