<template>
 <div>
  <div class="box"> <img class="box" src="../../QQ图片20200914164758_看图王.png" alt=""></div>
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
.box{
  width: 100vw;
}
</style>