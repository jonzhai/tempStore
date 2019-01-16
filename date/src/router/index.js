import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import myDate from '@/components/date';
import myDate1 from '@/components/date.1';
import vux from '@/components/vux';
import animated from '@/components/animated';
import swiper from '@/components/swiper';
import echart_demo from '@/pages/echart-demo/demo';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/echart_demo',
      name: 'echart_demo',
      component: echart_demo
    },
    {
      path: '/date',
      name: 'date',
      component: myDate
    },
    {
      path: '/date1',
      name: 'date1',
      component: myDate1
    },
    {
      path: '/vux',
      name: 'vux',
      component: vux
    },
    {
      path: '/animated',
      name: 'animated',
      component: animated
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
  ]
})
