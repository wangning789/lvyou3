<template>
  <div>
    <div class="max">
      <div class="box">
        <div>
          <div>单程：{{name}}--{{region}}/{{date}}</div>
          <div>
            <div>
              <a-select
                v-model:value="value1"
                style="width: 120px"
               
                ref="select"
               
              >
                <!-- <div v-for="(item,index) in options" :key="index"> 
                    <a-select-option :value="item">{{item}}</a-select-option>
                </div> -->
              </a-select>
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
import { useRoute } from "vue-router";
import dayjs from "dayjs";
import api from "../../http/api";
interface Data {
  name: string;
  region: string;
  date: string;
  value1:string;

  departCode: string;
  destCode: string;
  aviation: Array<object>;
  options: Array<string>;
  total: number;
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
      value1:''
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
  }
}
</style>