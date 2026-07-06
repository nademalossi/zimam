<script setup>
import { useInvoiceStore } from '@/stores/useInvoiceStore';
import InvoiceTable from '@/components/InvoiceTable.vue';
import InvoiceHeader from '@/components/InvoiceHeader.vue';
import { toRaw } from 'vue';
import router from '@/router';
import { useArchiveStore } from '@/stores/useArchiveStore';
import TheHeader from '@/components/TheHeader.vue';
const invoiceStore = useInvoiceStore();
const archiveStore = useArchiveStore()


const printDocument = () => {
    window.print();
};
const archiveInvoice = () => {
    invoiceStore.currentInvoice.archive = true;
    const cleanData = toRaw(invoiceStore.currentInvoice)
    console.log(cleanData)
    archiveStore.archive(cleanData)
    invoiceStore.resetData()
    router.push('/archive')
}


</script>

<template>
    <TheHeader class=" print:hidden" />
    <div
        class="max-w-4xl mx-auto mt-10 bg-white p-10 rounded-lg shadow-xl print:shadow-none print:m-0 print:p-0 print:max-w-full">

        <InvoiceHeader @archiveInvoice="archiveInvoice" :archive="invoiceStore?.currentInvoice?.archive"
            :invoiceId="invoiceStore?.currentInvoice?.id" @printDocument="printDocument" />

        <div class="mb-8 p-4 bg-gray-50 rounded-lg print:bg-transparent print:p-0">
            <p class="text-xl font-bold text-gray-700">
                الزبون
                <span class="text-blue-700 print:text-black">{{ invoiceStore?.customerName }}</span>
            </p>
        </div>

        <InvoiceTable :data="invoiceStore?.currentInvoice?.items" />

        <div class="flex justify-end mt-10">
            <div
                class="bg-gray-100 p-6 rounded-lg border border-gray-300 w-1/2 print:w-2/3 print:border-2 print:border-gray-800 print:bg-transparent">
                <div class="flex justify-between text-2xl font-black">
                    <span>المجموع الكلي:</span>
                    <span class="text-green-600 print:text-black">{{ invoiceStore?.grandTotal }} دينار</span>
                </div>
            </div>
        </div>

        <div class="mt-20 flex justify-between px-10 print:mt-32">
            <div class="text-center">
                <p class="font-bold mb-8">توقيع المستلم</p>
                <p>.......................................</p>
            </div>
            <div class="text-center">
                <p class="font-bold mb-8">ختم المؤسسة</p>
                <p>.......................................</p>
            </div>
        </div>

    </div>
</template>