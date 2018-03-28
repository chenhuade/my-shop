// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import vueScrollBehavior from 'vue-scroll-behavior'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
var VueTouch = require('vue-touch')

Vue.use(Vuex)
Vue.use(vueScrollBehavior, { router: router })
Vue.use(VueLazyLoad, {                //懒加载声明错误图和占位图
  preLoad: 1.3,
  error: './static/img/github.png',
  loading: './static/img/github.png',
})
Vue.use(VueTouch, {name: 'v-touch'}) //滑动事件
VueTouch.config.swipe = {            //配置滑动区域为左滑动，解决和滚动事件的冲突
	direction: 'horizontal',
  	threshold: 200
}

sync(store, router)
fastclick.attach(document.body) //解决移动端点击事件200ms延迟

Vue.config.productionTip = false //vuex开启开发环境日志

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
