<template>
    <div ref="container" class="wrapper"></div> 
</template>
<script>
import config from './config';
import Echart from 'echarts';
import Muuri from 'muuri';
import { setTimeout } from 'timers';
export default {
    mounted(){
        // let fram = document.createDocumentFragment();
        config.forEach((item) => {
            let content = document.createElement('div'),
                ele = document.createElement('div'),
                pTiltle = document.createElement('p');
            pTiltle.className = "p-title";
            pTiltle.innerHTML = 'title';
            content.appendChild(pTiltle);
            ele.style.width = 400 +'px';
            ele.style.height = 400 +'px';
            content.appendChild(ele);
            this.$refs.container.appendChild(content);
            setTimeout(()=>{
                let echast = Echart.init(ele);
                echast.setOption(item);
            }, 20)
            // fram.appendChild(ele);
        })
        setTimeout(()=>{
            var grid = new Muuri(this.$refs.container,{
                dragEnabled: true,
                 dragStartPredicate: {
                    distance: 0,
                    delay: 0,
                    handle: '.p-title'
                },
            });
        }, 1000)

    }
}
</script>
<style>
.wrapper{
    position: relative;
}
.wrapper>div{
    position: absolute;
}
</style>


