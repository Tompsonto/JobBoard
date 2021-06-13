

export const state = {
    add:false,
    newOffer:{
      comp_name:null,
      logo_url:null,
      position_name:null,
      ctegory:null,
      lvl:null,
      location:null,
      salary:{min:null,max:null},
      desc:null
    },
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
  },

  },
  actions: {
    addModal({commit}) {
      commit('addModal')
  }
  },
  modules: {
  }
})
