<script setup lang="ts">
import Basebutton from '@/components/Basebutton.vue';
import ProductsTabel from '@/components/ProductsTabel.vue';
import pagesheader from '@/components/pagesheader.vue';

import { useProductStore } from '@/stores/useProductStore';
import { ref, onMounted } from 'vue'

let products = useProductStore();
// تشغيل دالة الجلب تلقائياً بمجرد تحميل المكون في المتصفح
onMounted(() => {
    products.fetchProducts()

})
function deleteById(id: string) {
    products.deleteProductById(id)
}
</script>

<template>

    <pagesheader>
        <template #default>
            <Basebutton link="new-product">
                <template #svg-img>
                    <img src="@/assets/svg/addProduct.svg" alt="" srcset="">
                </template>
                <template #default>
                    اضافة سلعة جديدة
                </template>
            </Basebutton>
        </template>
    </pagesheader>

    <ProductsTabel :products="products.products">
        <template #setting-btn="{ productId }">
            <Basebutton :link="/edit-product/ + productId">
                <template #svg-img>
                    <img src="@/assets/svg/edit.svg" alt="">
                </template>
            </Basebutton>

            <Basebutton @click="deleteById(productId)">
                <template #svg-img>
                    <img src="@/assets/svg/delete-btn.svg" alt="">
                </template>
            </Basebutton>
        </template>
    </ProductsTabel>


</template>