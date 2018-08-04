import Vue from 'vue'
import App from './App.vue'
import storage from './model/storage.js'

// 请求数据配置
import VueResource from 'vue-resource'

import VueSocketio from 'vue-socket.io'

import VueRouter from 'vue-router'

// 1、创建引入组件

import Start from './components/Start.vue'
import Home from './components/Home.vue'
import Hot from './components/Hot.vue'
import Order from './components/Order.vue'
import Pcontent from './components/Pcontent.vue'
import Search from './components/Search.vue'
import Cart from './components/Cart.vue'
import EditPeopleInfo from './components/EditPeopleInfo.vue'
import Success from './components/Success.vue'
Vue.use(VueResource)

// 获取url传过来的桌号  保存桌号

// console.log(window.location.hash.split('=')[1]);

var roomid = window.location.hash.split('=')[1]

storage.set('roomid', roomid)
Vue.use(VueSocketio, 'http://localhost:3000?roomid=' + roomid)
Vue.use(VueRouter)

const routes = [
  { path: '/start', component: Start },
  { path: '/home', component: Home },
  { path: '/hot', component: Hot },
  { path: '/order', component: Order },
  { path: '/pcontent', component: Pcontent },
  { path: '/search', component: Search },
  { path: '/cart', component: Cart },
  { path: '/editpeopleinfo', component: EditPeopleInfo },
  { path: '/Success', component: Success },
  { path: '*', redirect: '/start' }
]

const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router,
  sockets: {
    connect: function () {
      console.log('socket connected')
    }

  },

  render: h => h(App)
})

