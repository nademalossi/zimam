import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);

  const fetchProducts = async () => {
    try {
      const r = await fetch("http://localhost:3000/products");
      products.value = await r.json();
    } catch (error) {
      console.error("حدث خطأ في جلب البيانات", error);
    }
  };
  return {
    products,
    fetchProducts,
    // addProduct,
  };
});
