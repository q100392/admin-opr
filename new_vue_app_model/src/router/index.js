import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import StroeSet from '@/components/stroermanagement/stroeSet'
import ProductManagement from '@/components/productmanagement/productManagement'
import OrderManagement from '@/components/ordermanagement/orderManagement'
import CheckOrder from '@/components/ordermanagement/checkOrder'
import ReviewOrder from '@/components/ordermanagement/reviewOrder'

import UserSet from '@/components/usersettings/userSet'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        keepalive:false
      }
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      meta:{
        keepalive:true
      }
    },
    {
      path: '/stroeset',
      name: 'StroeSet',
      component: StroeSet,
      meta:{
        keepalive:true
      }
    },
    {
      path: '/productmanagement',
      name: 'ProductManagement',
      component: ProductManagement,
      meta:{
        keepalive:true
      }
    },
//     {
//       path: '/ordermanagement',
//       name: 'OrderManagement',
//       component: OrderManagement,
//       meta:{
//         keepalive:true
//       },
//       children:[
//             {
//               path: '/ordermanagement/checkorder',
//               name: 'CheckOrder',
//               component: CheckOrder,
//               meta:{
//                 keepalive:true
//               },
//             },
//             {
//               path: '/ordermanagement/revieworder',
//               name: 'ReviewOrder',
//               component: ReviewOrder,
//               meta:{
//                 keepalive:true
//               },
//             }
//
//         ]
//     }
            {
              path: '/ordermanagement/checkorder',
              name: 'CheckOrder',
              component: CheckOrder,
              meta:{
                keepalive:true
              },
            },
            {
              path: '/ordermanagement/revieworder',
              name: 'ReviewOrder',
              component: ReviewOrder,
              meta:{
                keepalive:true
              },
            }
        , {
          path: '/userset',
          name: 'UserSet',
          component: UserSet,
          meta:{
            keepalive:true
          }
        },




  ]
})
