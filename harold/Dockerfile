FROM node:14-alpine3.11

RUN mkdir -p /var/web
WORKDIR /var/web

RUN apk update && \
    apk upgrade && \
		apk add git python gcc make g++

RUN npm install -g npm@^6.0.0

COPY . .

RUN npm install

CMD ["npm", "start"]