import Manage from '@c/manage'
import err_404 from '@v/404'
import login from '@v/login/login.vue'
export default [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path: '/',
      name: 'manage',
      component: Manage,
      children:[
        {
          path: '/home',
          name: 'home',
          component: ()=> import ('@v/Home.vue')
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: ()=> import ('@v/echarts.vue')
        },
        {
          path: '/demo',
          name: 'demo',
          component: ()=> import ('@v/Demo1.vue')
        },
        {
          path: '/demo2',
          name: 'demo2',
          component: ()=> import ('@v/Demo2.vue')
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@v/About.vue')
        }
      ]
    },
    {
      path:'*',
      name:'404',
      component : err_404
    }
  ]
