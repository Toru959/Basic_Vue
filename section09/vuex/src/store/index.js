import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // dataと同じ初期値
    count: 0
  },
  getters: {
  },
  mutations: {
    increment(state){
      state.count++
    },
    addCount(state, payload){ // 第二引数はオブジェクト
      state.count += payload.value
    }
  },
  actions: {
    incrementAction(context){
      context.commit('increment')
    },
    // incrementAction( { commit } ){
    // context('increment')
    // }

    addCountAction(context, payload){
      context.commit('addCount', payload)
    }
  },
  modules: {
  }
})
