FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY /miniapp ./
RUN npm install
RUN npm install axios
RUN npm install styled-components
EXPOSE 8000
CMD [ "npm", "run", "dev" ]