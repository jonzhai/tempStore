<template>
    <div class="container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
                <div class="swiper-slide">slider4</div>
                <div class="swiper-slide">slider5</div>
                <div class="swiper-slide">slider6</div>
                <div class="swiper-slide">slider7</div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    mounted(){
      
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
      on:{
          click: function(e){
              console.log(this.clickedIndex, e)
          }
      }
    });
  
    }
}
</script>
<style>
.swiper-slide{
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
}
</style>


