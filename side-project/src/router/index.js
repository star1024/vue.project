import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Card from '@/components/Card'
import Css from '@/pages/css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/css',
      name: 'Css',
      component: Css
    }
  ]
})
