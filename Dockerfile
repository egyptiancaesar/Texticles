FROM node:10.13.0-alpine

ENV MODE "dev"

WORKDIR /src

COPY package.json .
RUN npm install

ADD . /src
RUN npm run build

RUN npm run start
EXPOSE 8090