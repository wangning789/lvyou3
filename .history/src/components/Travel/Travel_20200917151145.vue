<template>
 <div class="max">
   <div class="box">
     <div class="pox">
       <div>
        <div class="meipop" style="display: flex;">
         <div @mouseleave="mouseleave">
            <div  v-for="(item,index) in arr" :key="index">
           <div :class="index===3?'jdg':''" class="dfa  recommend">
             <div class="kop" @mouseenter="mouseenter(index)" >
               <div class="dfa">{{item.type}}</div>
              <div class="ziti"><RightOutlined /></div>
             </div>
           </div>
         </div>
         </div>
        <div v-if='show===true'>
         <div class="joj">
             <div v-for="(item,index) in arr[0].children" :key="index" >
             <div class="plp" :class="index===num?'plpl':''">
               <div class="dnf">
                <div><div style="font-size:25px;">{{index+1}}</div></div>
                <div><div>{{item.city}}</div></div>
                <div>{{item.desc}}</div>
               </div>
             </div>
         </div>
         </div>
        </div>
        </div>
       </div>




       <div></div>
     </div>
   </div>
 </div>
</template>

<script lang='ts'>
import {Res} from'../Travel/index'
import api from '../../http/api'
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue'
interface Data {
  arr:msg[]
  num:number
  show:boolean
}

interface msg{
   children:[
        {
        city:string
        desc:string
    }
    ]
    type:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
  let mouseenter=(index:number):void=>{
    data.num=index
    data.show=true
  }

  let mouseleave=():void=>{
    data.show=false
  }


  onMounted(()=>{
    api.getcity().then((res:Res)=>{
      data.arr=res.data
      console.log(res)
    }).catch((err:any)=>{
      console.log(err)
    })
  })

let data: Data = reactive<Data>({
  arr:[
    {children:[{
      city:'',
      desc:''
    }],
    type:''}
  ],
  num:0,
  show:false
})
return {
...toRefs(data),
mouseenter,
mouseleave
}
},
 })
</script>

<style scoped lang='scss'>
.max{
  display: flex;
  justify-content: center;
}
.box{
  width: 55vw;
}
.pox{
  display: flex;
}
.recommend{
  width: 13.5vw;
  height: 7vh;
  border-top: 1px solid rgb(158,158,158);
   border-left: 1px solid rgb(158,158,158);
    border-right: 1px solid rgb(158,158,158);
}
:hover.recommend{
   border-right: 1px solid white;
}

.jdg{
   border-bottom: 1px solid rgb(158,158,158);
}
.kop{
  width: 11vw;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
:hover.kop{
  color: orange;
}
.plp{
  height: 7vh;
  border-left:1px solid rgb(158,158,158);
    border-right: 1px solid rgb(158,158,158);
}
.joj{
  background-color: white;
  width:22vw;
  border-top: 1px solid rgb(158,158,158);
  border-bottom: 1px solid rgb(158,158,158) ;
}
.dnf{
  display: flex;
  align-items: center;
  div{
    margin: 0px 5px;
    div{
      color: orange;
    }
  }
}
.plpl{
   border-left:1px solid white;
}

</style>