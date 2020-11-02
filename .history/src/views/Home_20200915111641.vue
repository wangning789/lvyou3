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
    <div class="div"></div>
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
.div{
    position: relative;
    display: inline-block;
    padding: .5em 1em .35em;
    color: white;
}
.div::before{
    content: ''; /*用伪元素来生成一个矩形*/
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #58a;
    transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom;
}
</style>