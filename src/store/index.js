import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    add:true,
    categories:[
      'Frontend',
      'Bakcend',
      'Fullstack',
      'Testing',
      'PM',
      'Android',
      'AI',
      'Blockchain'
    ],
    lvl:[
      'Intern',
      'Junior',
      'Mid',
      'Senior'
    ],
    locations:[
      'Warsaw',
      'Lodz',
      'Wroclaw',
      'Gdansk'
    ]
  },
  mutations: {
    addModal(state) {
      state.add = !state.add
  }
  },
  actions: {
    addModal({commit}) {
      commit('addModal')
  }
  },
  modules: {
  }
})
