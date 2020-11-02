<template>
 <div>
     {{arr}}
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
        console.log('451513',props)
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

</style>