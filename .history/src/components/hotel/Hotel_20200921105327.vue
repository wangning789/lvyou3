<template>
 <div>
    <div class="max">
      <div class="box">
        <div class="hote">酒店&nbsp;>&nbsp;酒店预定</div>
        <div class="input"> <a-input v-model:value="hote" placeholder="切换城市" /></div>
        <div> <a-range-picker v-model:value ="oneday">
    <template v-slot:dateRender="{ current,today  }">
      <div class="ant-calendar-date" :style="getCurrentStyle(current)">
        {{ current.date() }}
      </div>
    </template>
  </a-range-picker></div>
      </div>
    </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
  hote:string
  border:string
  oneday:Array<string>
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
  let getCurrentStyle=(current:any, today:any):void=>{
  let getCurrentStyle=(current:any, today:any):void=>{
    console.log()
      // const style = {};
      // console.log('123',current)
    //   if (current.date() === 1) {
    //     style.border = '1px solid #1890ff';
    //     style.borderRadius = '50%';
    //   }
    //   return style;
    }
  

let data: Data = reactive<Data>({
  hote:'',
  border:'',
  oneday:[]
})
return {
...toRefs(data),
getCurrentStyle
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
.input{
  width: 200px;
  
}
</style>