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
  msg: arr[];
  total?: number | undefined;
}

interface arr {
  account: {
    created_at: string;
    defaultAvatar: string;
    email: null;
    id: number;
    nickname: string;
    password: string;
    role: number;
    starPosts: null;
    updated_at: number;
    username: string;
  };
  city: object;
  cityName: string;
  comments: liu[];
  content: string;
  created_at: number;
  id: number;
  summary: string;
  title: string;
  updated_at: number;
  watch: number;
}

interface liu {
  account: number;
  content: string;
  created_at: number;
  id: number;
  level: number;
  post: number;
  type: number;
  updated_at: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    onMounted(() => {
      api
        .getlou()
        .then((res: Omg) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    let data: Data = reactive<Data>({
      msg: [
        {
          account: {
            created_at: "",
            defaultAvatar: "",
            email: null,
            id: 0,
            nickname: "",
            password: "",
            role: 0,
            starPosts: null,
            updated_at: 0,
            username: ""
          },
          city: {},
          cityName: "",
          comments: [
            {
              account: 0,
              content: "",
              created_at: 0,
              id: 0,
              level: 0,
              post: 0,
              type: 0,
              updated_at: 0
            }
          ],
          content: "",
          created_at: 0,
          id: 0,
          summary: "",
          title: "",
          updated_at: 0,
          watch: 0
        }
      ]
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