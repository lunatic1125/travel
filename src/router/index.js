import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Trip = () => import('views/trip/Trip.vue')
const Travel = () => import('views/travel/Travel.vue')
const Tourist = () => import('views/tourist/Tourist.vue')
const Profile = () => import('views/profile/Profile.vue')
const City = () => import('views/city/City.vue')
const Tag = () => import('views/tag/Tag.vue')
Vue.use(Router)

// npm i vue-router@3.1.1 -S 同时加上以下代码，防止重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//----------------------end----------------------------------

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, },
  { path: '/trip', component: Trip },
  { path: '/travel', component: Travel },
  { path: '/tourist', component: Tourist },
  { path: '/profile', component: Profile },
  { path: '/city', component: City },
  { path: '/tag', component: Tag },

]
export default new Router({
  routes,
  mode: 'history'
})
