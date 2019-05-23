import Manage from '@c/manage'
export default [

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
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@v/About.vue')
        }
      ]
    }
  ]
