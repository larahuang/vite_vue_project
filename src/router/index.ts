import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/index.vue'),
    },
    //**404頁面
    {
        path: '/:catchAll(.*)',
        name: '404',
        //views資料夾內必須要有errorPage/404.vue
        component: () => import('../views/errorPage/404.vue'),
    meta: {
      title: '404'
    },
   
  }
]
// RouterOptions是路由選項類型
const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}
// Router是路由對象類型
const router: Router = createRouter(options);
export default router
