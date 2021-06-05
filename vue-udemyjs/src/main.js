import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
