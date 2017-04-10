import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import MainEdit from '@/components/MainEdit'
import NewProject from '@/components/NewProject'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: MainEdit
    },
    {
      path: '/project/new',
      name: 'NewProject',
      component: NewProject
    }
  ]
})
