FROM node:14-alpine

RUN mkdir /app
WORKDIR /app
COPY ./back/package.json ./package.json
COPY ./back/tsconfig.json ./tsconfig.json
COPY ./back/src ./src

RUN npm i

CMD npm start