<template>
 <div class="max">
   <div class="box">
     <div class="pox">
       <div>
        <div  v-for="(item,index) in arr" :key="index">
           <div :class="index===3?'jdg':''" class="recommend">
             <div class="kop">
               <div>{{item.type}}</div>
              <div><RightOutlined /></div>
             </div>
           </div>
         </div>
       </div>




       <div></div>
     </div>
   </div>
 </div>
</template>

<script lang='ts'>
import {Res} from'../Travel/index'
import api from '../../http/api'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
interface Data {
  arr:msg[]
}

interface msg{
   children:[
        {
        city:string
        desc:string
    }
    ]
    type:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
  onMounted(()=>{
    api.getcity().then((res:Res)=>{
      data.arr=res.data
      console.log(res)
    }).catch((err:any)=>{
      console.log(err)
    })
  })

let data: Data = reactive<Data>({
  arr:[]
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
.pox{
  display: flex;
}
.recommend{
  width: 13.5vw;
  height: 6vh;
  border-top: 1px solid rgb(158,158,158);
   border-left: 1px solid rgb(158,158,158);
    border-right: 1px solid rgb(158,158,158);
}
.jdg{
   border-bottom: 1px solid rgb(158,158,158);
}
.kop{
  
}
</style>