<template>
 <div>
  <div class="box"> <img class="box" src="../../QQ图片20200914164758_看图王.png" alt=""></div>
   <a-input-search
      :v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
 </div>
</template>

<script lang='ts'>
import api from'../http/api'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {Res} from '@/types/index.ts'
interface Data {
  value:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){


onMounted(()=>{
    api.getlunbo().then((res:Res)=>{
    console.log(res)
  }).catch((err:any)=>{
    console.log(err)
  })
})
let data: Data = reactive<Data>({
  value:''
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