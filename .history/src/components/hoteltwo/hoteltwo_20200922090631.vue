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
    <div>
      <div>住宿等级</div>
      <div>
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            不限
            <DownOutlined />
          </a>
          <template v-slot:overlay>
            <a-menu>
              <a-menu-item>
                  <div class="box">
                      <a-checkbox-group :options="plainOptions" />
                  </div>
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
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value1: 300,
      max: 4000,
      step: 10,
      plainOptions: ["Apple", "Pear", "Orange"]
    });
    return {
      ...toRefs(data)
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
}
</style>