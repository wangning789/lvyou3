<template>
  <div>
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
              <div class="xianzhi"><div>不限</div><div><DownOutlined /></div></div>
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
  levervalue: Array<object>;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let onChange = (e: any): void => {
      console.log(e);
     
    };

    let data: Data = reactive<Data>({
      value1: 300,
      max: 4000,
      step: 10,
      plainOptions: ["一星", "二星", "三星", "四星", "五星"],
      checked: false,
      levervalue: []
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
    width: 80px;
    justify-content: space-between;
}
.lener{
    font-size: 16px;
}
</style>