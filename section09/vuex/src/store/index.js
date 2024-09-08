import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // dataと同じ初期値
    count: 0,
    users:[
      {id:1, name:'大谷', isVisible: true },
      {id:2, name:'ダルビッシュ', isVisible: false },
      {id:3, name:'藤波', isVisible: true },
    ]
  },
  getters: {
    // visibleUsers(state){
    //   return state.users.filter(user => user.isVisible)
    // }
    // アロー関数で書く場合、idを指定する場合の書き方
    visibleUsers: state => state.users.filter(user => user.isVisible),
    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    }
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
    auth
  }
})
