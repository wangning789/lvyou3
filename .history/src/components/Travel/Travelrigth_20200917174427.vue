<template>
 <div class="max">
    <div ><input class="input" placeholder="请输入想去的地方,比如:'广州'"/></div>
    <div class="box"><SearchOutlined /></div>
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
  width:40vw;
  border: 4px solid orange;
  height: 40px;
  outline: none;
  padding-left:20px ;
}
.box{
  font-size: 40px;
  color: orange;
  position:absolute;
  top: 5px;
  
}
</style>