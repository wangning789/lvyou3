<template>
 <div>
     <hotel></hotel>
 </div>
</template>

<script>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import hotel from'../hotel/location.vue'

 export default defineComponent({
   name: '',
   props: {
   },
   components: {
hotel
   },
setup(props, ctx){
    onMounted(()=>{
        let data=is
          const self = this;
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });
 
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);
        AMap.event.addListener(geolocation, 'error', onError);
 
        function onComplete (data) {
            is.msg=data.addressComponent.city
          // data是具体的定位信息
        //   console.log('定位成功信息：', data.addressComponent.city);
          
        }
 
        function onError (data) {
          // 定位出错
          console.log('定位失败错误：', data);
          // 调用IP定位
         
        }
      });
      console.log(data.msg)
    
    })

let data = reactive({
    msg:''
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>