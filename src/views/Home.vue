<template>
  <div>
     这是首页
     <Banner :swiperSlides="slider"/>
     <List :LiebiaoXian="biaoxian"/>
     <!-- <div class="box">
          <div class="box-cont" v-for="item in baioxian" :key="item.id">
            <img :src="item.img"/>
            <p>{{item.name}}</p>
            <p>价格：{{item.price}}</p>
          </div>
     </div> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner'
import List from '../components/Listbiao'
// import List from './List'
// export {getBanner,getList}
import {getBanner} from '../api' 
import {getList} from '../api' 
//      解构赋值
// import * as obj from '../api' //把所有的属性都放在obj内
// console.log(obj);
// console.log(obj.getBanner.toString());
// import xxx from '../api';
// console.log(xxx);
export default {
  name: 'home',
  created(){//ajax异步  越早发送越好 一般放 created
    // getBanner().then(data=>{
    //   console.log(data)
    // })
    this.getSlider();
    this.getXian()
  },
  data(){
    return{
      slider:[],
      biaoxian:[]
    }
  },
  components:{
    Banner,
    List
  },
  methods:{
    // 轮播图请求
   async getSlider(){
      let {banner}=await getBanner();
      this.slider=banner;
    },
    async getXian(){
      let {list}=await getList();
      this.biaoxian=list;
    }
  }
}
</script>
