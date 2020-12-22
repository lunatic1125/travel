import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Trip = () => import('views/trip/Trip.vue')
const Travel = () => import('views/travel/Travel.vue')
// 旅行家
const Tourist = () => import('views/tourist/Tourist.vue')
const Tab1 = () => import('views/tourist/components/children/Tab1.vue')
const Tab2 = () => import('views/tourist/components/children/Tab2.vue')
const Write = () => import('views/tourist/components/children/children/Write.vue')
const Attention = () => import('views/tourist/components/children/children/Attention.vue')
const Fans = () => import('views/tourist/components/children/children/Fans.vue')

// 我的
const Profile = () => import('views/profile/Profile.vue')
const Register = () => import('components/content/Register.vue')
//搜索-城市-主题
const City = () => import('views/city/City.vue')
const Tag = () => import('views/tag/Tag.vue')

const Prolist = () => import('views/prolist/Prolist.vue')
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
  {
    path: '/tourist', component: Tourist, redirect: '/tourist/tab1',
    children: [
      { path: '/tourist/tab1', component: Tab1 },
      {
        path: '/tourist/tab2', component: Tab2, redirect: '/tourist/tab2/write',
        children: [
          { path: '/tourist/tab2/write', component: Write },
          { path: '/tourist/tab2/attention', component: Attention },
          { path: '/tourist/tab2/fans', component: Fans }]
      }]
  },
  // 登陆注册
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/city', component: City },
  { path: '/tag', component: Tag },
  { path: '/prolist/:id', component: Prolist }
]
export default new Router({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
