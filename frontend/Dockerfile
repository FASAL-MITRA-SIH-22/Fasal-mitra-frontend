# FROM node
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# CMD npm start
# EXPOSE 8080

FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]