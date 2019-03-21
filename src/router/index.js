import Vue from 'vue'
import Router from 'vue-router'
import vip from '../components/vip.vue'
import svip from '../components/svip.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/vip',
      component:vip
    },
    {
      path:'/svip',
       component:svip
     }
  ]
})
