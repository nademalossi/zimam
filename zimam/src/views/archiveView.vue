<script setup>

import SearchBar from '@/components/SearchBar.vue';
import InvoiceCard from '@/components/InvoiceCard.vue';
import { onMounted, ref } from 'vue';
import { useArchiveStore } from '@/stores/useArchiveStore';
import router from '@/router';
import TheHeader from '@/components/ TheHeader.vue';
import HeaderInfo from '@/components/HeaderInfo.vue';

const archive = useArchiveStore()

const searchText = ref('');


const openFilterModal = () => {
    console.log("تم النقر على زر التصفية! " + searchText.value);
};
onMounted(async () => {
    await archive.fetchArchivedData()
    console.log(archive.archivedData[0])

})

const showArchivedData = (id) => {
    router.push("/view-archived-invoice/" + id)
}


</script>
<template>
    <div class="flex flex-col items-center w-full min-h-screen bg-gray-50 pb-10">

        <TheHeader />

        <main class="w-full max-w-5xl px-4 mt-10 flex flex-col gap-8">

            <div class="flex justify-start w-full">
                <HeaderInfo title="أرشيف البيانات القديمة" subtitle="مراجعة وإدارة الفواتير المؤرشفة والمغلقة سابقاً" />
            </div>

            <SearchBar v-model:searchQuery="searchText" @filterClick="openFilterModal" />

            <section class="w-full flex flex-col gap-3">
                <InvoiceCard :archivedData="archive.archivedData" @goToInvoicePreview="showArchivedData" />
            </section>

        </main>
    </div>
</template>