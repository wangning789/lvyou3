<template>
 <div>
      <a-carousel arrows autoplay>
    <template v-slot:prevArrow>
      <div class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template v-slot:nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
  <!-- <div class="box"> <img class="box" src="../../QQ图片20200914164758_看图王.png" alt=""></div> -->
   <div class="searchbox">
     <div style=" display: flex;">
      <div class="divv" :class="num===0?'cdiv':''" @click='clickStrategy'>攻略</div>
     <div class="divv" :class="num===1?'cdiv':''" @click='clickhotel'>酒店</div>
     <div class="divv" :class="num===2?'cdiv':''" @click='clickaircraft'>机票</div>
     </div>
     <a-input-search
      v-model:value="value"
      :placeholder="placeholder"
      class="search"
      @search="Searchcity"
      size="large"
    />
   </div>
    
 </div>
</template>

<script lang='ts'>
import axios from 'axios'
import api from'../http/api'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {Res} from '@/types/index.ts'
interface Data {
  value:string,
  placeholder:string,
  num:number
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
let data: Data = reactive<Data>({
  value:'',
  placeholder:'搜索城市',
  num:0
})

let clickStrategy=():void=>{
  data.placeholder='搜索城市'
  data.num=0
}

let clickhotel=():void=>{
  data.placeholder='请输入城市搜索酒店'
  data.num=1
}

let clickaircraft=():void=>{
  data.placeholder='请输入出发地'
  data.num=2
}
 
const Searchcity=():void=>{
  console.log(data.value)
}

onMounted(()=>{
  
    api.getlunbo().then((res:Res)=>{
    console.log(res)
  }).catch((err:any)=>{
    console.log(err)
  })
})

return {
...toRefs(data),
Searchcity,
clickStrategy,
clickhotel,
clickaircraft

}
},
 })
</script>

<style scoped lang='scss'>
.box{
  width: 100vw;
}

.searchbox{
  width: 28vw;
  position: absolute;
  top: 48vh;
  left: 35vw;
}
.divv{

 font-size: 18px;
  line-height: 45px;
   text-align: center;
   width:100px;
    height:0px;
    border-width:0 20px 40px 0px;
    border-style:none solid solid;
    border-color:transparent transparent rgba(0,0,0,.5);
    color: white;

}
.cdiv{
   border-color:transparent transparent rgb(238,238,238);
   color: black;
}
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  height:60vh;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel ::v-deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel ::v-deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}
</style>