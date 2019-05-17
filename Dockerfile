FROM node:latest

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm test
RUN npm run build

RUN rm -rf ./node_modules
RUN rm -rf ./src

RUN npm install -g serve

RUN ls /app

EXPOSE 8080
CMD serve ./build/ -p 8080 --no-clipboard
