import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useInvoiceStore = defineStore("invoiceStore", () => {
  const Invoice = ref(null);
  let productsList = ref([]);
  const isLoading = ref(false);
  let customerName = ref("ali");

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
  // 💡 الدالة السحرية التي تحاكي الـ Backend (Laravel) تماماً
  const submitInvoiceToServer = async () => {
    isLoading.value = true; // ابدأ التحميل (سيقفل الزر في الواجهة)

    // 1. محاكاة تأخير الشبكة (ثانية ونصف) لكي يشعر المستخدم بواقعية التطبيق
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 2. محاكاة سلوك لارافيل في توليد رقم متسلسل آمن
    lastInvoiceNumber.value++;
    const invoiceId = `INV-${lastInvoiceNumber.value}`;

    // 3. تجهيز كائن الفاتورة النهائي كما سيعيده لك لارافيل تماماً
    const finalInvoiceData = {
      id: invoiceId,
      customer: customerName,
      items: [...productsList.value],
      total: grandTotal.value,
      date: new Date().toLocaleDateString("ar-EG"),
    };

    // 4. حفظ النتيجة وتصفير سلة المشتريات لعميل جديد
    currentInvoice.value = finalInvoiceData;

    isLoading.value = false; // إنهاء التحميل
    return true; // إخبار الواجهة بنجاح العملية
  };

  return {
    Invoice,
    currentInvoice,
    customerName,
    isLoading,
    productsList,
    grandTotal,
    removeProduct,
    addSelectedProduct,
    submitInvoiceToServer,
  };
});
