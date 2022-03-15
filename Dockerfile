FROM node:16

# create app directory, this is in our container/in our image
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "node" , "dist/main" ]