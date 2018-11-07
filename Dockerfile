FROM node as build-dist

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn
COPY . ./
RUN yarn build

FROM nginx
COPY --from=build-dist /usr/src/app /usr/share/nginx/html
