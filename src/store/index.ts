import { createStore } from 'vuex'

export default createStore({
  state: {
    pamid:0
  },
  mutations: {
    getpamid(state,data){
      state.pamid=data
    }
  },
  actions: {
  },
  modules: {
  }
})
