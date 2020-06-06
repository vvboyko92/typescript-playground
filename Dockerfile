FROM node:current
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN yarn global add nodemon@1.11.0
ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY package*.json ./
COPY webpack.config.js ./
RUN yarn install
COPY . .
EXPOSE 3000