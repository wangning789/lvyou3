<template>
 <div>
     <div>
         <div>
             <div><img src="http://157.122.54.189:9093/images/logo.jpg" alt="" data-v-3f2f662b=""></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
         </div>
         <div></div>
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