import Vue from "vue";
import Router from "vue-router";
const Home = () => import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const Users = () => import(/* webpackChunkName: "Users" */ "./views/Users.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", 
      name: 'home' , 
      components: {
        default: Home
      }
    }, 
    { path: "/users",
      name: 'users',
      components: {
        default: Users
      }
    }
  ]
});
