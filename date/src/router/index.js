import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import myDate from '@/components/date';
import myDate1 from '@/components/date.1';
import vux from '@/components/vux';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
  ]
})
