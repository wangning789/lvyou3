<template>
 <div>
  <div class="box"> <img class="box" src="../../QQ图片20200914164758_看图王.png" alt=""></div>
 </div>
</template>

<script lang='ts'>
import api from'../http/api'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {Res} from '@/types/index.ts'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
let click=():void=>{


}


onMounted(()=>{
    api.getlunbo().then((res:Res)=>{
    console.log(res)
  }).catch((err:any)=>{
    console.log(err)
})
let data: Data = reactive<Data>({
})
return {
...toRefs(data),
click
}
},
 })
</script>

<style scoped lang='scss'>
.box{
  width: 100vw;
}
</style>