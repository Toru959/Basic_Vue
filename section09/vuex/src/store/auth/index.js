const state = {
    loginUserName: ''
}

const mutations = {
    setLoginUser(state, user){
        state.loginUserName = user.name
    }
}

const actions = {
    setLoginUser({commit}, user){
        commit('setLoginUser', user)
    }
}

const getters = {

}

export default {
    namespaced: true, //名前空間を有効にする
    state,
    mutations,
    actions,
    getters
}
