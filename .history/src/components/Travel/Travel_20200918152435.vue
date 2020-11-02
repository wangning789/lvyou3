<template>
<div>
   <div class="max">
   <div class="box">
     <div class="pox" style="margin:20px 0px">
       <div>
        <div class="meipop" style="display: flex;" @mouseleave="mouseleave">
         <div>
            <div  v-for="(item,index) in arr" :key="index">
           <div v-bind:class="[index===3?'jdg':'',index===num?'mom':'']" class="dfa  recommend" >
             <div class="kop" @mouseenter="mouseenter(index)">
               <div class="dfa">{{item.type}}</div>
              <div class="ziti"><RightOutlined /></div>
             </div>
           </div>
         </div>
         </div>
        <div v-if='show===true'>
         <div class="joj">
             <div v-for="(item,index) in arr[num].children" :key="index" >
             <div class="plp" :class="index===4?'plpl':''">
               <div class="dnf">
                <div class="dis"><div style="font-size:25px;">{{index+1}}</div></div>
                <div class="dia"><div>{{item.city}}</div></div>
                <div class="diq">{{item.desc}}</div>
               </div>
             </div>
         </div>
         </div>
        </div>
        </div>
        <div class="tes">推荐城市</div>
        <div class="lgd"><img style="width:100%" src="../../../pic_sea.jpeg" alt=""></div>
       </div>




       <div class="right"><Travelrigth></Travelrigth></div>
     </div>
      
   </div>
 
 </div>
 <div class="jojp"><img src="../../../QQ图片20200914164758_看图王.png" alt=""></div>
</div>
   
</template>

<script lang='ts'>
import Travelrigth from'../Travel/Travelrigth.vue'
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
     Travelrigth
   },
setup(props, ctx: SetupContext){
  let mouseenterone=():void=>{
    data.show=false
  }

  let mouseenter=(index:number):void=>{
    data.num=index
    data.show=true
  }

  let mouseleave=():void=>{
    data.num=-1
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
  num:-1,
  show:false
})
return {
...toRefs(data),
mouseenter,
mouseleave,
mouseenterone
}
},
 })
</script>

<style scoped lang='scss'>
.meipop{
  position: relative;
}
.max{
  display: flex;
  justify-content: center;
}
.box{
  width: 55vw;
}
.pox{
  display: flex;
  justify-content: space-between;
}
.recommend{
  width: 13.5vw;
  height: 5vh;
  border-top: 1px solid rgb(158,158,158);
   border-left: 1px solid rgb(158,158,158);
    border-right: 1px solid rgb(158,158,158);
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
  height: 5vh;
 
    border-right: 1px solid rgb(158,158,158);
}
.joj{
  position:fixed;
  background-color: white;
  width:20vw;
  border-top: 1px solid rgb(158,158,158);
  border-bottom: 1px solid rgb(158,158,158) ;
  z-index:10;
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
   border-left:1px solid rgb(158,158,158);
}
:hover.dis{
  cursor: pointer;
}
.mom{
   border-right: 1px solid white;
}
:hover.dia{
  cursor: pointer;
  text-decoration: underline;
  color: orange;
}
:hover.diq{
  text-decoration: underline;
  
}
.tes{
  font-size: 16px;
  color: black;
  height: 7vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(198,198,198);
  margin: 10px 0px;
}
.lgd{
  width: 13.5vw;
  height: 8vh;
}
.right{
  width: 38vw;
  

  
}


</style>