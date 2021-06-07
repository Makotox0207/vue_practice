import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});

// ルートオブジェクト 現在のルートの状態を表すもの
// to, from はルートオブジェクトが入る
// next リダイレクト先を表す, これがないとずっと画面が真っ白, ページを遷移させなくするにはfalse, pathを指定して遷移させる
router.beforeEach( (to, from, next) => {
  if(to.path === '/users/1'){
    next('/');
  }
})
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
