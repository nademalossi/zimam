<script setup>

import ProductForm from '@/components/ProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import HeaderInfo from '@/components/HeaderInfo.vue';
import { useValidation } from '@/composables/useValidation';

const route = useRoute()
const router = useRouter();
const productId = route.params.id;
const useProduct = useProductStore()
const productName = ref('')
const productPrice = ref(null)

const { errorProductName, errorPrice, validateProduct } = useValidation();

const onSubmit = () => {

    const isValid = validateProduct(productName.value, productPrice.value);

    if (isValid) {
        update();
    } else {
        console.log("يوجد خطأ في المدخلات، لن يتم الحفظ.");
    }
};
onMounted(async () => {
    await useProduct.fetchSingleProduct(productId);
    productName.value = useProduct.productNameById
    productPrice.value = useProduct.productPriceById

})

async function update() {

    await useProduct.updateSingleProduct(productId, { "name": productName.value, "price": productPrice.value })
    router.push('/products');
}

</script>
<template>
    <TheHeader />
    <div class="flex justify-center">
        <HeaderInfo class="justify-center items-center max-w-4xl" title="تعديل السلعة"
            subtitle="تغيير إسم السلعة وسعرها" />
    </div>

    <div class="  grid place-items-center">
        <ProductForm @sendData="onSubmit" v-model:errorProductName="errorProductName" v-model:errorPrice="errorPrice"
            v-model:productName="productName" buttonName="تعديل السلعة" v-model:productPrice="productPrice" />
    </div>

</template>