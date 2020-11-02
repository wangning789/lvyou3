<template>
 <div>
  <div class="box"> <img class="box" src="../../QQ图片20200914164758_看图王.png" alt=""></div>
   <div class="searchbox">
     <a-input-search
      v-model:value="value"
      :placeholder="placeholder"
      class="search"
      @search="Searchcity"
      size="large"
     
    />
   </div>
    <div class="divv">攻略</div>
 </div>
</template>

<script lang='ts'>
import api from'../http/api'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {Res} from '@/types/index.ts'
interface Data {
  value:string,
  placeholder:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
let data: Data = reactive<Data>({
  value:'',
  placeholder:'搜索城市'
})
 
const Searchcity=():void=>{
  console.log(data.value)
}

onMounted(()=>{
    api.getlunbo().then((res:Res)=>{
    console.log(res)
  }).catch((err:any)=>{
    console.log(err)
  })
})

return {
...toRefs(data),
Searchcity

}
},
 })
</script>

<style scoped lang='scss'>
.box{
  width: 100vw;
}

.searchbox{
  width: 25vw;
}
.divv{
  display: flex;
 font-size: 20px;
  justify-content: center;
  padding-top: 10px;
   width:80px;
    height:0px;
    border-width:0 20px 50px 0px;
    border-style:none solid solid;
    border-color:transparent transparent rgb(238,238,238);

}
</style>