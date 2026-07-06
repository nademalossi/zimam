<script setup>
import { useRouter } from 'vue-router';
const emit = defineEmits(['printDocument'])
defineProps({
    invoiceId: String,
    archive: Boolean
})
const router = useRouter();

// توليد تاريخ اليوم برمجياً لتسجيله في الفاتورة
const currentDate = new Date().toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});


</script>


<template>
    <div class="flex justify-end gap-4 mb-10 print:hidden">
        <button @click.prevent="router.back()"
            class="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-bold">
            العودة
        </button>
        <button v-if="!archive" @click="$emit('archiveInvoice')"
            class="px-6 py-2 text-gray-200 bg-green-700 rounded hover:bg-green-800 font-bold">
            حفظ البيان
        </button>
        <button @click="emit('printDocument')"
            class="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 font-bold flex items-center gap-2">
            🖨️ طباعة البيان
        </button>
    </div>

    <div class="flex justify-between items-center border-b-2 border-gray-800 pb-6 mb-8">

        <div class="text-right">
            <h2 class="text-2xl font-bold text-blue-600 print:text-black">متجر التقنية الحديثة</h2>
            <p class="text-gray-500">الشارع العام، المدينة</p>
            <p class="text-gray-500">رقم ضريبي: 123456789</p>
        </div>
        <div>
            <h1 class="text-4xl font-black text-gray-800">بيان مبيعات</h1>
            <p class="text-gray-500 mt-2 font-bold">تاريخ الإصدار: <span class="text-gray-800">{{ currentDate
            }}</span></p>
            <p class="text-gray-500 mt-2 font-bold">رقم البيان: <span class="text-gray-800">{{ invoiceId
            }}</span></p>
        </div>

    </div>
</template>