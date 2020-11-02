<template>
 <div>
     <div v-for="(item,index) in arr" :key="index">
         <div class="max">
            <div class="box"><img style="width:100%;height:100%;" :src="item.photos" alt=""></div>
            <div>
                <div>{{item.name}}</div>
                <div class="fox">
                    <div>{{item.alias}}</div>
                    <div class="fox" v-if='item.hotellevel'><div v-for="item1 in item.hotellevel.level"  :key="item1" ><CrownOutlined /></div></div>
                </div>
                 <div class="fix">
                     <div><a-rate v-model:value="item.stars" allow-half  disabled  /></div>
                     <div>{{item.stars}}分</div>
                     <div>{{item.num_collected}}条评论</div>
                     <div>{{item.visits_month}}篇游记</div>
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
.box{
    width: 320px;
    height: 220px;
}
.max{
    display: flex;
}
.fox{
    display: flex;
}
</style>