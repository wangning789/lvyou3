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
            <a-input addonAfter='' placeholder="儿童" />
        </div>
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
      oneday: []
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