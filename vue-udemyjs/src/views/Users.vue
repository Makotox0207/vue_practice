<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <h3>{{id}}</h3>
    <hr>
    <router-link :to="{name: 'users-id-posts', params: { id } }">postに飛ぶ</router-link>
    <router-link :to="{name: 'users-id-profile', params: { id } }">profileに飛ぶ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // beforeRouteEnter Users.vueのインスタンスが作成される前に実行される, 
  // つまりthisは使えなくて、コンポーネントが表示される時に実行される
  beforeRouteEnter(to, from, next){
    console.log('beforeRouteEnter');
    // thisが使えないので、アクセスできるようになった時に
    // vmの中の処理が非同期的に実行される
    next( (vm) => {
      console.log(vm.id);
    })
  },
    // このコンポーネントを描画するルートが変更されたときに呼び出されるが、
    // このコンポーネントは新しいルートで再利用される 
    // users/1 → users/2 のように変わった時
  beforeRouteUpdate(to, from, next){
    // // thisでpropsの値を取得できる
    // this.id
    console.log('beforeRouteUpdate');
    next()
  },
  // beforeRouteUpload Usersではなくなった時に実行される
  beforeRouteLeave(to, from, next){
    console.log('beforeRouteLeave');
    next()
  },
}
</script>
