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
                <div class="dfa plplo">
                   <div> <div class="tubiao"><FormOutlined /></div><div>评论()</div></div>
                    <div><div class="tubiao"><BranchesOutlined /></div><div>分享</div></div>
                </div>
                <div class="ziti">评论</div>
                <div><a-textarea
                v-model:value="value"
                placeholder="请输入评论内容"
                :auto-size="{ minRows: 2, maxRows: 5 }"
                />
                </div>
                <div class="Submit"><a-button type="primary">提交</a-button></div>
                <div class="content"></div>
            </div>


            <div>
                <div class="lplj">
                    <div>相关攻略</div>
                </div>
                <div class="xiahua"></div>
                <div v-for="(item,index) in arr" :key="index">
                    <div class="momp" @click="click(item)">
                        <div v-for="(item1,index1) in item.images" :key="index1">
                            <div v-if="index1===0" class="divtupian"><img style="width:100%;height:100%" :src="item1" alt=""></div>
                        </div>
                        <div class="bott">
                            <div class="tittele">{{item.title}}</div>
                            <div>{{item.created_at}}&nbsp;阅读：{{item.watch}}</div>
                        </div>
                    </div>
                    <div class="xiahua"></div>
                </div>
            </div>
        </div>
    </div>  
 </div>
</template>

<script lang='ts'>
import dayjs from'dayjs'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {useRoute,useRouter} from'vue-router'
import {useStore} from'vuex'
import api from'../../http/api'
interface Data {
    id:string
    msg:Array<object>
    arr:Array<Object>
    value:string
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
    let store=useStore()

    let click=(item:any):void=>{
       
        // store.commit("getpamid",item.id)
        router.push({
        path: "/refresh",
        query:{
            id:item.id
        }
        
    });
       
    }

onMounted(()=>{
    data.id=route.query.id as string

 
   
     
    api.getpostwen({id:Number(data.id)}).then(res=>{
        res.data[0].created_at=dayjs(res.data[0].created_at).format('YYYY-MM-DD HH:mm:ss')
        data.msg=res.data
        console.log(res)
    }).catch((err:any)=>{
        console.log(err)
    })

    api.getlou().then((res:any)=>{
        res.data.splice(4)
        data.arr=res.data
        res.data.map((item:any)=>{
        item.created_at=dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss')
        })
        console.log(res)
    }).catch((err:any)=>{
        console.log(err)
    })

})


let data: Data = reactive<Data>({
    id:'',
    msg:[],
    arr:[],
    value:''
})
return {
...toRefs(data),
click

}
},
 })
</script>

<style scoped lang='scss'>
.bott{
    display: flex; 
    flex-direction:column;
    font-size: 12px;
    margin-left: 20px;
}
.tittele{
    font-size: 15px;
    font-weight:600;
    color: black;
    flex: 1;
    
}
.momp{
    margin: 20px 0px;
    display: flex;
    width: 17vw;
}
:hover.momp{
    cursor: pointer;
}
.divtupian{
    width: 120px;
    height: 80px;
}
.xiahua{
    border: 1px solid rgb(238,238,238);
}
.lplj{
  
    width: 17vw;
    display: flex;
    flex-direction:row;
    
    div{
        font-size: 18px;
        font-weight: 500;
        color: black;
        margin: 10px 0px;
    }
}
.max{
    margin: 10px 0px;
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
.tubiao{
    color:orange;
    font-size:30px;
    
}
.plplo{
     div{
        margin: 20px 20px;
    }
}
.input{
    height: 60px;
}
.Submit{
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 0px;
}
.content{
    width: 100%;
    border: 1px solid rgb(238,238,238);
}
</style>