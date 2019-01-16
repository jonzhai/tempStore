<template>
    <div class="animated">
        <ul class="outer" ref="outer">
            <li v-for="(outer, index) in list" :key="index">
                <p class="title" @click="toggle(outer, $event)">{{outer.title}}</p>
                 <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
                    v-bind:css="false"
                >
                    <ul class="inner" v-show="outer.isShow" :key="outer.title">
                        <li v-for="(inner, index) in outer.lis" :key="index">{{inner}}</li>
                    </ul>
                </transition>   
            </li>
        </ul>      
        
    </div>     
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    title: '导航一',
                    lis: ['A', 'B', 'C']
                },
                {
                    title: '导航二',
                    lis: ['a', 'b', 'c']
                },
                {
                    title: '导航三',
                    lis: ['1', '2', '3']
                },
             ]
        }
    },
    mounted(){
        let outer = this.$refs.outer;

       
        
    },
    methods:{
        toggle(item, event){
            let el = event.target.parentNode.querySelector('.inner');
            if(typeof item.isShow === "undefined"){
              
                this.$set(item, 'isShow', true)
            }else{
                item.isShow = !item.isShow;
            }
        },
        beforeEnter: function (el) {
            el.style.height = 0+'px';
            el.style.transformOrigin = 'left'
        },
        enter: function (el, done) {
            Velocity(el, { height: 150}, { duration: 300,complete: done })
        },
        leave: function (el, done) {
           Velocity(el, { height: 0}, { duration: 300,complete: done  })
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.animated{
    .outer{
        display: flex;
        flex-direction: column;
        // overflow: hidden;
        background-color: #fff;

        li{
            // overflow: hidden;
            // background-color: #fff;
            .title{
                background-color: #999;
                // height: 50px;
                line-height: 50px;
                z-index: 10;
                // overflow: hidden;
            }
        }
        .inner{
            // display: flex;
            z-index: -1;
            flex-direction: column;
            // overflow: hidden;
            li{
                height: 50px;
            }
            
        }
    }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-enter-active {
    animation: bounce-in .5s;
//   transition: all 1s ease;
}
.slide-leave-active {
//   transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
 animation: bounce-in .5s reverse;
}
.slide-enter, .slide-leave-to
/* .slide-leave-active for below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}
@keyframes bounce-in {
  0% {
    height: 0;
  }
  50%{
      height: 50%;
  }
  100% {
    height: 100%;
  }
}
</style>


