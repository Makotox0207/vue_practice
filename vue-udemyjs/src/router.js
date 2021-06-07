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
      // ルートパスに戻れない
      beforeEnter(to, from, next){
        next(false);
      }
    }, 
    { path: "/users/:id", 
      components: {
        default: Users,
        header: HeaderUsers
      }, 
      // props :idをパラメータとして渡せる
      // 名前付きviewを使うときは名前付きviewごとに指定する
      props: {
        default: true,
        header: false
      },
      children: [
        { path: "posts", component: UsersPosts, name: "users-id-posts"},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    }]
});
