# 开发环境

nodejs version is 15.0, use nvm
```shell
nvm install 15 && nvm use 15
```

## Project setup
```
npm install
```
or
```
yarn install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Docker
本地测试
```shell
docker build -t kexie-hello-web-local -f deploy/Dockerfile . && docker run --rm -p 8088:80 kexie-hello-web-local
```
生产环境
```shell
docker buildx build --platform linux/amd64 -t kexie-hello-web -f deploy/Dockerfile . ; docker tag kexie-hello-web docker.kexie.space/kexie/kexie-hello-web:latest ; docker push docker.kexie.space/kexie/kexie-hello-web:latest
```