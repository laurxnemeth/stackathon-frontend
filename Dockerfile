# pull official base image
FROM node:14.15.0-alpine
WORKDIR /src/App

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn install

# RUN wget --no-check-certificate -q -O - https://github.com/eficode/wait-for/releases/download/v2.1.2/wait-for > /tmp/wait-for && chmod a+x /tmp/wait-for;

COPY . ./

CMD ["yarn", "start"]