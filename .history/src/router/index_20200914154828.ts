import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../layout/Layout.vue'

const routes: Array<RouteRecordRaw> = [
 {
  path:'',
  component:layout,
  children:[
    {
      path: '',
      name: 'Home',
      component:Home
    },
  ]
 },
 {
  path:'',
  component:layout,
  children:[
    {
      path: 'travel',
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
