# 使用 Node.js 镜像进行前端编译
FROM node:15 AS build

# 设置工作目录
WORKDIR /app

# 复制所有源文件
COPY .. .

# 运行构建命令
RUN npm install && npm run build

# 使用 Caddy 镜像作为最终的运行环境
FROM caddy:latest

# See https://github.com/alpinelinux/docker-alpine/issues/160
# Another quick and dirty solution for avoid this 2-2 problem (chicken & egg) if you are using a corporate proxy, and building in local, it is change https to http in url repositories, so the fetch will work for ca-certificates and later you can update (note that this is more insecure since you are using http instead https, this is because a "dirty" workaround).

RUN sed -ie "s/https/http/g" /etc/apk/repositories

# 复制 Caddyfile 配置文件到 Caddy 容器内
COPY deploy/Caddyfile /etc/caddy/Caddyfile

# 复制前端构建的静态文件到 Caddy 的 web 根目录
COPY --from=build /app/dist /usr/share/caddy

EXPOSE 80