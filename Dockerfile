FROM node:boron

RUN mkdir -p /src/app
WORKDIR /src/app

COPY package.json ./

RUN npm install

COPY . /src/app

EXPOSE 8080

CMD [ "npm", "start" ]