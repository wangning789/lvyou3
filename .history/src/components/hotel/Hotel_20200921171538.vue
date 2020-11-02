<template>
  <div>
    <div class="max">
      <div class="box">
        <div class="hote">酒店&nbsp;>&nbsp;酒店预定</div>
        <div class="mpal">
          <div class="input">
            <a-input size="large" v-model:value="hote" placeholder="切换城市" />
          </div>
          <div>
            <a-range-picker
              size="large"
              show-time
              v-model:value="oneday"
              :disabled-date="disabledDate"
              :placeholder="['开始日期','结束日期']"
            />
          </div>
          <div>
            <a-button size="large" type="primary">查看价格</a-button>
          </div>
        </div>

        <div class="it">
         <div class="mplko">
            <div>区域:</div>
            <div class="lokp">
              <div v-for="(item,index) in msg" :key="index" :style="{overflow:overflow,height:height}" class="diming">
            <div v-for="(item1,index1) in item.scenics" :key="index1" class="dsajd">
              <div >
                <div>{{item1.name}}</div>
              </div>
            </div>
          </div>
            <div class="lpkij" v-if='num===0' @click="click"><DownOutlined />等{{msg[0].scenics.length}}区域</div>
            <div class="lpkij" v-if='num===1' @click="clickon"><UpOutlined />等{{msg[0].scenics.length}}区域</div>
            </div>
         </div>

          <div id="container" class="map"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import api from "../../http/api";
import moment from "moment";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted
} from "vue";
interface Data {
  hote: string;
  border: string;
  oneday: Array<string>;
  value1: Array<string>;
  msg: Array<object>;
  overflow:string,
  height:string,
  num:number
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let disabledDate = (current: any) => {
      // Can not select days before today and today
      return current && current < moment().endOf("day");
    };

    let clickon=():void=>{
      data.overflow='hidden'
      data.height='45px'
      data.num=0
    }

    let click=():void=>{
      data.overflow=''
      data.height=''
      data.num=1
    }

    onMounted(() => {
      let map = new AMap.Map("container", {
        zoom: 11, //级别
       
      });
      console.log(map)

      api.getlpijju({city:239}).then((res:any)=>{
        console.log(res)
      }).catch((err:any)=>{
        console.log(err)
      })

      api
        .gethoel({ name: "北京" })
        .then((res: any) => {
          data.msg = res.data;
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    let data: Data = reactive<Data>({
      hote: "",
      border: "",
      oneday: [],
      value1: ["0", "1"],
      msg: [{
        scenics:''
      }],
      overflow:'hidden',
      height:"45px",
      num:0
    });
    return {
      ...toRefs(data),
      disabledDate,
      click,
      clickon
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
  width: 55vw;
}
.hote {
  font-size: 15px;
  color: black;
  margin: 10px 0px;
}
.input {
  width: 200px;
}
.mpal {
  display: flex;
  div {
    margin-right: 10px;
  }
}
.map {
  width: 400px;
  height: 250px;
}
.diming {
  display: flex;
  width: 30vw;
  flex-wrap: wrap;
  font-size: 15px;
text-overflow:ellipsis;
  
}
.mplko{
  font-size: 15px;
  display: flex;
  div{
    margin-right: 5px;
  }
 
}
.it{
  display: flex;
  justify-content: space-between;
  margin-top:20px;
}
:hover.lpkij{
  cursor: pointer;
}

</style>