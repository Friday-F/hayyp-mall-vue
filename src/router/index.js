import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Home from '../views/home/index';
import Omnibus from '../views/omnibus/index'
import Product from '../views/product/category-manage/list/index'
import ProductEdit from '../views/product/category-manage/edit/index'
import Classify from '../views/product/classify/list/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        name:"login"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:"home",
      component:Home,
      redirect:{
        name:'omnibus'
      },
      children:[
        {
          path:'omnibus',
          name:"omnibus",
          component:Omnibus,
        },
        {
          path:"product",
          name:'product',
          component:Product
        },
        {
          path:"product/:type/:id",
          name:'product-watch',
          component:ProductEdit
        },
        {
          path:"product/:type/:id",
          name:'product-edit',
          component:ProductEdit
        },
        {
            path:"classify",
            name:"classify",
            component:Classify
        }
        
      ]
    }
  ]
})
