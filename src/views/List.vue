<template>
   <div>
      列表
      <List :LiebiaoXian="biaoxian"/>
   </div>
   

</template>

<script>
import List from '../components/Listbiao'
import {getList} from '../api' 
export default {
  created(){//ajax异步  越早发送越好 一般放 created
    // getBanner().then(data=>{
    //   console.log(data)
    // })
    this.getXian()
  },
  data(){
    return{
      biaoxian:[]
    }
  },
  components:{
    List
  },
  methods:{
    async getXian(){
      let {list}=await getList();
      this.biaoxian=list;
    }
  }
}
</script>