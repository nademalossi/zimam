<script setup>

import AddProductForm from '@/components/AddProductForm.vue';
import Basebutton from '@/components/Basebutton.vue';
import { useProductStore } from '@/stores/useProductStore';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import TheHeader from '@/components/ TheHeader.vue';

const route = useRoute()
const router = useRouter();
const productId = route.params.id;
const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref(null)
let errorProductName = ref(false)
let errorPrice = ref(false)

onMounted(async () => {
    await useProduct.fetchSingleProduct(productId);
    productName.value = useProduct.productNameById
    productPrice.value = useProduct.productPriceById

})

function validation() {
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
    <div class="mt-30  grid place-items-center">
        <AddProductForm @sendData="validation" v-model:errorProductName="errorProductName"
            v-model:errorPrice="errorPrice" v-model:productName="productName" buttonName="تعديل السلعة"
            v-model:productPrice="productPrice" />
    </div>
</template>