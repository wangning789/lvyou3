<template>
  <div>
    <div class="box dfa">
      <a-card class="max">
        <div class="dff" style="width: 350px;height:20px">
          <div style="width: 50%;" class="dfa">登录</div>
          <div style="width: 50%" class="dfa">注册</div>
        </div>
        <a-form
          ref="ruleForm"
          :model="form"
          :rules="rules"
        >
          <a-form-item ref="name"  name="name">
            <a-input v-model:value="form.name" style="height:40px" />
          </a-form-item>
           <a-form-item ref="name"  name="password">
            <a-input style="height:40px" type="password" v-model:value="form.password" />
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
    form:object
    rules:nos
}

interface nos {
    name:wog[]
    password:pass[]
}
interface wog{
     required:boolean,
      message:string,
      trigger:string
}
interface pass{
     required:boolean,
      message:string,
      trigger:string
}

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
        form:{
            name:''
        },
        rules:{
            name:[
                {
                   required: true, message: '请输入账号', trigger: 'blur'  
                }
            ],
            password:[
                {
                   required: true, message: '请输入密码', trigger: 'blur'  
                }
            ]
        }
    });
    return {
      ...toRefs(data)
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
</style>