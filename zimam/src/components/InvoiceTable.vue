<script setup>
defineProps({
    data: Object
})

</script>

<template>
    <table class="w-full text-right mb-10">
        <thead class="bg-gray-800 text-white print:bg-gray-200 print:text-black">
            <tr>
                <th class="p-3 border print:border-gray-800">السلعة</th>
                <th class="p-3 border print:border-gray-800">الكمية</th>
                <th class="p-3 border print:border-gray-800">السعر الإفرادي</th>
                <th class="p-3 border print:border-gray-800">الإجمالي للقطعة</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id" class="border-b border-gray-200 print:border-gray-800">
                <td class="p-3 border-x print:border-gray-800">{{ item.name }}</td>
                <td class="p-3 border-x print:border-gray-800 font-bold">{{ item.quantity }}</td>
                <td class="p-3 border-x print:border-gray-800">{{ item.price }} دينار</td>
                <td class="p-3 border-x print:border-gray-800 font-bold text-blue-600 print:text-black">
                    {{ item.price * item.quantity }} دينار
                </td>
            </tr>
        </tbody>
    </table>
</template>