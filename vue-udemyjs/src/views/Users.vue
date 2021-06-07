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
  props: ["id"]
}
</script>
