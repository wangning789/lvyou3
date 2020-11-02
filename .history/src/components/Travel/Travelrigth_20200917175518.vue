<template>
<div>
   <div class="max">
    <div ><input class="input" placeholder="请输入想去的地方,比如:'广州'"/></div>
    <div class="box"><SearchOutlined /></div>
 </div>
 <div class="city" style="display:flex;margin-left:5px">
   <div>推荐:</div>
   <div>上海</div>
   <div>北京</div>
   <div>广州</div>
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
  position: relative;
}
.input{
  width:38vw;
  border: 4px solid orange;
  height: 40px;
  outline: none;
  padding-left:20px ;
  padding-right:30px;
}
.box{
  font-size: 25px;
  color: orange;
  position:absolute;
  top: -0px;
  right: 10px;
  
}
.city{
  div{
    margin-left: 5px;
  }
}
</style>