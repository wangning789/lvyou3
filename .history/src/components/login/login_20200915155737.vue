<template>
 <div>
     <div class="box"></div>
      <a-card style="width: 300px">
      </a-card>
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
.box{
    width: 100vw;
    height: 700px;
    background-image: url('http://157.122.54.189:9095/assets/images/th03.jfif');
}
</style>