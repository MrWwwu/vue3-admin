import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
// import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:process.env.NODE_ENV === 'devlopment', // 严格模式开启
  state,
  getters,
  mutations,
  actions,
  modules:{
    user
  },
  // plugin:[ saveInLocal ]
})
