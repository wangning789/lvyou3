<template>
 <div>
    <div class="max">
        <div class="box">
            <div class="pop">
                <div><p>旅游攻略&nbsp;&nbsp; </p></div>
                <div> &nbsp;&nbsp;/旅游详情</div>
            </div>
        </div>
    </div>  
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {useRoute,useRouter} from'vue-router'
import api from'../../http/api'
interface Data {
    id:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
    let router=useRouter()
    let route=useRoute()


onMounted(()=>{
    data.id=route.query.id as string

    api.getpostwen({id:Number(data.id)}).then((res:any)=>{
        console.log(res)
    }).catch((err:any)=>{
        console.log(err)
    })

})


let data: Data = reactive<Data>({
    id:''
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
   
}
.box{
 width: 55vw;  
}
.pop{
    display: flex;
    div{
        p{
            color: black;
        }
    }
}
</style>