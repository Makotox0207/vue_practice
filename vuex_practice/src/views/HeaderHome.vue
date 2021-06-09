<template>
<div>
  <h1>HeaderHome</h1>
  <!-- Home.vueでのメソッドの処理も適応される -->
  <p> {{doubleCount}} </p>
  <p> {{tripleCount}} </p>
  <p> {{count}} </p>
  <p>v-model: {{message}}</p>
  <input type="text" v-model="message">
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    // スプレッド演算子(...) 配列やオブジェクトの値を展開するオペレーター
    // const foo = [1, 2];
    // const bar = [...foo]; //[1, 2]
    ...mapGetters(["doubleCount", "tripleCount"]),
    message: {
      get(){
        return this.$store.getters.message;
      },
      set(value){
        this.$store.dispatch('updateMessage', value);
      }
    },
    count(){
      return this.$store.state.count;
    }
  }
}
    
</script>
