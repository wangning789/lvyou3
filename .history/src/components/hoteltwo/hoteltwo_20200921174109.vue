<template>
 <div>
     <div>
         <div class="box">
             <div>价格</div>
             <div>0-{{value1}}</div>
         </div>
         <div class="box1"> <a-slider id="test" :max='max'  :step='step' v-model:value="value1" /></div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    value1:number
    max:number
    step:number
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
    value1:300,
    max:4000,
    step:10
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.box1{
    width: 200px;
}
.box{
    display: flex;
    justify-content: space-between;
    width: 200px;
}
</style>