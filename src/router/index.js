import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobPage from '../components/JobPage.vue'
import AddJob from '../views/AddJob.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/job/:id',
    name:'JobPage',
    component: JobPage
  },
  {
    path:'/addjob',
    name:'AddJob',
    component: AddJob
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
