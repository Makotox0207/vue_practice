<template>
<div>
  <hr>
  <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">home</p>
  <p>{{ title | lowerCase }}</p>
  <p>{{subtitle | lowerCase }}</p>
  <p>{{number}}</p>
  <button @click="number++">プラス1</button>
</div>
</template>

<script>
// @でsrcの相対パスを表す
import {tokyoNumber} from "@/tokyoNumber"
  export default{
    mixins: [tokyoNumber]
    // data(){
    //   return {
    //     title: "Hello",
    //     subtitle: "World",
    //     number: 0
    //   }
    // },
    // filters: {
    //   lowerCase(value){
    //     return value.toLowerCase();
    //   }
    // }
  }
</script>
