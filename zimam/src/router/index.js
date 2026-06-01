import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/mainPageView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/productsView.vue"),
    },
    {
      path: "/create-new-invoice",
      name: "create-new-invoice",
      component: () => import("@/views/CreateNewInvoice.vue"),
    },
  ],
});

export default router;
