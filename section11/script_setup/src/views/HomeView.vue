<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <ScriptSetup title="ここにタイトルが入ります"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ScriptSetup from '@/components/ScriptSetup'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ScriptSetup
  }
}
</script>
