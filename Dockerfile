FROM node:20-alpine AS builder

WORKDIR /app/

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 300000

COPY . .
RUN yarn build

FROM nginx:1.21.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY conf/conf.d/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]