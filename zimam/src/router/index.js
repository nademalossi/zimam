import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/productsView.vue"),
    },
    {
      path: "/edit-product/:id",
      name: "EditProducts",
      component: () => import("@/views/EditProduct.vue"),
    },
    {
      path: "/new-product",
      name: "newproducts",
      component: () => import("@/views/NewProduct.vue"),
    },
    {
      path: "/invoice",
      name: "invoice",
      component: () => import("@/views/InvoiceView.vue"),
    },
    {
      path: "/create-new-invoice",
      name: "create-new-invoice",
      component: () => import("@/views/CreateNewInvoice.vue"),
    },
    {
      path: "/archive",
      name: "archive",
      component: () => import("@/views/archiveView.vue"),
    },
    {
      path: "/view-archived-invoice/:id",
      name: "viewarchivedinvoice",
      component: () => import("@/views/ArchivedIInvoiceView.vue"),
    },
  ],
});

export default router;
