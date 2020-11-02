<template>
 <div>
     <div class="max">
         <div class="box">
            <div>
                <div>单程：{{name}}--{{region}}/{{date}}</div>
                <div></div>
            </div>
         </div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import{useRoute} from'vue-router';
import dayjs from'dayjs';
import api from'../../http/api'
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
        
        api.getcitytime({name:'上海'&&'北京'}).then((res:any)=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        api.getairs({departCity:'北京',departCode:'110100000000',destCity:'上海',destCode:'310100000000',departDate:'2019-09-24'}).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

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