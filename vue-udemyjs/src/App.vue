<template>
  <div>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- 動的にAboutまたはHomeに変更 -->
    <component :is="currentComponent"></component>
    <!-- 一緒 -->
    <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home>
  </div>
</template>

<script>

import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data(){
    return {
      currentComponent: "Home"
    };
  },
  components: {
    About,
    Home
  }
}
</script>

<style>
</style>
