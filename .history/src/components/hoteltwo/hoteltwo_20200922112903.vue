<template>
  <div style=" display: flex;">
    <div class="max">
      <div class="box">
        <div>价格</div>
        <div>0-{{value1}}</div>
      </div>
      <div class="box1">
        <a-slider id="test" :max="max" :step="step" v-model:value="value1" />
      </div>
    </div>
    <div class="lener">
      <div>住宿等级</div>
      <div>
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <div class="xianzhi">
                  <div v-if="levervalue.length<1">不限</div>
                  <div v-if="levervalue.length===1" ><div v-for="item1 in levervalue" :key="item1">{{item1}}</div></div>
                  <div v-if="levervalue.length>1">已选{{levervalue.length}}项</div>
                  <div><DownOutlined /></div>
                </div>
          </a>
          <template v-slot:overlay>
            <a-menu>
              <a-menu-item v-for="(item,index) in plainOptions" :key="index">
               <label><input class="border_w" type="checkbox" checked='true'  v-model="levervalue"/>{{item.name}} </label> 
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  plainOptions: Array<object>;
  value1: number;
  max: number;
  step: number;
  checked: boolean;
  levervalue: Array<string>;

}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let onChange = (checkedValue: any): void => {
        
       console.log(data.levervalue)
        // data.levervalue.push(checkedValue)
    //   data.levervalue= data.levervalue.filter((item,index,arr)=>{
    //        return arr.indexOf(item) === index
    //     })
        // data.levervalue.map((item,index)=>{
        //     if(item===checkedValue){
        //         data.levervalue.splice(index,1)
        //     }
        // })
        
        
    //  console.log('123',data.levervalue)
     
    };

    let data: Data = reactive<Data>({
      value1: 300,
      max: 4000,
      step: 10,
      plainOptions: [{name:'一星',lever:false},{name:'二星',lever:false},{name:'三星',lever:false},{name:'四星',lever:false},{name:'五星',lever:false}],
      checked: false,
      levervalue:[]
    });
    return {
      ...toRefs(data),
      onChange
    };
  }
});
</script>

<style scoped lang='scss'>
.max {
  border: 1px solid rgb(238, 238, 238);
  width: 200px;
  padding: 10px 20px;
}
.box1 {
  width: 160px;
}
.box {
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  width: 160px;
}
.box2 {
  width: 80px;
  display: flex;
  flex-wrap: wrap;
}
.box3 {
  display: flex;
  flex-wrap: wrap;
}
.xianzhi{
    display: flex;
   
    justify-content: space-between;
}
.lener{
    width: 180px;
    font-size: 16px;
    border: 1px solid rgb(238,238,238);
     padding: 10px 20px;
}
</style>