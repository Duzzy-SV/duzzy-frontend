FROM node:16.0.0
USER root

WORKDIR /frontend
COPY . /frontend

ARG API_URL
ENV API_URL $API_URL

RUN yarn
COPY . ./

# build file을 next js를 위해 생성
RUN yarn run build
