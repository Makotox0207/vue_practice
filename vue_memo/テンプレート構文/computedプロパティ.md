# computedプロパティ

- データはあくまでも初期値しか扱わないので、動的なものを表現できない
- methodsで複雑な処理を{{}}に表示してしまうと、毎回更新されてしまい、更新したくないものまでこうしんされてしまうから、computedプロパティを使用する

```html
<body>
  <script src="vue.js"></script>

  <div id="app">
    <p>{{counter}}</p>
    <p>{{ lessThanThree }}</p>
    <button @click="counter += 1">up</button>
    <button @click="counter -= 1">down</button>
  </div>
  <script>
    new Vue({
	    el: '#app',
      data: {
      	counter: 0
      },
      computed: {
        lessThanThree: function (){
          return this.counter > 3 ? '3以上' : '3以下';
        }
      }
    })
  </script>
  
</body>
</html>

```
