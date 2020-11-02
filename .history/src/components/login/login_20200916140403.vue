<template>
  <div>
    <div class="box dfa">
      <div>
        <div class="dfa djaks" style="width: 400px;height:60px">
          <div
            style="width: 50%;height:100%"
            @click="clicklogin"
            class="dfa"
            :class="num===0?'pox':''"
          >登录</div>
          <div
            style="width: 50%;height:100%"
            class="dfa"
            @click="clickregister"
            :class="num===1?'pox':''"
          >注册</div>
        </div>
        <a-card class="max" v-if="num===0">
          <a-form ref="ruleForm" :model="form" :rules="rules">
            <a-form-item ref="name" name="name">
              <a-input v-model:value="form.name" placeholder="输入账户" style="height:40px" />
            </a-form-item>
            <a-form-item ref="name" name="password">
              <a-input
                style="height:40px"
                placeholder="输入密码"
                type="password"
                autocomplete="off"
                v-model:value="form.password"
              />
            </a-form-item>
          </a-form>
          <div class="forget">忘记密码</div>
          <a-button type="primary" size="large" block>登录</a-button>
        </a-card>
        <a-card class="max" v-if="num===1">
          <a-form ref="ruleForm" :model="vform" :rules="Rrules">
            <a-form-item ref="ipone" name="ipone">
              <a-input v-model:value="vform.ipone" placeholder="用户名手机" style="height:40px" />
            </a-form-item>
            <a-form-item ref="verification" name="verification">
              <a-input-search
                style="height:40px"
                placeholder="输入验证码"
                size="large"
                v-model:value="vform.verification"
              >
                <template v-slot:enterButton>
                  <a-button>发送验证码</a-button>
                </template>
              </a-input-search>
            </a-form-item>
            <a-form-item ref="usname" name="usname">
              <a-input v-model:value="vform.usname" placeholder="输入昵称" style="height:40px" />
            </a-form-item>
            <a-form-item ref="name" name="aspassword">
              <a-input
                style="height:40px;"
                placeholder="输入密码"
                type="password"
                autocomplete="off"
                v-model:value="vform.aspassword"
              />
            </a-form-item>
            <a-form-item ref="name" name="uspassword">
              <a-input
                style="height:40px;"
                placeholder="再次输入密码"
                type="password"
                autocomplete="off"
                v-model:value="vform.uspassword"
              />
            </a-form-item>
          </a-form>
          <div class="forget">忘记密码</div>
          <a-button type="primary" size="large" @click="clickon" block>登录</a-button>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { Form } from "ant-design-vue/types/form/form";
interface Data {
  form: objj;
  rules: nos;
  num: number;
  vform: baby;
  Rrules: Rrules;
}

interface Rrules {
  ipone: asipone[];
  verification: asverification[];
  usname: asusname[];
  aspassword: aspassword[];
  uspassword: uspassword[];
}

interface asipone {
  required: boolean;
  message: string;
  trigger: string;
}
interface asverification {
  required: boolean;
  message: string;
  trigger: string;
}
interface asusname {
  required: boolean;
  message: string;
  trigger: string;
}
interface aspassword {
  required: boolean;
  message: string;
  trigger: string;
}
interface uspassword {
  trigger: string;
  validator: (
    rule: any,
    value: any,
    callback: () => void
  ) => Promise<void> | void;
}

interface baby {
  ipone: string;
  verification: string | number;
  usname: string;
  aspassword: string;
  uspassword: string;
}

interface objj {
  name: string;
  passwrod: string;
}

interface nos {
  name: wog[];
  password: pass[];
}
interface wog {
  required: boolean;
  message: string;
  trigger: string;
}
interface pass {
  required: boolean;
  message: string;
  trigger: string;
}

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let clickon=():void=>{
      console.log("123")
    }

    let clicklogin = (): void => {
      data.num = 0;
    };

    let clickregister = (): void => {
      data.num = 1;
    };
    let data: Data = reactive<Data>({
      Rrules: {
        uspassword: [
          {
            validator: (rule: any, value: any, callback: () => void) => {
              if (value === "") {
                return Promise.reject("请验证密码");
              } else if (value !== data.vform.aspassword) {
                return Promise.reject("验证不一致，请重新验证");
              } else {
                return Promise.resolve();
              }
            },
            trigger: "blur"
          }
        ],
        aspassword: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        ipone: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        verification: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ],
        usname: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "blur"
          }
        ]
      },
      vform: {
        aspassword: "",
        uspassword: "",
        usname: "",
        ipone: "",
        verification: ""
      },
      num: 0,
      form: {
        name: "",
        passwrod: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    });
    return {
      ...toRefs(data),
      clicklogin,
      clickregister
    };
  }
});
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  height: 650px;
  background-image: url("http://157.122.54.189:9095/assets/images/th03.jfif");
}
.djaks {
  background-color: rgb(238, 238, 238);
  font-size: 18px;
}
.forget {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  font-size: 12px;
  color: rgb(64, 158, 255);
  margin-bottom: 10px;
}
.pox {
  background-color: white;
  border-top: 2px solid orange;
  color: orange;
}
</style>