<script setup>

defineProps({
    archivedData: Object
})


</script>

<template>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" for>

        <!-- 💡 بداية شريط البيان الذكي القابل للنقر -->
        <div v-for="data in archivedData" :key="data.id" @click="$emit('goToInvoicePreview', data.id)" class=" group bg-white border border-gray-200/80 rounded-xl p-4 shadow-sm hover:shadow-md
            hover:border-amber-300 hover:bg-amber-50/30 transition-all duration-200 cursor-pointer flex justify-between
            items-center">

            <!-- القسم الأيمن: أيقونة، اسم العميل، ورقم البيان -->
            <div class="flex items-center gap-4">
                <div
                    class="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-amber-100 text-gray-400 group-hover:text-amber-600 flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>

                <div>
                    <h3 class="text-sm font-black text-gray-900">{{ data.customer }}</h3>
                    <span class="block text-xs font-mono text-gray-500 mt-0.5">{{ data.InvoiceNumber }}</span>
                </div>
            </div>

            <!-- القسم الأيسر: التاريخ وسهم الانتقال -->
            <div class="flex items-center gap-5">
                <span class="text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">{{ data.date }}</span>


                <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-300 group-hover:text-amber-500 rtl:rotate-180 transition-colors"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>

        </div>
        <!-- 💡 نهاية شريط البيان -->
    </div>
</template>