import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '上海',
    taginfo: ''
  },
  mutations: {
    tagListChange(state, info) {
      state.taginfo = info;
    },
    changeCity(state, city) {
      state.city = city
    }
  }
})