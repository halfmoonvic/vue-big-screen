import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import Port from 'pages/port/port'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/port',
      name: 'port',
      component: Port
    }
  ]
})
