<template>
 <div class="dfa max">
     <div class="df" style="width:50vw">
         <div class="df co ziti">
             <div class="paa" style="width:10vw;"><img style="width:100%" src="http://157.122.54.189:9093/images/logo.jpg" alt="" data-v-3f2f662b=""></div>
             <div  class="pa" :class="num===0?'box':''">首页</div>
             <div class="pa">旅行攻略</div>
             <div class="pa">酒店</div>
             <div class="pa">国内机票</div>
         </div>
         <div>
             <div>登录 / 注册</div>
         </div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },

  
setup(props, ctx: SetupContext){
let num:number=0

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
num
}
},
 })
</script>

<style scoped lang='scss'>
.box{
    background-color:rgb(64,158,255);
}

</style>