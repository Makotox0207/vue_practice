<template>
  <div style="padding: 10rem;">
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <component :is="currentComponent"></component>
    <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <EventTitle v-model="formData.title"></EventTitle>
  </div>
</template>

<script>

import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue"

export default {
  data(){
    return {
      currentComponent: "Home", 
      locations: ["東京", "大阪", "札幌"],
      formData: {
        title: "タイトル",
        location: []
      }
    };
  },
  components: {
    About,
    Home,
    EventTitle
  }
}
</script>

<style>
</style>
