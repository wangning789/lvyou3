<template>
 <div>
   <div class="max">
     <div class="box">
      <div class="box2">
          <div class="box1 iconfont icon-feiji"></div>
          <div>国内机票</div>
      </div>
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
  width: 1000px;
  .box2{
    display: flex;
    align-items: center;
    .box1{
    color: orange;
    font-size: 30px;
  }
  }
  
}

</style>