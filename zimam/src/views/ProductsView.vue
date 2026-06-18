<script setup lang="ts">
import Basebutton from '@/components/Basebutton.vue';
import ProductsTabel from '@/components/ProductsTabel.vue';
import TheHeader from '@/components/ TheHeader.vue';
import popupModel from '@/components/popupModel.vue';
import { useProductStore } from '@/stores/useProductStore';
import { ref, onMounted, Teleport } from 'vue';

let products = useProductStore();
let toggleModal = ref(false);
let trackerproductId = ref("");
onMounted(() => {
    products.fetchProducts()

})
function setProductId(id) {
    if (!toggleModal.value) {
        trackerproductId.value = id
        console.log(trackerproductId.value)
    } else {
        trackerproductId.value = ""
        console.log(trackerproductId.value)
    }

}
function toggleDeleteModal(id) {
    setProductId(id)
    toggleModal.value = !toggleModal.value;
}

function deleteById(id: string) {
    toggleModal.value = !toggleModal.value;
    products.deleteProductById(id)
}
</script>

<template>
    <div class="flex flex-col w-full min-h-screen">
        <TheHeader current-page="add-product" />
        <Teleport to="body">
            <popupModel :showingModal="toggleModal" @closeModal="toggleModal = false">
                <template #header>
                    هل تريد فعلا حذف سلعة:
                </template>
                <template #default>
                    <p>اسم السلعة المحذوفة</p>
                </template>
                <template #footer>
                    <button class="bg-red-500 hover:bg-red-600 rounded-md cursor-pointer p-1 ml-5"
                        @click="deleteById(trackerproductId);">حذف</button>
                    <button class="bg-green-500 hover:bg-green-600 rounded-md cursor-pointer p-1 ml-5"
                        @click="toggleModal = false">إلغاء</button>
                </template>
            </popupModel>
        </Teleport>
        <ProductsTabel :products="products.products">
            <template #setting-btn="{ productId }">
                <Basebutton :link="/edit-product/ + productId">
                    <template #svg-img>
                        <img src="@/assets/svg/edit.svg" alt="">
                    </template>
                </Basebutton>

                <Basebutton @click="toggleDeleteModal(productId)">
                    <template #svg-img>
                        <img src="@/assets/svg/delete-btn.svg" alt="">
                    </template>
                </Basebutton>
            </template>
        </ProductsTabel>

    </div>


</template>