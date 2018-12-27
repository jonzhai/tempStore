<template>
    <div class="vux">
        <Actionsheet 
          :value="true"
          :menus="menus"
          ></Actionsheet>

        vux
    </div>
</template>
<script>
import { Actionsheet } from 'vux'

export default {
  data(){
    return {
      menus:[
        '删除',
        '删除',
        '删除',
        '删除',
        '删除',
      ]
    }
  },
  components: {
    Actionsheet
  }
}
</script>
