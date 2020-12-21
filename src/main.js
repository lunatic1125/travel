import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 第三方插件解决移动端300毫秒延迟问题
import fastClick from 'fastclick'
// fastClick自带方法
fastClick.attach(document.body)
//Vant插件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.prototype.$

//swiper插件使用 
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueAwesomeSwiper,
  render: h => h(App)
})
