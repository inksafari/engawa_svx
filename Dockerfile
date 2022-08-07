ARG NODE_VERSION=18
FROM --platform=linux/amd64 node:${NODE_VERSION}-slim

RUN corepack enable
WORKDIR /app
