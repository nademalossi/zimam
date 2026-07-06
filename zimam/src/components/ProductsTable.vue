<script setup>
defineProps({
    products: Object
})
</script>

<template>
    <div class="flex justify-center rounded-2xl w-full  max-w-7xl bg-gray-100  ">
        <table v-if="products.length > 0" class="max-h-1/4 overflow-y-scroll w-4/5 text-right">

            <thead class="border-b border-gray-200 text-gray-500">
                <tr>
                    <th class="py-4 px-2">الرقم</th>
                    <th class="py-4 px-2">السلعة</th>
                    <th class="py-4 px-2">السعر</th>
                    <slot name="Headers"></slot>
                    <th class="py-4 px-2 text-center">إعدادات</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(product, index) in products" :key="product.id"
                    class="border-b border-gray-100 hover:bg-gray-50 transition-colors">

                    <td class="py-4 px-2">{{ index + 1 }}</td>
                    <td class="py-4 px-2 font-medium">{{ product.name }}</td>
                    <td class="py-4 px-2 text-gray-600 font-bold">{{ product.price }} د.ع</td>
                    <slot name="items" :productQuantity="product.quantity"></slot>
                    <td class="py-4 px-2">
                        <div class="flex justify-evenly items-center gap-2">
                            <slot name="setting-btn" :productId="product.id" :productName="product.name"></slot>

                        </div>
                    </td>

                </tr>

            </tbody>
        </table>
        <div v-else
            class="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-gray-100 border-dashed w-full mt-4">

            <h3 class="text-lg font-bold text-gray-700">لا توجد أي سلع </h3>
            <p class="text-sm text-gray-400 mt-1">الرجاء اضافة سلع الى القائمة</p>
        </div>
    </div>
</template>