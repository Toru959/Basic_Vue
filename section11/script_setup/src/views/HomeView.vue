<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ScriptSetup />
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
