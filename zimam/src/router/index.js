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
      component: () => import("@/views/ProductsView.vue"),
    },
    {
      path: "/edit-product/:id",
      name: "edit-product",
      component: () => import("@/views/EditProduct.vue"),
    },
    {
      path: "/new-product",
      name: "new-product",
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
      name: "view-archived-invoice",
      component: () => import("@/views/ArchivedInvoiceView.vue"),
    },
  ],
});

export default router;
