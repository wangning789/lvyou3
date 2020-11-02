<template>
 <div>
    <div class="max">
      <div class="box">
        <div class="hote">酒店&nbsp;>&nbsp;酒店预定</div>
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
.hote{
  font-size: 15px;
  color: black;
  margin: 10px 0px;
}
</style>