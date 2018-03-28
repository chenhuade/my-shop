import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView'
import IndexView from '../views/IndexView'

import CartView from '../views/cart/CartView'
import CategoryView from '../views/category/CategoryView'
import MemberView from '../views/member/MemberView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: IndexView,
      children:[
        {
          path: '',
          redirect: 'category'
        },
        {
          path: 'category',
          component: CategoryView
        },
        {
          path: 'cart',
          component: CartView
        },
        {
          path: 'member',
          component: MemberView
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    }
  ]
})
