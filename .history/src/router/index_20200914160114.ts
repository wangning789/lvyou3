import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../layout/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    component:()=>import('../views/Home.vue')
  },
 {
  path:'',
  component:layout,
  children:[
   
    {
      path: '/travel',
      name: 'travel',
      component: ()=>import('../components/Travel/Travel.vue')
    },
  
  ]
 },
//  {
//   path:'*',
//   name:'404',
//   component:()=>import('../components/out.vue')
// }

   
 

 
 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
