import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../layout/Layout.vue'

const routes: Array<RouteRecordRaw> = [
 {
  path:'',
  redirect:"/home",
  component:layout,
  children:[
    {
      path: '/home',
      name: 'Home',
      component: ()=>('../views/Home.vue')
    },
  ]
 },
 {
  path:'',
  component:layout,
  children:[
    {
      path: '/travel',
      name: 'Travel',
      component: ()=>import('../components/Travel/Travel.vue')
    },
  ]
 }

 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
