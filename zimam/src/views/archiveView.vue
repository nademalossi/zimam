<script setup>
import Basebutton from '@/components/Basebutton.vue';
import FilterItems from '@/components/FilterItems.vue';
import InvoiceCard from '@/components/InvoiceCard.vue';
import { onMounted } from 'vue';
import { useArchiveStore } from '@/stores/useArchiveStore';

let archive = useArchiveStore()

onMounted(async () => {
    await archive.fetchArchivedData()
    console.log(archive.archivedData[0])

})

const showArchivedData = (id) => {
    console.log(id)
}


</script>
<template>

    <div class="flex-1 bg-gray-50/50 p-6 overflow-y-auto">


        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h1 class="text-2xl font-black text-gray-950 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-amber-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    أرشيف البيانات القديمة
                </h1>
                <p class="text-sm text-gray-500 mt-1">مراجعة وإدارة الفواتير المؤرشفة والمغلقة سابقاً</p>
            </div>
            <div class=" flex  ">

                <Basebutton v-if="!home" link="/">
                    <template #svg-img>
                        <img src="@/assets/svg/home.svg" alt="" srcset="">
                    </template>
                    <template #default>
                        الصفحة الرئيسة
                    </template>
                </Basebutton>
                <slot></slot>
            </div>
        </div>

        <FilterItems />
        <InvoiceCard :archivedData="archive.archivedData" @goToInvoicePreview="showArchivedData" />
    </div>
</template>
