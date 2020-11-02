<template>
 <div class="max">
   <div class="box">
     <div class="pox">
       <div>
         <div class="recommend"></div>
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
  height: 5vh;
  border: 1px solid rgb(158,158,158);
}
</style>