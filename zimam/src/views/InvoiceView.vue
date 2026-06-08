<script setup>
import { useInvoiceStore } from '@/stores/useInvoiceStore';
import invoiceTable from '@/components/invoiceTable.vue';
import invoiceHeader from '@/components/invoiceHeader.vue';
const invoiceStore = useInvoiceStore();


const printDocument = () => {
    window.print();


};



</script>

<template>
    <div
        class="max-w-4xl mx-auto mt-10 bg-white p-10 rounded-lg shadow-xl print:shadow-none print:m-0 print:p-0 print:max-w-full">

        <invoiceHeader :invoiceId="invoiceStore?.currentInvoice?.id" @printDocument="printDocument" />

        <div class="mb-8 p-4 bg-gray-50 rounded-lg print:bg-transparent print:p-0">
            <p class="text-xl font-bold text-gray-700">
                الزبون
                <span class="text-blue-700 print:text-black">{{ invoiceStore?.customerName }}</span>
            </p>
        </div>

        <invoiceTable :data="invoiceStore?.currentInvoice" />

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