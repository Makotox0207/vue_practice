<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" type="text" v-model="name">
    <br><br>
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>
    <!-- クリックしたらサーバーにデータを送る -->
    <button @click="createComment">サーバーにコメントを送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>name:{{post.fields.name.stringValue}}</div>
      <div>comment:{{post.fields.comment.stringValue}}</div>

    </div>
  </div>
</template>

<script>
// axiosをインポート
import axios from 'axios';
  export default {
    data(){
      return {
        name: "",
        comment: "",
        // リストレンダリングをするために配列を用意する
        posts :[]
      };
    },
    // 最初のロード時にデータを取得する
    created(){
      // axios.get(取得したいサーバーのurl, リクエストの設定)
      // promiseを返す
      axios.get('https://firestore.googleapis.com/v1/projects/vuejs-http-40386/databases/(default)/documents/comments',
      )
      .then( response => {
        // 返ってきた値をpostsに代入
        this.posts = response.data.documents;
        console.log(response);
      });
    },
    methods: {
      createComment(){
        // axios.post(url, data, [options]) データをサーバに送る
        // promiseを返す
        axios.post('https://firestore.googleapis.com/v1/projects/vuejs-http-40386/databases/(default)/documents/comments',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
        )
        // axios.postが成功したら送った結果が返ってくる
        .then(response => {
          console.log(response);
        })
        // axios.postで失敗した場合の処理
        .catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
