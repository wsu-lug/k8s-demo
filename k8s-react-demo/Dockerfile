FROM node as node-build
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx
RUN rm -rf *
COPY --from=node-build /app/build/ html/
EXPOSE 80