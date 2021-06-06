import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
