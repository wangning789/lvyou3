<template>
 <div>
        
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
import {useRoute,useRouter} from'vue-router'
interface Data {
    id:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
    let router=useRouter()
    let route=useRoute()


onMounted(()=>{
    data.id=route.query.id as string
})


let data: Data = reactive<Data>({
    id:''
})
return {
...toRefs(data),

}
},
 })
</script>

<style scoped lang='scss'>

</style>