
import {db} from '../firebaseConfig'
const jobs = {
  state: {
    allJobs:[]
  },
  actions:{
    getAllJobs({ commit, state }){
      state.allJobs = [];
      db.collection("jobs").onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) =>{
            let jobs = doc.data()
            jobs.id = doc.id
            commit('pushAllJobs',jobs)
          })
          
      })
    },
  },
  mutations:{
    pushAllJobs(state, val){
        state.allJobs.push(val)
    },
  }

}

export default jobs
