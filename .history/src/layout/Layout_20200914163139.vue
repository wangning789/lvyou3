<template>
<div>
     <div class="dfa max">
     <div class="df" style="width:50vw">
         <div class="df co ziti">
             <div class="paa" style="width:10vw;"><img style="width:100%" src="http://157.122.54.189:9093/images/logo.jpg"></div>
             <div  class="pa" @click="clickhome" :class="num===0?'box':''">首页</div>
             <div class="pa"  @click="clickStrategy" :class="num===1?'box':''">旅行攻略</div>
             <div class="pa" @click="clickhotel" :class="num===2?'box':''">酒店</div>
             <div class="pa" @click="clickticket" :class="num===3?'box':''">国内机票</div>
         </div>
         <div>
             <div class="login">登录 / 注册</div>
         </div>
     </div>
 </div>
  <router-view/>
</div>
 
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import{useRoute,useRouter}from'vue-router'
import{useStore}from'vuex'
interface Data {
   num?:number
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },


  
setup(props, ctx: SetupContext){
let route=useRoute()
let router=useRouter()
let store=useStore()

let clickhome=():void=>{
    router.push('/')
data.num=0
}
let clickStrategy=():void=>{
data.num=1 
router.push('/travel')
}
let clickhotel=():void=>{
    data.num=2
}
let clickticket=():void=>{
    data.num=3
}
let data: Data = reactive<Data>({
    num:0
})
return {
...toRefs(data),
clickhome,
clickStrategy,
clickhotel,
clickticket
}
},
 })
</script>

<style scoped lang='scss'>
.box{
    background-color:rgb(64,158,255);
    color: white;
    border-bottom: 4px solid rgb(64,158,255);
}
.login:hover{
     cursor: pointer;
     color: rgba(64,158,255,0.8);
     text-decoration: underline;
}


</style>