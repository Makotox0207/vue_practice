import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

// Vue.use() Vueのプラグインを使う
Vue.use(Router);

// export defalt, main.jsで読み込む  vue-routerを読み込む
export default new Router({
  // デフォルトではmodeが"hash"になっているので"history"に直すurlにある#が消える
  mode: "history",
  routes: [{path: "/", component: Home}, {path: "/users", component: Users}]
});
