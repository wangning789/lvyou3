import { createRouter, createWebHistory, RouteRecordRaw ,RouteLocationNormalized,NavigationGuardNext} from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layout/Layout.vue'

const routes: Array<RouteRecordRaw> = [
  
 {
  path:'',
  component:Layout,
  children:[
    {
      path: '',
      name: 'home',
      component:Home
    },
   
    {
      path: '/travel',
      name: 'travel',
      component: ()=>import('../components/Travel/Travel.vue'),
      meta:{
        name:'travel'
      }
    },
    {
      path: '/Hotel',
      name: 'Hotel',
      component: ()=>import('../components/hotel/Hotel.vue')
    },
    {
      path: '/Aircraft',
      name: 'Aircraft',
      component: ()=>import('../components/aircraft/Aircraft.vue')
    },
    {
      path: '/Aircrafttwo',
      name: 'Aircrafttwo',
      component: ()=>import('../components/aircraft/Aircrafttwo.vue')
    },
    {
      path:'/login',
      name:"login",
      component:()=>import('../components/login/login.vue')
    },
    {
      path:'/detali',
      name:'detali',
      component:()=>import('../components/detali/Detali.vue'),
      meta:{
        name:'travel'
      }
    },
    {
      path:'/refresh',
      name:'refresh',
      component:()=>import('../components/refresh/refresh.vue')
    }

  
  ]
 },

 


   
 

 
 
]


//决定路由模式
const ispro:boolean=process.env.NODE_NEV === 'production'

//history是路由模式
const router = createRouter({
  history:ispro ? createWebHistory(process.env.BASE_URL):createWebHistory(process.env.BASE_URL),
  routes
});
// router.beforeEach(
//   (
//     to:RouteLocationNormalized,
//     from: RouteLocationNormalized,
//     next: NavigationGuardNext
//   ) => {
//     document.title = to.meta.title;
//     // console.log(from);
//     next();
//   }
// );

export default router
