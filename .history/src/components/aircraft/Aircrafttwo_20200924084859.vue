<template>
  <div>
    <div class="max">
      <div class="box">
        <div class="box1">
          <div>单程：{{name}}--{{region}}/{{date}}</div>
          <div class="box2">
            <div>
              <a-select
              placeholder="起飞机场"
                v-model:value="value1"
                style="width: 120px"
                ref="select"
              >
                <a-select-option v-for="(item,index) in options" :key="index">{{item}}</a-select-option>
              </a-select>
            </div>
            <div>
                <a-select
                placeholder="起飞时间"
                v-model:value="value2"
                style="width: 120px"
                ref="select"
              >
                <a-select-option v-for="(item,index) in flightTimes" :key="index">{{item.from}}:00--{{item.to}}:00</a-select-option>
              </a-select>
            </div>
             <div>
                <a-select
                 placeholder="航空公司"
                v-model:value="value3"
                style="width: 120px"
                ref="select"
              >
                <a-select-option v-for="(item,index) in company" :key="index">{{item}}</a-select-option>
              </a-select>
            </div>
            <div>
                <a-select
                 placeholder="机型"
                v-model:value="value4"
                style="width: 120px"
                ref="select"
              >
                <a-select-option v-for="(item,index) in arr" :key="index">{{item}}</a-select-option>
              </a-select>
            </div>
            
          </div>
        </div>

        <div>
          <div>筛选:</div>
          <div><a-button type="primary">撤销</a-button></div>
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
import { useRoute } from "vue-router";
import dayjs from "dayjs";
import api from "../../http/api";
interface Data {
  name: string;
  region: string;
  date: string;
  value1:string;
  value2:string;
    flightTimes:Array<string>;
  departCode: string;
  destCode: string;
  aviation: Array<object>;
  options: Array<string>;
  total: number;
  company:Array<string>;
  value3:string
  value4:string;
  arr:Array<string>
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let route = useRoute();

    let getdata = ({
      departCity: departCity,
      departCode: departCode,
      destCity: destCity,
      destCode: destCode,
      departDate: departDate
    }: {
      departCity: string;
      departCode: string;
      destCity: string;
      destCode: string;
      departDate: string;
    }): void => {
      api
        .getairs({
          departCity: departCity,
          departCode: departCode,
          destCity: destCity,
          destCode: destCode,
          departDate: departDate
        })
        .then((res: any) => {
          data.aviation = res.flights;
          data.options = res.options.airport;
          data.total = res.total;
         data.flightTimes=res.options.flightTimes
         data.company=res.options.company
          console.log("123", data.options);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
    onMounted(() => {
      data.name = route.query.name as string;
      data.region = route.query.region as string;
      data.date = route.query.date as string;

      api
        .getcitytime({ name: route.query.name as string })
        .then((res: any) => {
          res.data.map((item: any) => {
            data.departCode = item.code;
          });
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      api
        .getcitytime({ name: route.query.region as string })
        .then((res: any) => {
          res.data.map((item: any) => {
            data.destCode = item.code;
          });
          getdata({
            departCity: route.query.name as string,
            departCode: data.departCode,
            destCity: route.query.region as string,
            destCode: data.destCode,
            departDate: route.query.date as string
          });
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    });

    let data: Data = reactive<Data>({
      name: "",
      region: "",
      date: "",
      departCode: "",
      destCode: "",
      aviation: [],
      options: [],
      total: 0,
      value1:'',
      flightTimes:[],
      value2:'',
      company:[],
      value3:'',
      value4:'',
      arr:['小','中','大']
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.max {
  display: flex;
  justify-content: center;
  
  .box {
    width: 1000px;
    margin: 20px 0px;
  }
}
.box1{
    justify-content: space-between;
    width: 800px;
    display: flex;
    align-items: center;
}
.box2{
    display: flex;
    div{
        margin-left: 10px;
    }
}
</style>