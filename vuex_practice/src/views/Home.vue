<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <hr>
    <h3>vuexの練習</h3>
    <p> {{count}} </p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment(){
      this.$store.state.count++;
    },
    decrement(){
      this.$store.state.count--;
    },
    toUsers(){
      this.$router.push({
        name: 'users'
      });
    }
  },
  computed: {
    count(){
      return this.$store.state.count;
    }
  }
}
</script>

