<template>
  <div class="hello">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.square{
  height: 200px;
  width: 50%;
  position: relative;
  box-sizing: border-box;
  /* border: 1px solid #666; */
}
.square:nth-child(2n+1)::before{
  content: '';
  position: absolute;
  top: 0;
  right:0;
  height: 100%;
  width: 1px;
  background-color: #999;
  transform: scaleX(0.5);
}
.square:after{
  content: '';
  position: absolute;
  bottom: 0;
  left:0;
  width: 100%;
  height: 1px;
  background-color: #999;

  /* transform: scaleY(0.5); */

}
@media(-webkit-min-device-pixel-ratio: 1.5),(min-device-device-pixel-ratio: 1.5){
  .square:after{
      -webkit-transform: scaleY(0.7);
      transform:scaleY(0.7);
  }
}
 @media(-webkit-min-device-pixel-ratio: 2),(min-device-device-pixel-ratio: 2){
  .square:after{
      -webkit-transform: scaleY(0.5);
      transform:scaleY(0.5);
  }
}   
 @media(-webkit-min-device-pixel-ratio: 3),(min-device-device-pixel-ratio: 3){
  .square:after{
      -webkit-transform: scaleY(0.333);
      transform:scaleY(0.333);
  }
}   
</style>
