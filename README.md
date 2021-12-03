# simple store

## 项目介绍

是一个电商 H5 页面前端项目，基于 Vue3.0 + Typescript + axios + less + vant + vue-router + iconfont 实现，使用 mockjs 数据进行开发，主要包括首页、分类页面、我的页面、购物车等

## Installation

```shell
yarn install
or
npm run install
```

## Compiles and hot-reloads for development

```shell
yarn dev
or
npm run dev
```

## 项目目录

```
code-assessment-chenbin
├─ .env
├─ .env.development
├─ .prettierrc.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ api
│  │  ├─ index.ts       //api列表
│  │  ├─ http.ts        //数据请求
│  │  └─ request.ts     //请求拦截
│  ├─ App.vue
│  ├─ assets
│  │  ├─ Iconfont       //阿里iconfont
│  │  └─ images         //图片
│  ├─ common
│  │  └─ style           //公共，复用css样式
│  │     ├─ base.less
│  │     ├─ common.less
│  │     └─ mixin.less
│  ├─ components        //组件
│  ├─ layout
│  │  └─ baseLayout.vue
│  ├─ main.ts
│  ├─ mock           //mock数据
│  │  ├─ data.ts
│  │  ├─ file.ts
│  │  └─ index.ts
│  ├─ router
│  │  └─ index.ts     //路由信息
│  ├─ store           //vuex数据存储
│  │  ├─ index.ts
│  │  └─ modules
│  │     ├─ shop.ts
│  │     └─ user.ts
│  ├─ utils
│  │  ├─ common.ts      //公共方法
│  │  ├─ permission.ts  //路由守卫
│  │  └─ type.ts        //类型声明
│  ├─ views
│  │  ├─ account        //个人中心
│  │  ├─ cart           //购物车
│  │  ├─ empty.vue      //error
│  │  ├─ explore        //分类
│  │  ├─ favorite       //收藏列表
│  │  ├─ shop           //商品信息
│  │  └─ welcome.vue    //首页
├─ tsconfig.json
├─ vite.config.ts
├─ yarn-error.log
└─ yarn.lock

```

📖 `Vue3.0` 相关文档：

| 相关库名称           | 在线地址 🔗                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Vue3.0 官方文档      | <a href="https://v3.vuejs.org/" target="_blank">链接</a>                                                                      |
| Vue3.0 中文文档      | <a href="https://v3.cn.vuejs.org/" target="_blank">链接</a> <a href="https://vue3js.cn/docs/zh/" target="_blank">国内链接</a> |
| Composition-API 手册 | <a href="https://vue3js.cn/vue-composition-api/" target="_blank">链接</a>                                                     |
| Vue3.0 源码学习      | <a href="https://vue3js.cn/start/" target="_blank">链接</a>                                                                   |
| Vue-Router 官方文档  | <a href="https://next.router.vuejs.org/" target="_blank">链接</a>                                                             |
| Vuex4.0              | <a href="https://github.com/vuejs/vuex/tree/4.0/" target="_blank">Github</a>                                                  |
