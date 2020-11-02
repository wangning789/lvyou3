<template>
 <div>
     <div v-for="(item,index) in arr" :key="index">
         <div class="box"><img style="widyh:100%" :src="item.photos" alt=""></div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
       arr:{
           type:Array
       }
   },
   components: {

   },
setup(props, ctx: SetupContext){

    onMounted(()=>{
       
    })

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
props
}
},
 })
</script>

<style scoped lang='scss'>
.box{
    width: 300px;
    height: 200px;
}
</style>