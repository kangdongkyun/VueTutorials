import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodBye from '@/components/GoodBye'
import Example1 from '@/components/Example1'
import Example2 from '@/components/Example2'
import Example3 from '@/components/Example3'

// @src라는 의미
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/bye',
      name: 'GoodBye',
      component: GoodBye
    },{
      path: '/ex1',
      name: 'Example1',
      component: Example1
    },{
      path: '/ex2',
      name: 'Example2',
      component: Example2
    },{
      path: '/ex3',
      name: 'Example3',
      component: Example3
    }
  ]
})
