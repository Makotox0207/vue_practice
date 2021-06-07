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
    // スプレッド構文 (...) を使うと、配列式や文字列などの反復可能オブジェクトを、0 個以上の引数 (関数呼び出しの場合) や要素 (配列リテラルの場合) を期待された場所で展開したり、オブジェクト式を、0 個以上のキーと値のペア (オブジェクトリテラルの場合) を期待された場所で展開したりすることができる。
    ...mapGetters(["doubleCount", "tripleCount"]),
    count(){
      return this.$store.state.count;
    },
  }
}
    
</script>
