import { defineStore } from "pinia";
import { ref, computed, toRaw } from "vue";
import axios from "axios";

export const useInvoiceStore = defineStore("invoiceStore", () => {
  const archive_URL = "http://localhost:4000/archive";
  const Invoice = ref(null);
  let productsList = ref([]);
  const isLoading = ref(false);
  let customerName = ref("");

  const lastInvoiceNumber = ref(1000);
  const currentInvoice = ref(null);
  function addSelectedProduct(data) {
    console.log("Hallo invoice Data:", data);
    productsList.value.push(data);
  }
  const removeProduct = (productId) => {
    productsList.value = productsList.value.filter(
      (item) => item.id !== productId,
    );
  };
  const grandTotal = computed(() => {
    // reduce تمر على كل منتج، تضرب سعره في كميته، وتراكم الناتج فوق المجموع السابق
    return productsList.value.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0); // الصفر هنا هو نقطة البداية للمجموع
  });

  const submitInvoiceToServer = async () => {
    isLoading.value = true;

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 2. محاكاة سلوك لارافيل في توليد رقم متسلسل آمن
    lastInvoiceNumber.value++;
    const invoiceId = `INV-${lastInvoiceNumber.value}`;

    // 3. تجهيز كائن الفاتورة النهائي كما سيعيده لك لارافيل تماماً
    const finalInvoiceData = {
      id: invoiceId,
      InvoiceNumber: invoiceId,
      archive: false,
      customer: customerName.value,
      items: [...productsList.value],
      total: grandTotal.value,
      date: new Date().toLocaleDateString("ar-EG"),
    };

    currentInvoice.value = finalInvoiceData;

    isLoading.value = false;
    return true;
  };
  const archive = async () => {
    try {
      currentInvoice.value.archive = true;

      const cleanData = toRaw(currentInvoice.value);

      const r = await axios.post(archive_URL, cleanData);
      customerName = "";
      productsList.value = [];
      currentInvoice = null;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    Invoice,
    currentInvoice,
    customerName,
    isLoading,
    productsList,
    grandTotal,
    archive,
    removeProduct,
    addSelectedProduct,
    submitInvoiceToServer,
  };
});
