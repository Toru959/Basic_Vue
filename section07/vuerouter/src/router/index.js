import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import ItemList from '../views/ItemList.vue'
import NotFound from '@/components/NotFound.vue'
import UserList from '@/views/UserList.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'
import HomeSub from '@/components/HomeSub.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: { // 名前付きview-route
      default: HomeView, // 名前なし
      sub: HomeSub // 名前あり
    }

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
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    // BookListから送られてきた各パラメータを受け取る
    props: route => ({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content
    })
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemList,
  },
  { // ネストされたルートの場合nameを書くとエラーがでる
    path: '/user',
    component: UserList,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'post',
        component: UserPost
      }
    ]

  },
  {
    path: '*',// 上記で設定していないパスだったら
    // redirect: '/', // homeにリダイレクト
    name: 'NotFound',
    component: NotFound, // 404ページを表示する
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
