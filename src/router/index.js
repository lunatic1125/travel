import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Trip = () => import('views/trip/Trip.vue')
const Travel = () => import('views/travel/Travel.vue')
const Tourist = () => import('views/tourist/Tourist.vue')
const Profile = () => import('views/profile/Profile.vue')

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/home' },
  // name: 'HelloWorld',}
  { path: '/home', component: Home },
  { path: '/trip', component: Trip },
  { path: '/travel', component: Travel },
  { path: '/tourist', component: Tourist },
  { path: '/profile', component: Profile },
]
export default new Router({
  routes,
  mode: 'history'
})
