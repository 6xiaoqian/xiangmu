<template>
  <div class="box">
       <div class="box-cont" v-for="biao in LiebiaoXian" :key="biao.id">
            <img :src="biao.img"/>
            <p>{{biao.name}}</p>
            <p>价格：{{biao.price}}</p>
        </div>
  </div>
   
</template>

<script>
  export default {
    // name: 'carrousel',
    props:{
        LiebiaoXian:{
            type:Array,
            default:()=>([])
        }
    }
  
  }
</script>
<style>
.box{
      width: 98%;
      display: flex;
      justify-content:space-around;
      flex-wrap: wrap;
  }
.box-cont{
    flex: 1;
}
</style>