<script setup>
import Basebutton from '@/components/Basebutton.vue';

</script>

<template>
    <div class=" main-page">
        <div>
            <h1 class=" text-right font-bold text-5xl  m-5">زِمَام</h1>
            <p class="text-gray-700 text-2xl ">منصتك الرقمية لإنشاء بيان الحساب</p>
        </div>
        <div class=" justify-evenly flex  w-full">
            <Basebutton link="products">
                <template #svg-img>
                    <img src="@/assets/svg/products.svg" alt="" srcset="">
                </template>
                <template #default>
                    اضافة سلع
                </template>
            </Basebutton>
            <Basebutton link="create-new-invoice">
                <template #svg-img>
                    <img src="@/assets/svg/add.svg" alt="" srcset="">
                </template>
                <template #default>
                    إنشاء بيان
                </template>
            </Basebutton>
        </div>

    </div>

</template>


<style>
.main-page {
    height: 100vh;
    inset: 0;
    background-color: rgb(242, 190, 48);
    display: grid;
    place-items: center;
}
</style>