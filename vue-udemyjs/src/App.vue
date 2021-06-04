<template>
  <div style="padding: 10rem;">
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- 動的にAboutまたはHomeに変更 -->
    <component :is="currentComponent"></component>
    <!-- 一緒 -->
    <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home>
    <!-- keep-aliveをつけると全てのデータがキャッシュされる -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model="formData.title">
      <p>{{formData.title}}</p>
      <select v-model="formData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{formData.location}}</p>
    </div>
  </div>
</template>

<script>

import About from "./components/About.vue";
import Home from "./components/Home.vue";

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
    Home
  }
}
</script>

<style>
</style>
