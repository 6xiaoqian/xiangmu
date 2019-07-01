<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide.imgurid"><img :src="slide.imgurl"/></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
        swiperSlides:{
            type:Array,
            default:()=>([])//???
        }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
    
  }
</script>
<style>
  .swiper-slide img{
     width: 100%;
     height: 500px;
  }
</style>
