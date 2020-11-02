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
    <div class="opo">
      <div class="ziti">推荐攻略</div>
      <div>
        <a-button type="primary" size="large">
          <template v-slot:icon>
            <EditOutlined />
          </template>写游记
        </a-button>
      </div>
    </div>
    <div class="lol"></div>
    <div>{{msg[0].id}}</div>
  </div>
</template>

<script lang='ts'>
import { Omg } from "../Travel/index";
import api from "../../http/api";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted
} from "vue";
interface Data {
  msg: [];
  total?: number | undefined;
}


export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    onMounted(() => {
      api
        .getlou()
        .then((res: any) => {
          data.msg=res.data
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    let data: Data = reactive<Data>({
      msg: []
    });
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
.ziti {
  padding-top: 5px;
  font-size: 18px;
  color: orange;
  border-bottom: 2px solid orange;
  height: 50px;
}
.opo {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.lol {
  width: 100%;
  border: 1px solid rgb(228, 228, 228);
}
</style>