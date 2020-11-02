<template>
 <div>
     <div class="max">
         <div class="box">
             <div>单程：{{data.name}}--{{data.region}}/{{data.date}}</div>
         </div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import{useRoute} from'vue-router'
interface Data {
    name:string,
    region:string,
    date:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
    let route=useRoute()

    onMounted(()=>{
        data.name=route.query.name as string
        data.region=route.query.region as string
        data.date=route.query.date as string
    })

let data: Data = reactive<Data>({
    name:'',
    region:'',
    date:''
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.max{
    display: flex;
    justify-content: center;
    .box{
        width: 1000px;
    }
}
</style>