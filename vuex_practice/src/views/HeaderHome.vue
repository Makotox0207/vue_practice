<template>
<div>
  <h1>HeaderHome</h1>
  <!-- Home.vueでのメソッドの処理も適応される -->
  <p> {{doubleCount}} </p>
  <p> {{tripleCount}} </p>
  <p> {{count}} </p>
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
    count(){
      return this.$store.state.count;
    },
  }
}
    
</script>
