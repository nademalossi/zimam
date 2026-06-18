<script setup>
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <header class="w-full max-w-6xl mx-auto flex items-center justify-between p-4 bg-transparent relative z-50 ">

        <RouterLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <h1 class="font-bold text-2xl text-primary">زِمام</h1>
            <img class="w-12 h-12" src="@/assets/svg/logo.svg" alt="شعار منصة زمام">
        </RouterLink>

        <button @click="toggleMenu" class="md:hidden p-2 text-gray-800 focus:outline-none"
            aria-label="القائمة الرئيسية">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                </path>
            </svg>
        </button>

        <nav :class="isMenuOpen ? 'flex' : 'hidden'"
            class="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md md:shadow-none md:bg-transparent md:static md:w-auto md:flex flex-col md:flex-row items-center gap-4 p-5 md:p-0 transition-all">
            <RouterLink v-if="route.name !== 'home'" to="/"
                class="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                <img class="w-5 h-5" src="@/assets/svg/home.svg" alt="الرئيسية">
                <span>الرئيسية</span>
            </RouterLink>
            <RouterLink v-if="route.name !== 'archive'" to="/archive"
                class="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                <img class="w-5 h-5" src="@/assets/svg/archive.svg" alt="ايقونة الارشيف">
                <span>السجل</span>
            </RouterLink>
            <RouterLink v-if="route.name !== 'products'" to="/products"
                class="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                <img class="w-5 h-5" src="@/assets/svg/add.svg" alt="ايقونة اضافة منتج">
                <span>اضافة منتجات</span>
            </RouterLink>
            <RouterLink v-if="route.name !== 'create-new-invoice'" to="/create-new-invoice"
                class="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                <img src="@/assets/svg/products.svg" class="w-5 h-5" alt="ايقونى اتنشاء بيان">
                <span>انشاء بيان</span>
            </RouterLink>
        </nav>

    </header>
</template>