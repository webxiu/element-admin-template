import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import Layout from '@/pages/Login.vue'
import Forbidden from '@/pages/Login.vue'
import NotFound from '@/pages/Login.vue'

import Manage from '@/pages/System/Manage.vue'
import Access from '@/pages/System/Access.vue'
import backstageLog from '@/pages/System/backstageLog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/home', component: Home, children: [
        { path: '/manage', component: Manage },
        { path: '/access', component: Access },
        { path: '/backstage-log', component: backstageLog },
      ]
    },

  ]
})

export const DynamicRoutes = [
  {
    path: '',
    component: Layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
        meta: {
          name: '首页'
        }
      }
    ]
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '*',
    component: NotFound
  }
]