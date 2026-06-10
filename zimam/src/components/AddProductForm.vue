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
            <p v-if="errorProductName" class=" text-gray-700 font-bold  mb-5 pr-5 bg-red-400">الرجاء ادخال اسم السلعة
            </p>
            <label class=" w-1/5 font-bold" for="productname">اسم السلعة: </label>
            <input type="text" name="productname" id="productname" :value="productName"
                @input.prevent="emit('update:productName', $event.target.value)"
                class="mr-2 p-2 rounded focus:bg-gray-100 border w-4/5" placeholder="اسم السلعة...">

        </div>
        <div class="mb-3">
            <p v-if="errorPrice" class=" text-gray-700 font-bold  mb-5 pr-5 bg-red-400">الرجاء ادخال سعر السلعة
            </p>
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