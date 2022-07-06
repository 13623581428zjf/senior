# phone-vue
### 基于vant 手机移动端框架适配兼容375设计稿和750设计稿，如果设计稿是750的时候，vant组件会自动适配转化750,适配横屏，pc端
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

根据项目需求
### 修改env.development的测试地址
### 修改env.production的产线地址
### 修改vue.config.js的代理地址

打包的时候需要修改
###   src/utils/http.js文件下的 baseURL，否则本地会跨域
###   src/views/home/script.js文件下的   'this.$setCookie('openid', 'oeia21RSMkjsHDlv39op-jpbscpU')'这句话需要注释。这句话只是用来调试。部署到服务器会返回对应openid。

