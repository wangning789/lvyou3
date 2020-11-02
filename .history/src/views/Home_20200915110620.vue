<template>
 <div>
  <div class="box"> <img class="box" src="../../QQ图片20200914164758_看图王.png" alt=""></div>
   <a-input-search
      v-model:value="value"
      :placeholder="placeholder"
      style="width:100px"
      @search="Searchcity"
    />
    <div @click="click">dsads</div>
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


}
},
 })
</script>

<style scoped lang='scss'>
.box{
  width: 100vw;
}
</style>