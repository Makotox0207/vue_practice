import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

// Vue.use() Vueのプラグインを使う
Vue.use(Router);

// export defalt, main.jsで読み込む  vue-routerを読み込む
export default new Router({
  // デフォルトではmodeが"hash"になっているので"history"に直すurlにある#が消える
  mode: "history",
  routes: [
    { path: "/", 
      components: {
        default: Home,
        // App.vueで設定したnameにコンポーネントが適応される
        header: HeaderHome
      }, 
    }, 
    { path: "/users/:id", 
      components: {
        default: Users,
        header: HeaderUsers
      }, 
      // props :idをパラメータとして渡せる
      props: true,
      children: [
        { path: "posts", component: UsersPosts, name: "users-id-posts"},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    }]
});
