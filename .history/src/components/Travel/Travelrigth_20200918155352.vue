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
    <div>
      <div v-for="(item,index) in msg" :key="index">
        <div class="lplp" v-if="item.images.length>2">
          <div class="lol"></div>
          <div class="tit" @click="click(item)">{{item.title}}</div>
          <div class="p" @click="click(item)">{{item.summary}}</div>
          <div class="dfb">
            <div v-for="(item1,index1) in item.images" :key="index1">
              <div class="poptu" v-if="index1<3" @click="click(item)">
                <div>
                  <img :src="item1" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="kok">
            <div>
              <EnvironmentOutlined />
            </div>
            <div>{{item.cityName}}</div>
            <div class="mop">
              <img :src="`http://157.122.54.189:9095${item.account.defaultAvatar}`" alt />
            </div>
            <div class="name">{{item.account.nickname}}</div>
            <div>
              <EyeOutlined />
            </div>
            <div>{{item.watch}}</div>
          </div>
        </div>

        <div v-if="item.images.length<3">
          <div class="lol"></div>
          <div class="vbn">
            <div v-for="(item2,index2) in item.images" :key="index2">
              <div v-if="index2<1" class="bbq">
                <img :src="item2" alt />
              </div>
            </div>
            <div class="plpol">
              <div class="tit">{{item.title}}</div>
              <div class="p" id="p">{{item.summary}}</div>
              <div class="nml">
                <div>
                  <EnvironmentOutlined />
                </div>
                <div>{{item.cityName}}</div>
                <div class="mop">
                  <img :src="`http://157.122.54.189:9095${item.account.defaultAvatar}`" alt />
                </div>
                <div class="name">{{item.account.nickname}}</div>
                <div>
                  <EyeOutlined />
                </div>
                <div>{{item.watch}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lol"></div>
      <div class="fenye">
        <div id="components-pagination-demo-mini">
          <a-pagination
            @showSizeChange='showSizeChange'
            @change='change'
            :current='current'
            :pageSize='pageSize'
            :pageSizeOptions="pageSizeOptions"
            :total="total"
            show-size-changer
            show-quick-jumper
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import{useRouter}from'vue-router'
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
  arr:Array<object>;
  msg: Array<object>;
  total?: number | undefined;
  pageSizeOptions: string[];
  pageSize: number;
  current:number
  
}

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let router=useRouter()

    let click=(item:any):void=>{
        router.push({
          path:'/detali',
          query:{
            id:item.id
          }
        })
    }


    let change=(page:any, pageSize:any):void=>{
       data.current=page
      let omg=(data.current-1)*(data.pageSize)
      let ig=data.current*data.pageSize
      data.msg=data.arr.slice(omg,ig)    
    }

    let showSizeChange=(current:any, size:any):void=>{
      data.current=current
      data.pageSize=size
     let omg=(data.current-1)*(data.pageSize)
      let ig=data.current*data.pageSize
      data.msg=data.arr.slice(omg,ig)  
    }


    onMounted(() => {
      api
        .getlou()
        .then((res) => {
          res.data.splice(4);
          data.arr=res.data
          data.msg = res.data;
          data.msg=data.arr.slice(0,data.pageSize)
          data.total = res.data.length;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    let data: Data = reactive<Data>({
      arr:[],
      msg: [],
      pageSizeOptions: ["3", "6"],
      total: 0,
      pageSize:3,
      current:1
    });
    return {
      ...toRefs(data),
      change,
      showSizeChange,
      click
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
.tit {
  font-size: 17px;
  color: black;
}
:hover.tit{
  cursor: pointer;
  color: orange;
}
:hover.p{
   cursor: pointer;
}

.p {
  word-break: break-all;
  display: -webkit-box; /**对象作为伸缩盒子模型展示**/
  -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
  -webkit-line-clamp: 3; /**显示的行数**/
  overflow: hidden; /**隐藏超出的内容**/
}
.poptu {
  div {
    width: 11vw;
    height: 15vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.lplp {
  div {
    margin-bottom: 10px;
  }
}
.mop {
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.name {
  color: orange;
}
.kok {
  display: flex;
  align-items: center;
  div {
    margin-right: 5px;
  }
}
.bbq {
  width: 12vw;
  height: 15vh;
  margin-right:10px;
  img {
    width: 100%;
    height: 100%;
  }
}
.vbn {
  margin: 20px 0px;
  display: flex;
  align-items: center;
}
.nml {
  display: flex;
  div {
    margin-right: 8px;
  }
}
#p {
  margin: 10px 0px;
}
.fenye {
  display: flex;
  justify-content: center;
  margin: 10px 0px;
}
</style>