<template>
 <div>
   <div class="max">
     <div class="box">
      <div class="box2">
          <div class="box1 iconfont icon-feiji"></div>
          <div>国内机票</div>
      </div>
      <div>
        <div class="box3">
          <div class="box4">
            <div>单程</div>
            <div>往返</div>
          </div>
        </div>


        <div></div>
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
    font-size: 20px;
     color: orange;
    .box1{
    color: orange;
    font-size: 25px;
    margin-right: 5px;
  }
  }
  
}
.box3{
  width: 350px;
  height: 360px;
  border: 1px solid rgb(228,228,228);
  .box4{
    display: flex;
    div{
      display: flex;
      justify-content: center;
      flex: 1;
    }
  }
}

</style>