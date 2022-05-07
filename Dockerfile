FROM node:18-alpine3.14

LABEL maintainer="shiqi"

WORKDIR /public

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /public/