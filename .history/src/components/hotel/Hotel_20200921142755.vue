<template>
  <div>
    <div class="max">
      <div class="box">
        <div class="hote">酒店&nbsp;>&nbsp;酒店预定</div>
        <div class="input">
          <a-input size="large" v-model:value="hote" placeholder="切换城市" />
        </div>
        <div>
          <a-range-picker size="large" show-time v-model:value="oneday" :disabled-date="disabledDate"  :placeholder="['开始日期','结束日期']"/>
        </div>
        <div> 
      
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <script src="https://webapi.amap.com/maps?v=1.4.15&key=你的key"></script>
    
 
       
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import moment from'moment'
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  hote: string;
  border: string;
  oneday: Array<string>;
  value1:Array<string>
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let disabledDate=(current:any)=>{
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    }
    let data: Data = reactive<Data>({
      hote: "",
      border: "",
      oneday: [],
      value1:['0','1']
    });
    return {
      ...toRefs(data),
      disabledDate
      
    };
  }
});
</script>

<style scoped lang='scss'>
.max {
  display: flex;
  justify-content: center;
}
.box {
  width: 55vw;
}
.hote {
  font-size: 15px;
  color: black;
  margin: 10px 0px;
}
.input {
  width: 200px;
}
</style>