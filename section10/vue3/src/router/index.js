import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildrenList from '../views/ChildrenList.vue'
import TeleportTest from '../views/TeleportTest.vue'
import CompositionTest from '../views/CompositionTest.vue'
import PropsEmit from '../views/PropsEmit.vue'
import FunctionTest from '../views/FunctionTest.vue'
import RouterTest from '../views/RouterTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/children',
    name: 'children',
    component: ChildrenList
  },
  {
    path: '/teleport',
    name: 'teleport',
    component: TeleportTest
  },
  {
    path: '/composition',
    name: 'composition',
    component: CompositionTest
  },
  {
    path: '/propsEmit',
    name: 'propsEmit',
    component: PropsEmit
  },
  {
    path: '/function',
    name: 'function',
    component: FunctionTest
  },
  {
    path: '/router',
    name: 'router',
    component: RouterTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
