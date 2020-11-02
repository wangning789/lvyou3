<template>
 <div>
     <div class="box"></div>
      <a-card class="max" style="width: 400px">
          <div class="dff ">
              <div style="width: 50%" class="dfa">登录</div>
              <div style="width: 50%" class="dfa">注册</div>
          </div>
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
.max{
    position: absolute;
    top: 300px;
    left: 800px;
}
</style>