import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";

// Vue.use() Vueのプラグインを使う
Vue.use(Router);

// export defalt, main.jsで読み込む  vue-routerを読み込む
export default new Router({
  // デフォルトではmodeが"hash"になっているので"history"に直すurlにある#が消える
  mode: "history",
  routes: [
    { path: "/", component: Home }, 
    { path: "/users/:id", 
      component: Users, 
      // props :idをパラメータとして渡せる
      props: true,
      children: [
        { path: "posts", component: UsersPosts, name: "users-id-posts"},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    }]
});
