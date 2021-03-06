import { createRouter, createWebHistory, RouteRecordRaw ,RouteLocationNormalized,NavigationGuardNext} from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../layout/Layout.vue'

const routes: Array<RouteRecordRaw> = [
 
 {
  path:'/',
  component:layout,
  children:[
    {
      path: '/home',
      name: 'home',
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
});
router.beforeEach(
  (
    to:RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    document.title = to.meta.title;
    // console.log(from);
    next();
  }
);

export default router
