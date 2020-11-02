<template>
 <div>
     <div v-for="(item,index) in arr" :key="index">
         <div class="max">
            <div class="box"><img style="width:100%;height:100%;" :src="item.photos" alt=""></div>
            <div class="lpl">
                <div class="name">{{item.name}}</div>
                <div class="fox">
                    <div>{{item.alias}}</div>
                    <div class="box1" v-if='item.hotellevel'><div v-for="item1 in item.hotellevel.level"  :key="item1" ><CrownOutlined /></div></div>
                    <div v-if='item.hotellevel'>{{item.hoteltype.name}}</div>
                </div>
                 <div class="box2">
                     <div class="kok">
                            <div><a-rate v-model:value="item.stars" allow-half  disabled  /></div>
                            <div><label class="lol">{{item.stars}}</label>分</div>
                     </div>
                     <div><label class="lol">{{item.num_collected}}</label>条评论</div>
                     <div><label class="lol">{{item.visits_month}}</label>篇游记</div>
                 </div>
                 <div class="box3">
                     <div style=" color: black;"><EnvironmentOutlined /></div>
                     <div>{{item.address}}</div>
                 </div>
            </div>

            <div>
                <div v-for="(item1, index1) in item.products" :key="index1">
                    <div>
                        <div>{{item1.name}}</div>
                        <div>{{price}}起</div>
                    </div>
                </div>
            </div>
         </div>
     </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
       arr:{
           type:Array
       }
   },
   components: {

   },
setup(props, ctx: SetupContext){

    onMounted(()=>{
       
    })

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
props
}
},
 })
</script>

<style scoped lang='scss'>
.name{
    font-size: 25px;
    font-weight: 500;
    color: black;
}
.box{
    width: 320px;
    height: 220px;
}
.max{
    display: flex;
}
.fox{
    display: flex;
    align-items: center;
    font-size: 17px;
   
}
.box2{
     display: flex;
    align-items: center;
    font-size: 18px;
    margin: 10px 0px;
    div{
        margin-right:10px;
    }
}
.box3{
     display: flex;
    align-items: center;
}
.box1{
    margin: 0px 10px;
    display: flex;
    color: orange;
}
.kok{
    display: flex;
    align-items: center;
}
.lol{
    color: orange;
}
.lpl{
    width: 450px;
    margin-left: 20px;
   
}
</style>