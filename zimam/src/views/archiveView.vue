<script setup>

import SearchBar from '@/components/SearchBar.vue';
import InvoiceCard from '@/components/InvoiceCard.vue';
import { onMounted, ref, computed } from 'vue';
import { useArchiveStore } from '@/stores/useArchiveStore';
import router from '@/router';
import TheHeader from '@/components/TheHeader.vue';
import HeaderInfo from '@/components/HeaderInfo.vue';

const archive = useArchiveStore()

const searchText = ref('');

onMounted(async () => {
    await archive.fetchArchivedData()


})

const showArchivedData = (id) => {
    router.push("/view-archived-invoice/" + id)
}
const filterData = computed(() => {
    const query = searchText.value.trim().toLowerCase();

    if (!query) {
        return archive.archivedData;
    }

    return archive.archivedData.filter((invoice) => {
        const customerName = invoice.customer || "";
        const invoiceNum = invoice.InvoiceNumber || "";
        return (
            customerName.toLowerCase().includes(query) ||
            invoiceNum.toLowerCase().includes(query)
        );

    });
});

</script>
<template>
    <div class="flex flex-col items-center w-full min-h-screen bg-gray-50 pb-10">

        <TheHeader />

        <main class="w-full max-w-5xl px-4 mt-10 flex flex-col gap-8">

            <div class="flex justify-start w-full">
                <HeaderInfo title="أرشيف البيانات القديمة" subtitle="مراجعة وإدارة الفواتير المؤرشفة والمغلقة سابقاً" />
            </div>

            <SearchBar v-model:searchQuery="searchText" @filterClick="filterData" />

            <section v-if="filterData.length > 0" class="w-full flex flex-col gap-3">
                <InvoiceCard :archivedData="filterData" @goToInvoicePreview="showArchivedData" />
            </section>
            <div v-else
                class="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-gray-100 border-dashed w-full mt-4">

                <h3 class="text-lg font-bold text-gray-700">لا توجد أي بيانات </h3>
                <p v-if="searchText != ''" class="text-sm text-gray-400 mt-1">تأكد من كتابة اسم العميل أو رقم البيان
                    بشكل صحيح.</p>
            </div>

        </main>
    </div>
</template>