<template>
  <!-- 複数の値を渡す時はオブジェクトにする -->
  <!-- 引数はv-directiveName:引数 -->
  <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">home</p>
</template>

<script>
  export default{
    // directives: {} ローカルにディレクティブを追加する
    directives:  {
      border(el, binding){
        // elはhtml要素を指定する (pタグを指定)
        el.style.border = "solid black 2px";
        // binding.value.key 複数の値を受け取る
        el.style.borderWidth = binding.value.width;
        el.style.borderColor = binding.value.color;
        // binding.arg 引数を取る ※argument=引数
        el.style.borderStyle = binding.arg;
        // if(binding.modiriers.修飾子){} if文で適応させる ※modifier=修飾子
        if (binding.modifiers.round) {
          el.style.borderRadius = "0.5rem";
        }
        if (binding.modifiers.shadow) {
          el.style.boxShadow = "0.2px 5px rgba(0, 0, 0, 0.26";
        }
      } 
    }
  }
</script>
