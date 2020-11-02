<template>
 <div>
    <div ><input class="input" placeholder="请输入想去的地方,比如:'广州'" /></div>
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
.input{
  width: 100%;
  border: 6px solid orange;
  height: 3%;
}
</style>