<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <hr>
    <h3>vuexの練習</h3>
    <button @click="increment">増加</button>
    <button @click="decrement">減少</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment(){
      this.$store.commit('increment', 1);
    },
    decrement(){
      this.$store.commit('decrement', 1);
    },
    toUsers(){
      this.$router.push({
        name: 'users'
      });
    }
  }
}
</script>

