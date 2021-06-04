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

    <!-- $eventで$emitのイベント(第2引数)を受け取る -->
    <!-- <EventTitle
      :value="formData.title"
      @input="formData.title = $event">
    </EventTitle> -->
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
