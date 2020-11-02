<template>
 <div>

 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,} from 'vue'
import{useRoute,useRouter} from'vue-router'
interface Data {
}
 export default defineComponent({
    
    beforeRouteEnter(to:any, from:any, next:any) {
    next((xq:any) => {
       
    //要注意，必须使用this.$router.replace而非this.$router.push
    //如果使用的是this.$router.push会导致，进入过空白页之后，通过浏览器的后退键，无法实现页面后退的bug现象
       xq.$router.replace(from.path);
    });
  },
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
     let router=useRouter()

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>