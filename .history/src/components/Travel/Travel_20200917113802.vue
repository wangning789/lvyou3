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
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
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
  width: 10vw;
  height: 5vh;
  border: 1px solid rgb(158,158,158);
}
</style>