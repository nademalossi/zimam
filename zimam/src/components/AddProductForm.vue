<script setup>
import Basebutton from './Basebutton.vue';
defineProps({
    errorProductName: {
        type: Boolean,
        default: false
    },
    errorPrice: {
        type: Boolean,
        default: false
    },
    productName: String,
    productPrice: Number,
    buttonName: String

})
const emit = defineEmits(['update:productName', 'update:productPrice', 'sendData'])

</script>

<template>
    <form class="flex flex-col border p-20 rounded-2xl w-full max-w-2xl ">
        <div class="mb-10">
            <div v-if="errorProductName"
                class="flex items-center gap-3 p-4 mb-5 text-red-700 bg-red-50 border border-red-200 rounded-xl shadow-sm"
                role="alert">

                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0 text-red-500" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>

                <p class="font-bold text-sm">الرجاء إدخال اسم السلعة.</p>

            </div>
            <label class=" w-1/5 font-bold" for="productname">اسم السلعة: </label>
            <input type="text" name="productname" id="productname" :value="productName"
                @input.prevent="emit('update:productName', $event.target.value)"
                class="mr-2 p-2 rounded focus:bg-gray-100 border w-4/5" placeholder="اسم السلعة...">

        </div>
        <div class="mb-3">

            <div v-if="errorPrice"
                class="flex items-center gap-3 p-4 mb-5 text-red-700 bg-red-50 border border-red-200 rounded-xl shadow-sm"
                role="alert">

                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0 text-red-500" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>

                <p class="font-bold text-sm">الرجاء إدخال اسم السلعة.</p>

            </div>
            <label class=" w-1/5 font-bold" for="productPrice">سعر السلعة: </label>
            <input type="Number" name="productname" id="productname" :value="Number(productPrice)"
                @input.prevent="emit('update:productPrice', Number($event.target.value))"
                class="mr-2 p-2 rounded focus:bg-gray-100 border w-4/5" placeholder="سعر السلعة...">
        </div>

        <div class=" place-items-start mt-10">
            <Basebutton @click="emit('sendData')">
                <template #svg-img>
                    <img src="@/assets/svg/addProduct.svg" alt="">
                </template>
                <template #default>{{ buttonName }}</template>
            </Basebutton>
        </div>

    </form>
</template>