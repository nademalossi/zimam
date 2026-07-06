<script setup lang="ts">

import ProductsTable from '@/components/ProductsTable.vue';
import TheHeader from '@/components/TheHeader.vue';
import PopupModal from '@/components/PopupModal.vue';
import { useProductStore } from '@/stores/useProductStore';
import { ref, onMounted, Teleport } from 'vue';
import HeaderInfo from '@/components/HeaderInfo.vue';

const products = useProductStore();
const toggleModal = ref(false);
const trackerproductId = ref("");
const productName = ref("");

onMounted(() => {
    products.fetchProducts()

})
const setProductData = (id = "", newProductName = "") => {

    trackerproductId.value = id;
    productName.value = newProductName;

};
const toggleDeleteModal = (id = "", newProductName = "") => {
    setProductData(id, newProductName)
    toggleModal.value = !toggleModal.value;
}

const deleteById = (id: string) => {
    toggleDeleteModal()
    products.deleteProductById(id)
}
</script>

<template>

    <div class="flex flex-col items-center w-full min-h-screen bg-gray-50">

        <TheHeader />
        <HeaderInfo title="قائمة السلع" subtitle="إدارة المنتجات وتحديث أسعارها">
            <slot>
                <RouterLink to="/new-product"
                    class="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-green-600 transition-all shadow-sm hover:shadow-md">
                    <img src="@/assets/svg/addProduct.svg" alt="اضافة" class="w-5 h-5">
                    <span>إضافة سلعة جديدة</span>
                </RouterLink>
            </slot>
        </HeaderInfo>
        <div class="bg-white max-h-[60vh] border border-gray-100 shadow-sm rounded-xl overflow-y-auto">

            <div class="flex w-full items-center justify-center min-w-[900px]">
                <ProductsTable :products="products.products">
                    <template #setting-btn="{ productId, productName }">
                        <div class="flex items-center justify-center gap-2">

                            <RouterLink :to="`/edit-product/${productId}`"
                                class="p-2 rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                title="تعديل السلعة">
                                <img src="@/assets/svg/edit.svg" alt="تعديل"
                                    class="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
                            </RouterLink>

                            <button @click="toggleDeleteModal(productId, productName)"
                                class="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                title="حذف السلعة">
                                <img src="@/assets/svg/delete-btn.svg" alt="حذف"
                                    class="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
                            </button>

                        </div>
                    </template>
                </ProductsTable>
            </div>


        </div>
    </div>
    <Teleport to="body">
        <PopupModal :showingModal="toggleModal" @closeModal="toggleModal = false">
            <template #header>
                هل تريد فعلا حذف سلعة:
            </template>
            <template #default>
                <p class=" font-bold"> {{ productName }}</p>
            </template>
            <template #footer>
                <button
                    class=" font-bold text-gray-100  bg-red-700 hover:bg-red-800 rounded-md cursor-pointer px-2  py-1 ml-5"
                    @click="deleteById(trackerproductId);">حذف</button>
                <button
                    class="font-bold text-gray-100  bg-green-600 hover:bg-green-700 rounded-md cursor-pointer px-2  py-1 p-2 ml-5"
                    @click="toggleModal = false">إلغاء</button>
            </template>
        </PopupModal>
    </Teleport>

</template>