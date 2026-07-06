<script setup>
import InvoiceTable from '@/components/InvoiceTable.vue';
import InvoiceHeader from '@/components/InvoiceHeader.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useArchiveStore } from '@/stores/useArchiveStore';
import TheHeader from '@/components/TheHeader.vue';


let archive = useArchiveStore()

const route = useRoute();

onMounted(() => {
    const currentInvoiceId = route.params.id;
    archive.fetchInvoiceById(currentInvoiceId)
});
const printDocument = () => {
    window.print();
};


</script>

<template>
    <TheHeader />
    <div
        class="max-w-4xl mx-auto mt-10 bg-white p-10 rounded-lg shadow-xl print:shadow-none print:m-0 print:p-0 print:max-w-full">
        <InvoiceHeader :archive="true" @printDocument="printDocument"
            :invoiceId="archive?.currentInvoice?.InvoiceNumber" />
        <div class="mb-8 p-4 bg-gray-50 rounded-lg print:bg-transparent print:p-0">
            <p class="text-xl font-bold text-gray-700">
                الزبون
                <span class="text-blue-700 print:text-black">{{ archive?.currentInvoice?.customer }}</span>
            </p>
        </div>

        <InvoiceTable :data="archive?.currentInvoice?.items" />

        <div class="flex justify-end mt-10">
            <div
                class="bg-gray-100 p-6 rounded-lg border border-gray-300 w-1/2 print:w-2/3 print:border-2 print:border-gray-800 print:bg-transparent">
                <div class="flex justify-between text-2xl font-black">
                    <span>المجموع الكلي:</span>
                    <span class="text-green-600 print:text-black">{{ archive?.currentInvoice?.total }} دينار</span>
                </div>
            </div>
        </div>

    </div>
</template>