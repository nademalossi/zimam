<script setup>
import { computed } from 'vue';
import Basebutton from './Basebutton.vue';
import ErrorMessage from './ErrorMessage.vue';
const props = defineProps({
    products: Object,
    errorCustomerName: {
        type: Boolean,
        default: false
    },
    errorProductName: {
        type: Boolean,
        default: false
    },
    errorProductQuantitye: {
        type: Boolean,
        default: false
    },
    buttonName: String,
    customerName: String,
    productQuantity: Number,
    selectedProduct: Object
})
// const productQuantity = defineModel('productQuantity');
const emit = defineEmits(['update:customerName', 'update:selectedProduct', 'update:productQuantity', 'sendData'])
const internalSelectedProduct = computed({
    get: () => props.selectedProduct,
    set: (newValue) => emit('update:selectedProduct', newValue)
});
</script>
<template>
    <form class="flex flex-col w-full gap-6">

        <div class="flex items-center bg-blue-50/50 p-4 rounded-lg border border-blue-100">

            <label class="w-1/5 font-bold text-blue-900" for="customerName">اسم العميل:</label>
            <input type="text" name="customerName" id="customerName" :value="customerName"
                @input="emit('update:customerName', $event.target.value)"
                class="p-2 bg-white rounded border border-blue-200 w-4/5 focus:outline-blue-500 transition-colors shadow-sm"
                placeholder="اكتب اسم العميل هنا...">
        </div>
        <ErrorMessage message="الرجاء إدخال اسم العميل." :taggle="errorCustomerName" />

        <hr class="border-gray-100">

        <div class="flex items-center">
            <label class="w-1/5 font-bold text-gray-700" for="productSelect">اسم المنتج:</label>
            <select v-model="internalSelectedProduct" id="productSelect"
                class="w-4/5 p-2 border border-gray-300 rounded focus:outline-blue-500 bg-white shadow-sm">
                <option value="" disabled selected>-- اختر السلعة --</option>
                <option v-for="product in products" :key="product.id" :value="product">
                    {{ product.name }}
                </option>
            </select>
        </div>
        <ErrorMessage message="الرجاء ادخال اسم السلعة" :taggle="errorProductName" />
        <div class="flex items-center">

            <label class="w-1/5 font-bold text-gray-700" for="productQuantity">الكمية (العدد):</label>
            <input type="number" name="productQuantity" id="productQuantity" :value="productQuantity"
                @input="emit('update:productQuantity', Number($event.target.value))"
                class="p-2 border border-gray-300 rounded focus:outline-blue-500 w-4/5 shadow-sm"
                placeholder="أدخل العدد...">
        </div>
        <ErrorMessage message="الرجاء ادخال كمية السلعة" :taggle="errorProductQuantitye" />
        <div class="flex justify-end mt-2">
            <Basebutton @click="emit('sendData')">
                <template #svg-img>
                    <img src="@/assets/svg/addProduct.svg" alt="إضافة">
                </template>
                <template #default>{{ buttonName }}</template>
            </Basebutton>
        </div>
    </form>
</template>