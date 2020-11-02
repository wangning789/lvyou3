<template>
 <div>
     <div>
         <div class="box1"> <a-slider id="test" max=4000 v-model:value="value1" /></div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    value1:number
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
    value1:4000
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>