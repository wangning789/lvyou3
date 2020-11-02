<template>
 <div class="dfa">
     <div class="df" style="width:50vw">
         <div class="df ziti">
             <div style="width:60%"><img style="width:100%" src="http://157.122.54.189:9093/images/logo.jpg" alt="" data-v-3f2f662b=""></div>
             <div>首页</div>
             <div>旅行攻略</div>
             <div>酒店</div>
             <div>国内机票</div>
         </div>
         <div>
             <div>登录/注册</div>
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

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>