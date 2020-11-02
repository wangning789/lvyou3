<template>
  <div>
    <div class="max">
      <div>
        <input class="input" placeholder="请输入想去的地方,比如:'广州'" />
      </div>
      <div class="box">
        <SearchOutlined />
      </div>
    </div>
    <div class="city" style="display:flex;margin:5px 0px">
      <div>推荐:</div>
      <div class="shang">上海</div>
      <div class="beijin">北京</div>
      <div class="guang">广州</div>
    </div>
    <div>
      <div>推荐攻略</div>
      <div>
        <a-button type="primary" size="large"><template v-slot:icon><EditOutlined /></template>写游记</a-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.max {
  position: relative;
}
.input {
  width: 38vw;
  border: 4px solid orange;
  height: 40px;
  outline: none;
  padding-left: 20px;
  padding-right: 30px;
}
.box {
  font-size: 25px;
  color: orange;
  position: absolute;
  top: -0px;
  right: 10px;
}
.city {
  div {
    margin-right: 10px;
  }
}
:hover.shang {
  color: orange;
  cursor: pointer;
  text-decoration: underline;
}
:hover.beijin {
  color: orange;
  cursor: pointer;
  text-decoration: underline;
}
:hover.guang {
  color: orange;
  cursor: pointer;
  text-decoration: underline;
}
</style>