<template>
  <div>
    <div class="dfa max">
      <div class="df" style="width:50vw">
        <div class="df co ziti">
          <div class="paa" style="width:10vw;">
            <img style="width:100%;" src="http://157.122.54.189:9093/images/logo.jpg" />
          </div>
          <div class="pa" @click="clickhome" :class="$route.name==='home'?'box':''">首页</div>
          <div class="pa" @click="clickStrategy" :class="$route.path==='/travel'?'box':''">旅行攻略</div>
          <div class="pa" @click="clickhotel" :class="$route.path==='/Hotel'?'box':''">酒店</div>
          <div class="pa" @click="clickticket" :class="$route.path==='/Aircraft'?'box':''">国内机票</div>
        </div>
        <div v-if="num===0">
          <div @click="clicklogin" class="login">登录 / 注册</div>
        </div>
        <div v-if="num===1">
          <a-popover placement="bottom">
            <template v-slot:content>
              <p>Content</p>
              <p>Content</p>
            </template>
            <template v-slot:title>
              <span>Title</span>
            </template>
            <div>
                <div class="pox"><img :src="`http://157.122.54.189:9095${data.msg}`" alt=""></div>

            </div>
          </a-popover>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
interface Data {
  num?: number;
  msg: msg;
}

interface msg {
  token: string;
  user: object;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},

  setup(props, ctx: SetupContext) {
    let route = useRoute();
    let router = useRouter();
    let store = useStore();

    onMounted(() => {
      let msg = JSON.parse(localStorage.getItem("data")! as string);
      if (msg) {
        data.msg = msg;
        data.num = 1;
      }
    });

    let clicklogin = (): void => {
      router.push("/login");
    };

    let clickhome = (): void => {
      router.push("/");
      data.num = 0;
    };
    let clickStrategy = (): void => {
      data.num = 1;
      router.push("/travel");
    };
    let clickhotel = (): void => {
      router.push("/Hotel");
      data.num = 2;
    };
    let clickticket = (): void => {
      router.push("/Aircraft");
      data.num = 3;
    };
    let data: Data = reactive<Data>({
      num: 0,
      msg: {
        token: "",
        user: {}
      }
    });
    return {
      ...toRefs(data),
      clickhome,
      clickStrategy,
      clickhotel,
      clickticket,
      clicklogin
    };
  }
});
</script>

<style scoped lang='scss'>
.box {
  background-color: rgb(64, 158, 255);
  color: white;
  border-bottom: 4px solid rgb(64, 158, 255);
}
.login:hover {
  cursor: pointer;
  color: rgba(64, 158, 255, 0.8);
  text-decoration: underline;
}
.pox{
    width: 30px;
    height: 30px;
    border-radius:50%;
    background-color: aqua;
}
</style>