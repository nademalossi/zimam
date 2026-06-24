<script setup>
// 1. تعريف الأحداث (Emits) لكي يتواصل هذا المكون مع الصفحة الأب
const emit = defineEmits(['update:searchQuery', 'filterClick']);

// 2. استقبال قيمة البحث من الأب
defineProps({
    searchQuery: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <div class="flex flex-col sm:flex-row gap-3 w-full">

        <div class="flex-1 relative">
            <input type="text" :value="searchQuery" @input="emit('update:searchQuery', $event.target.value)"
                placeholder="ابحث باسم العميل أو رقم البيان..."
                class="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:bg-white transition-all shadow-sm" />
            <svg xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <button @click="emit('filterClick')"
            class="px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 flex items-center justify-center gap-2 transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            تصفية
        </button>

    </div>
</template>