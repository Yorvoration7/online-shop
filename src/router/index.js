import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue"
import ProductInfo from '@/pages/ProductInfo.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home ,
    },
    {
      name: "products",
      path: "/products/:id",
      // component: () => import('@/pages/ProductInfo.vue'),
      component: ProductInfo,
      params:true,
    },

  ],
});

export default router