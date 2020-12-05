import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    contenders: []
  },

  actions: {
    getContenders({ commit }) {
      console.log('getting')
      Vue.axios.get('contenders/index')
        .then((response) => {
          console.log(response)
          if (response.status == 200) {
            const contenders = response.data
            commit("getContenders", contenders)
          } else {
            console.log(response)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  mutations: {
    getContenders(state, data) {
      state.contenders = data
    }
  }
})

export default store
