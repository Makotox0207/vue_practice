# filter


```js
// main.js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
// Vue.filter("filterName", func(){})
Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
```

```html
<template>
<div>
<!-- {{data | filterName}} -->
  <p>{{ title | upperCase }}</p>
  <p>{{subtitle | upperCase }}</p>
</div>
</template>

<script>
  export default{
    data(){
      return {
        title: "Hello",
        subtitle: "World"
      }
    }
  }
</script>

```
