<script setup>
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
    <div class="min-h-screen bg-[rgb(242,190,48)] flex flex-col items-center justify-center p-5">

        <div class="w-full max-w-4xl">

            <div class="mb-12 text-center">
                <h1 class="font-bold text-5xl mb-4 text-primary">زِمَام</h1>
                <p class="text-gray-700 text-2xl">منصتك الرقمية لإنشاء بيان الحساب</p>
            </div>

            <div class="flex flex-col md:flex-row justify-evenly items-center w-full gap-8">
                <BaseButton link="products" text="اضافة وتعديل السلع">
                    <img src="@/assets/svg/products.svg" alt="أيقونة المنتجات">
                </BaseButton>

                <BaseButton link="create-new-invoice" text="انشاء بيان">
                    <img src="@/assets/svg/add.svg" alt="أيقونة انشاء بيان">
                </BaseButton>

                <BaseButton link="archive" text="السجل">
                    <img src="@/assets/svg/archive.svg" alt="أيقونة السجل">
                </BaseButton>
            </div>
        </div>
    </div>
</template>