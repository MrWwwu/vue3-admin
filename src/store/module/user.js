const state ={
  userName:'aaron'
}
const getters = {
  firstLetter: (state) =>{
    return state.userName.substr(0,1)
  }
}
const mutations = {
 //
}
const actions = {
  //
}
export default {
  state,
  getters,
  mutations,
  actions
}
