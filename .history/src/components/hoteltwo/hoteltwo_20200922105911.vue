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
                <a-checkbox @change="onChange(item)">{{item}}</a-checkbox>
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
  plainOptions: Array<string>;
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
        
        
        data.levervalue.push(checkedValue)
      data.levervalue= data.levervalue.filter((item,index,arr)=>{
           return arr.indexOf(item) === index
        })
        data.levervalue.map((item,index)=>{
            if(item===checkedValue){
                data.levervalue.splice(index,1)
            }
        })
        
        
     console.log('123',data.levervalue)
     
    };

    let data: Data = reactive<Data>({
      value1: 300,
      max: 4000,
      step: 10,
      plainOptions: ["一星", "二星", "三星", "四星", "五星"],
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