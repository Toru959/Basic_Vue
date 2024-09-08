<template>
  <div>
    <!-- <button v-on:click="increment">+</button> -->
    <button v-on:click="addCount">+10</button>
    <button v-on:click="incrementAction">+</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    // increment(){
    //   this.$store.commit('increment')
    // },
    // addCount(){
    //   this.$store.commit('addCount', {
    //     value: 10
    //   })
    // },
    ...mapActions(['incrementAction', 'addCountAction']), // 1行で書くことができる ボタンがクリックされたらここが動く

    // increment(){ // 少し冗長？
    //   this.$store.dispatch('incrementAction')
    // },

    // addCount(){
    //   this.$store.dispatch('addCountAction', {
    //     value: 10
    //   })
    // }

    addCount(){
      this.addCountAction({
        value: 10
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
