<template>
  <div>
    <div class="box dfa">
      <div>
        <div class="dfa djaks" style="width: 400px;height:60px">
          <div style="width: 50%;height:100%" @click="clicklogin" class="dfa" :class="num===0?'pox':''">登录</div>
          <div style="width: 50%;height:100%" class="dfa" @click="clickregister" :class="num===1?'pox':''">注册</div>
        </div>
        <a-card class="max" v-if="num===0">
          <a-form ref="ruleForm" :model="form" :rules="rules">
            <a-form-item ref="name" name="name">
              <a-input v-model:value="form.name" style="height:40px" />
            </a-form-item>
            <a-form-item ref="name" name="password">
              <a-input style="height:40px" type="password" v-model:value="form.password" />
            </a-form-item>
          </a-form>
          <div class="forget">忘记密码</div>
          <a-button type="primary" size="large" block>登录</a-button>
        </a-card>
         <a-card class="max" v-if="num===1">
          <a-form ref="ruleForm" :model="vform" :rules="rules">
            <a-form-item ref="ipone" name="ipone">
              <a-input v-model:value="vform.ipone" style="height:40px" />
            </a-form-item>
            <a-form-item ref="verification" name="verification">
              <a-input-search style="height:40px"  size="large" enter-button v-model:value="vform.verification" />
            </a-form-item>
          </a-form>
          <div class="forget">忘记密码</div>
          <a-button type="primary" size="large" block>登录</a-button>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  form: objj;
  rules: nos;
  num:number;
  vform:baby
}

interface baby{
    ipone:string
    verification:string|number
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
      let clicklogin=():void=>{
          data.num=0
      }

    let clickregister=():void=>{
        data.num=1
    }
    let data: Data = reactive<Data>({
        vform:{
            ipone:'',
            verification:''
        },
        num:0,
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
  background-color: rgb(238,238,238);
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
.pox{
    background-color: white;
    border-top:2px solid orange;
    color: orange;
}
</style>