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

  getters: {
    contenders: state => state.contenders
  },

  actions: {
    getContenders({ commit }) {
      return Vue.axios.post('contenders/index')
        .then((response) => {
          if (response.status == 200) {
            const contenders = response.data
            commit("getContenders", contenders)
          } else {
            console.log('error getting records: ', response)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    recordResult({ commit }, data) {
      Vue.axios.post('contenders/update', { winner: data.winner, loser: data.loser })
        .then((response) => {
          if (response.status == 200) {
            const updatedRecords = response.data
            for (let contender of updatedRecords) {
              commit("updateContender", contender)
            }
          } else {
            console.log('error updating records: ', response)
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
    },

    updateContender(state, data) {
      const contender = state.contenders.find(c => c.id === data.id)
      if (!contender) { return }
      const index = state.contenders.indexOf(contender)
      state.contenders[index] = data
    }
  }
})

export default store
