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
      component:()=>import('../views/Home.vue')
    },
   
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


//决定路由模式
const ispro:boolean=process.env.NODE_NEV === 'production'

//history是路由模式
const router = createRouter({
  history:ispro ? createWebHistory(process.env.BASE_URL):createWebHistory(process.env.BASE_URL),
  routes
})

export default router
