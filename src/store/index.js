import Vue from 'vue'
import Vuex from 'vuex'

import filters from './filters'
import jobs from './jobs'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    filters,
    jobs
  }
})
