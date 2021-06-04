<template>
<div>
  <label for="title">タイトル</label>
  <!-- 2.:value="value" propsで受け取ったvalueを反映させる -->
  <!-- 3.@input="$emit('input', "$event.target.value") inputで親のinputを発火させる -->
  <!-- $event.target.value インプットが入力されるというイベントオブジェクト-->
  <input id="title" type="text" :value="value" @input="$emit('input', $event.target.value)">
  <pre>{{value}}</pre>
</div>
</template>
<script>
  export default {
    // 1.props: ["value"] valueを受け取る
    props: ["value"]
  }
</script>

