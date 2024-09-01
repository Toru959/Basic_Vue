<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="checkRouteInfo">ルート情報</button><br>
    <button v-on:click="goToHome">Homeに戻る</button>
  </div>
</template>

<script>
export default {
  name: 'AboutTest',
  methods: {
    checkRouteInfo(){
      console.log(this.$route)
      console.log(this.$route.params.path)
      console.log(this.$router)
    },
    goToHome(){
      this.$router.push('/')
    }
  }

}
</script>
