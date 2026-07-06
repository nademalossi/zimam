<script setup>
import { computed, ref } from 'vue';
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
    errorProductQuantity: {
        type: Boolean,
        default: false
    },
    buttonName: String,
    customerName: String,
    productQuantity: Number,
    selectedProduct: Object
})
const emit = defineEmits(['update:customerName', 'update:selectedProduct', 'update:productQuantity', 'sendData'])
const internalSelectedProduct = computed({
    get: () => props.selectedProduct,
    set: (newValue) => emit('update:selectedProduct', newValue)
});
const isDropdownOpen = ref(false);

const selectProduct = (product) => {
    internalSelectedProduct.value = product;
    isDropdownOpen.value = false;
};
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
        <ErrorMessage message="الرجاء إدخال اسم العميل." :toggle="errorCustomerName" />

        <hr class="border-gray-100">
        <div class="flex items-center relative">
            <label class="w-1/5 font-bold text-gray-700">اسم المنتج:</label>

            <div class="w-4/5 relative">

                <button type="button" @click="isDropdownOpen = !isDropdownOpen"
                    class="w-full flex justify-between items-center p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white shadow-sm text-right transition-all">
                    <span :class="internalSelectedProduct ? 'text-gray-900' : 'text-gray-400'">
                        {{ internalSelectedProduct ? internalSelectedProduct.name : '-- اختر السلعة --' }}
                    </span>

                    <svg class="w-5 h-5 text-gray-400 transition-transform duration-200"
                        :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                <ul v-if="isDropdownOpen"
                    class="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                    <li v-for="product in products" :key="product.id" @click="selectProduct(product)"
                        class="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0 text-gray-700 text-sm font-medium">
                        {{ product.name }}
                    </li>
                </ul>

            </div>
        </div>

        <ErrorMessage message="الرجاء ادخال اسم السلعة" :toggle="errorProductName" />
        <div class="flex items-center">

            <label class="w-1/5 font-bold text-gray-700" for="productQuantity">الكمية (العدد):</label>
            <input type="number" name="productQuantity" id="productQuantity" :value="productQuantity"
                @input="emit('update:productQuantity', Number($event.target.value))"
                class="p-2 border border-gray-300 rounded focus:outline-blue-500 w-4/5 shadow-sm"
                placeholder="أدخل العدد...">
        </div>
        <ErrorMessage message="الرجاء ادخال كمية السلعة" :toggle="errorProductQuantity" />
        <div class="flex justify-center mt-2">
            <button @click="emit('sendData')" type="button"
                class="flex items-center justify-center gap-2 w-full cursor-pointer py-3.5 bg-gray-900 text-white rounded-xl font-medium text-lg hover:bg-gray-800 transition-colors shadow-sm active:scale-[0.98]">
                <img src="@/assets/svg/addProduct.svg" class="w-5 h-5 invert" alt="إضافة">

                <span>{{ buttonName }}</span>
            </button>
        </div>
    </form>
</template>