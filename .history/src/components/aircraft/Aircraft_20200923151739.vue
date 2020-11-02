<template>
  <div>
    <div class="max">
      <div class="box">
        <div class="box2">
          <div class="box1 iconfont icon-feiji"></div>
          <div>国内机票</div>
        </div>
        <div class="max3">
          <div class="box3">
            <div class="box4">
              <div class="Oneway">
                <SwapRightOutlined />单程
              </div>
              <div class="return">
                <SwapOutlined />往返
              </div>
            </div>
            <div class="max2">
              <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
                <div class="box6">
                  <div>
                    <a-form-item label="出发城市">
                      <a-input size="large" placeholder="出发城市" v-model:value="form.name" />
                    </a-form-item>
                    <a-form-item label="到达城市">
                      <a-input size="large" placeholder="到达城市" v-model:value="form.region" />
                    </a-form-item>
                  </div>
                  <div class="box5">
                    <div class="box7">
                      <div>换</div>
                    </div>
                  </div>
                </div>
                <a-form-item label="出发时间">
                  <a-date-picker
                   :disabled-date="disabledDate"
                    size="large"
                    v-model:value="form.date"
                    placeholder="请选择日期"
                    style="width: 100%;"
                  />
                </a-form-item>
                <a-form-item label="&nbsp;&nbsp;&nbsp;&nbsp;">
                  <a-button  @click="click" style="width:210px;" size="large" type="primary">
                    <template v-slot:icon>
                      <div class="non">
                        <SearchOutlined />
                        <div>搜索</div>
                      </div>
                    </template>
                  </a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>

          <div>
            <img src="../../../pic_sale.jpeg" alt />
          </div>
        </div>

        <div class="max4">
          <div>
            <label class="mx">
              <Html5Outlined />
            </label>100%航办认证
          </div>
          <div>
            <label class="mx2">
              <SafetyCertificateOutlined />
            </label>出行认证
          </div>
          <div>
            <label class="mx3">
              <PhoneOutlined />
            </label>7X24小时服务
          </div>
        </div>
        <div class="mox">特价机票</div>
        <div class="dox">
          <div class="nox">
            <div v-for="item in msg" :key="item">
              <div class="eox">
                <div class="jox" style="width:100%;height:100%;">
                  <img style="width:100%;height:100%;" :src="item.cover" alt />
                  <div class="cox">
                    <div>{{item.departCity}}--{{item.destCity}}</div>
                    <div>￥{{item.price}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import api from "../../http/api";
import moment from "moment";
import{message} from'ant-design-vue';
import{useRouter} from'vue-router'
interface Data {
  form: {
    name:string,
    region:string,
    date:string
  };
  labelCol: object;
  wrapperCol: object;
  msg: Array<object>;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let router=useRouter()

   let disabledDate = (current: any) => {
      // Can not select days before today and today
      return current && current > moment().endOf("day");
    };

    let click=()=>{
        if(data.form.name===''){
            message.error('请输入出发城市')
        }else if(data.form.region===''){
           message.error('请输入到达城市')
        }else if(data.form.date===''){
           message.error('请输入出发日期')
        }

        if(data.form.name!=''&&data.form.region!=''&&data.form.date!=''){
          router.push({
            path:'/Aircrafttwo',

          })
        }
    }

    onMounted(() => {
      api
        .getsael()
        .then(res => {
          data.msg = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    });

    let data: Data = reactive<Data>({
      form: {
        name: "",
        region: "",
        date: ""
      },
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
      msg: []
    });
    return {
      ...toRefs(data),
      disabledDate,
      click
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
  width: 1000px;
  .box2 {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: orange;
    .box1 {
      color: orange;
      font-size: 25px;
      margin-right: 5px;
    }
  }
}
.box3 {
  width: 360px;
  height: 350px;
  border: 1px solid rgb(228, 228, 228);
  .box4 {
    display: flex;
    div {
      color: black;
      font-size: 16px;
      display: flex;
      justify-content: center;
      flex: 1;
      padding: 10px 0px;
      align-items: center;
    }
  }
}
.Oneway {
  border-top: 2px solid orange;
}
.return {
  background-color: rgb(228, 228, 228);
}
.box5 {
  position: absolute;
  height: 70px;
  width: 30px;
  border-top: 1px solid rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
  border-right: 1px solid rgb(228, 228, 228);
  right: 28px;
  top: 20px;
  .box7 {
    position: relative;
    div {
      width: 20px;
      height: 20px;
      background-color: rgb(158, 158, 158);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: -8px;
      top: 22px;
      color: white;
    }
  }
}
.box6 {
  position: relative;
}
.non {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 0px 10px;
  }
}
.max2 {
  margin-left: 25px;
  margin-top: 20px;
}
.max3 {
  display: flex;
  justify-content: space-between;
}
.max4 {
  display: flex;
  font-size: 18px;
  margin: 20px 0px;
  div {
    flex: 1;
    border: 1px solid rgb(228, 228, 228);
    background-color: rgb(238, 238, 238);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    .mx {
      color: rgb(24, 144, 255);
      font-size: 25px;
      margin: 0px 5px;
    }
    .mx2 {
      color: green;
      font-size: 25px;
      margin: 0px 5px;
    }
    .mx3 {
      color: rgb(24, 144, 255);
      font-size: 25px;
      margin: 0px 5px;
    }
  }
}
.mox {
  font-size: 18px;
  color: rgb(24, 144, 255);
}
.dox {
  border: 1px solid rgb(228, 228, 228);
}
.eox {
  background-color: rgb(24, 144, 255);
  width: 220px;
  height: 140px;
}
.nox {
  padding: 20px 20px;
  justify-content: space-between;
  display: flex;
}
.cox {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 30px;
  background-color: rgba(12, 7, 7, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 15px;
  padding: 0px 10px;
}
.jox {
  position: relative;
}
</style>