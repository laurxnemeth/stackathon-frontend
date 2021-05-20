# pull official base image
FROM node:13.12.0-alpine
WORKDIR /src/App

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn install

COPY . ./

CMD ["yarn", "start"]