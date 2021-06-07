<template>
  <div>
    <h3>Users</h3>
    <button @click="toHome">Homeページに行く</button>
  </div>
</template>

<script>
  export default {
  methods: {
    toHome(){
      this.$router.push({
        name: 'home'
      });
    }
  }
}
</script>




