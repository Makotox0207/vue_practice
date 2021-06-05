import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// bindとupdateは基本的に同じ関数になるので一つにまとめて省略できる
Vue.directive("border", function(el, binding) {
  // elはhtml要素を指定する (pタグを指定)
  el.style.border = "solid black 2px";
  // binding.value データを受け取る
  el.style.borderWidth = binding.value;
})

new Vue({
  render: h => h(App),
}).$mount('#app')
