<template>
 <div>
     <div class="box df"><a-card class="max">
          <div class="dff " style="width: 350px;height:20px">
              <div style="width: 50%;" class="dfa">登录</div>
              <div style="width: 50%" class="dfa">注册</div>
          </div>
      </a-card></div>
      
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
    height: 650px;
    background-image: url('http://157.122.54.189:9095/assets/images/th03.jfif');
}

</style>