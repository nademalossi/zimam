<script setup>
import Basebutton from '@/components/Basebutton.vue';
import InvoiceForm from '@/components/invoiceForm.vue';
import ProductsTabel from '@/components/ProductsTabel.vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/useProductStore';
import { useInvoiceStore } from '@/stores/useInvoiceStore';
import { ref, onMounted } from 'vue'
import ErrorMessage from '@/components/ErrorMessage.vue';
import TheHeader from '@/components/ TheHeader.vue';

let productQuantity = ref(null)
let selectedProduct = ref(null)
const router = useRouter()

let invoiceStore = useInvoiceStore();
let products = useProductStore();
let errorCustomerName = ref(false)
let errorProductName = ref(false)
let errorProductQuantitye = ref(false)
let errorProductsTable = ref(false)
onMounted(() => {
    products.fetchProducts()

})
const handleAddProduct = () => {
    errorProductName.value = false;
    errorProductQuantitye.value = false;
    let hasError = false;

    if (!selectedProduct.value) {
        errorProductName.value = true;
        hasError = true;
    }
    const quantity = Number(productQuantity.value);
    if (!productQuantity.value || isNaN(quantity) || quantity <= 0) {
        errorProductQuantitye.value = true;
        hasError = true;
    }

    if (hasError) {
        return;
    }

    prepareSelectedProductData()
};
function prepareSelectedProductData() {

    let data = {
        "id": selectedProduct.value.id,
        "name": selectedProduct.value.name,
        "price": selectedProduct.value.price,
        "quantity": productQuantity.value,
    }
    invoiceStore.addSelectedProduct(data);
    selectedProduct.value = null
    console.log(productQuantity.value)
    productQuantity.value = null
    console.log(productQuantity.value)


}
const prepareInvoiceData = async () => {
    errorCustomerName.value = false
    errorProductsTable = false
    let hasError = false;

    if (!customerName.value) {
        errorCustomerName.value = true
        hasError = true
    }
    if (invoiceStore.productsList.length <= 0) {
        errorProductsTable = true
        hasError = true
    }
    if (hasError) {
        return
    }
    const success = await invoiceStore.submitInvoiceToServer(customerName.value);

    if (success) {
        router.push('/invoice')
    }

}
</script>

<template>
    <TheHeader />
    <div class="grid place-items-center mt-10 mb-20 px-4">

        <div class="flex flex-col w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg border border-gray-100 gap-8">

            <div>
                <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">إنشاء بيان جديد</h2>
                <InvoiceForm @sendData="handleAddProduct" v-model:errorCustomerName="errorCustomerName"
                    v-model:errorProductName="errorProductName" v-model:errorProductQuantitye="errorProductQuantitye"
                    v-model:productQuantity="productQuantity" v-model:customerName="invoiceStore.customerName"
                    :products="products.products" v-model:selectedProduct="selectedProduct"
                    buttonName="إضافة إلى المشتريات" />
            </div>

            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 h-80 overflow-scroll max-h-2/4">
                <ErrorMessage message="الرجاء ادخال سلعة واحدة على الأقل" :taggle="errorProductsTable" />
                <ProductsTabel class="w-full bg-white rounded shadow-sm" :products="invoiceStore.productsList">
                    <template #Headers>
                        <th class="py-3 px-2">الكمية</th>
                    </template>
                    <template #items="{ productQuantity }">
                        <td class="py-3 px-2 font-bold text-blue-600">{{ productQuantity }}</td>
                    </template>
                    <template #setting-btn="{ productId }">
                        <Basebutton>
                            <template #svg-img>
                                <img src="@/assets/svg/edit.svg" alt="حذف">
                            </template>
                        </Basebutton>
                        <Basebutton @click="invoiceStore.removeProduct(productId)">
                            <template #svg-img>
                                <img src="@/assets/svg/delete-btn.svg" alt="حذف">
                            </template>
                        </Basebutton>
                    </template>
                </ProductsTabel>
            </div>

            <div class="flex justify-between items-center border-t border-gray-200 pt-6">
                <div class="text-xl">
                    <span class="font-bold text-gray-700">المجموع الكلي: </span>
                    <span class="font-bold text-green-600 text-2xl px-2">{{ invoiceStore.grandTotal }} دينار</span>
                </div>
                <button @click.prevent="prepareInvoiceData" :disabled="invoiceStore.isLoading"
                    class="bg-green-600 disabled:bg-gray-300 hover:bg-green-700 rounded-2xl p-3">
                    {{ invoiceStore.isLoading ? 'جاري الحفظ وتوليد الرقم...' : 'اعتماد وإنشاء الفاتورة' }}
                </button>


            </div>

        </div>
    </div>
</template>