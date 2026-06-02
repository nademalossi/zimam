<script setup lang="ts">
import Basebutton from '@/components/Basebutton.vue';
import { ref, onMounted } from 'vue'

const products = ref([])

// 1. دالة الـ GET: لجلب المنتجات من السيرفر عند فتح الصفحة
const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/products')
        products.value = await response.json()
    } catch (error) {
        console.error("فشل جلب البيانات:", error)
    }
}

// تشغيل دالة الجلب تلقائياً بمجرد تحميل المكون في المتصفح
onMounted(() => {
    fetchProducts()
})
</script>

<template>
    <div class="flex justify-evenly mt-10">
        <Basebutton>
            <template #svg-img>
                <img src="@/assets/svg/product.svg" alt="" srcset="">
            </template>
            <template #default>
                سلعة جديدة
            </template>
        </Basebutton>

        <Basebutton link="/">
            <template #svg-img>
                <img src="@/assets/svg/home.svg" alt="" srcset="">
            </template>
        </Basebutton>
    </div>
    <div class=" place-items-center mt-20 grid ">
        <table class=" border-spacing-y-5 border-separate w-4/5 border-collapse ">
            <thead class=" text-right border-b p-2 border-gray-200">
                <tr>
                    <th>تعديل</th>
                    <th>السعر</th>
                    <th>السلعة</th>
                    <th>#</th>

                </tr>
            </thead>
            <tbody>
                <tr class="  text-right " v-for="product in products" :key="product.id">

                    <td>edit</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.id }}</td>
                </tr>

            </tbody>
        </table>
    </div>


</template>