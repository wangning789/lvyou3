<template>
 <div>
    <div class="max">
        <div class="box">
            <div class="mox"> 
                <div class="pop">
                    <div><p>旅游攻略&nbsp;&nbsp; </p></div>
                    <div>/&nbsp;&nbsp;旅游详情</div>
                </div>
                <div class="titte" v-for="(item,index) in msg" :key="index">
                    <div>{{item.title}}</div>
                </div>
                <div class="henxian"></div>
                <div  v-for="(item,index) in msg" :key="index">
                    <div class="time">攻略：{{item.created_at}}&nbsp;&nbsp;&nbsp;阅读：{{item.watch}}</div>
                    <div class="pmmon" v-html="item.content"></div>
                </div>
                
            </div>


            <div>
                <div class="lplj">相关攻略</div>
            </div>
        </div>
    </div>  
 </div>
</template>

<script lang='ts'>
import dayjs from'dayjs'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {useRoute,useRouter} from'vue-router'
import api from'../../http/api'
interface Data {
    id:string
    msg:Array<object>
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

    api.getpostwen({id:Number(data.id)}).then(res=>{
        res.data[0].created_at=dayjs(res.data[0].created_at).format('YYYY-MM-DD HH:mm:ss')
        data.msg=res.data
        console.log(res)
    }).catch((err:any)=>{
        console.log(err)
    })

})


let data: Data = reactive<Data>({
    id:'',
    msg:[]
})
return {
...toRefs(data),

}
},
 })
</script>

<style scoped lang='scss'>
.lplj{
    background-color: aqua;
    display: flex;
    flex-direction:row;
}
.max{
    width: 100%;
    display: flex;
    justify-content: center;
   
}
.box{
 width: 55vw;
 display: flex;
 justify-content: space-between;  
}
.pop{
    margin: 8px 0px;
    font-size: 16px;
    display: flex;
    div{
        p{
            color: black;
        }
    }
}
.mox{
    width: 36vw;
}
.titte{
    font-size: 32px;
    color: black;
    font-weight: 600;
}
.henxian{
    width: 100%;
    border: 1px solid rgb(238,238,238);
   
}
.time{
     margin: 30px 0px;
    display: flex;
    flex-direction: row-reverse;
    font-size: 16px;
}
.pmmon /deep/img{
    width: 100%;
}
.pmmon /deep/p{
   font-size: 16px;
   color: black;
}
.pmmon /deep/h2{
   font-size: 25px;
   font-weight: 600;
   color: black;
}
.pmmon /deep/h3{
   font-size: 20px;
   font-weight:600;
   color: black;
}
.pmmon  /deep/  :nth-child(7)>img{
    width: 10%;  
}
</style>