<template>
<div>
  <h1>HeaderHome</h1>
  <!-- Home.vueでのメソッドの処理も適応される -->
  <p> {{count}} </p>
  <p> {{doubleCount}} </p>
</div>
</template>

<script>
export default {
  computed: {
    count(){
      return this.$store.state.count;
    },
    doubleCount(){
      return this.$store.getters.doubleCount;
    }
  }
}
</script>
