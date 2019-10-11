FROM node:7.7.2-alpine

WORKDIR /usr/app

RUN npm install -g yarn

COPY package.json .
RUN yarn

COPY . .
