FROM node:12 as fl-plaform-frontend-v2
WORKDIR /app
COPY . ./
RUN npm i --silent