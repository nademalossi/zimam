<script setup>

import ProductForm from '@/components/ProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import TheHeader from '@/components/ TheHeader.vue';
import HeaderInfo from '@/components/HeaderInfo.vue';

const route = useRoute()
const router = useRouter();
const productId = route.params.id;
const useProduct = useProductStore()
const productName = ref('')
const productPrice = ref(null)
const errorProductName = ref(false)
const errorPrice = ref(false)

onMounted(async () => {
    await useProduct.fetchSingleProduct(productId);
    productName.value = useProduct.productNameById
    productPrice.value = useProduct.productPriceById

})

const validation = () => {
    if (productName.value === "" && productPrice.value === null) {
        errorPrice.value = true;
        errorProductName.value = true;

        return
    }
    if (productName.value === "") {
        errorProductName.value = true;
        return
    }
    if (productPrice.value === null || productPrice.value === 0) {
        errorPrice.value = true;
        return
    }
    if (productPrice.value <= 0 || typeof (productPrice.value) != "number") {



        console.log((productPrice.value > 0))
        console.log(typeof (productPrice.value))

        console.log(productPrice.value + "    الرجاء ادخال قيمة صحيحة")
        return
    }
    update()

}

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
        <ProductForm @sendData="validation" v-model:errorProductName="errorProductName" v-model:errorPrice="errorPrice"
            v-model:productName="productName" buttonName="تعديل السلعة" v-model:productPrice="productPrice" />
    </div>

</template>