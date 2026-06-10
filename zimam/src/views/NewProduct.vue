<script setup>
import Pagesheader from '@/components/pagesheader.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import Basebutton from '@/components/Basebutton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref(null)
let errorProductName = ref(false)
let errorPrice = ref(false)
function validation() {
    if (productName.value === "" && productPrice.value === null) {
        errorPrice.value = true;
        errorProductName.value = true;

        return
    }
    if (productName.value === "") {
        errorProductName.value = true;
        return
    }
    if (productPrice.value === null) {
        errorPrice.value = true;
        return
    }
    if (productPrice.value <= 0 || typeof (productPrice.value) != "number") {



        console.log((productPrice.value > 0))
        console.log(typeof (productPrice.value))

        console.log(productPrice.value + "    الرجاء ادخال قيمة صحيحة")
        return
    }
    post()

}
async function post() {

    await useProduct.addProduct({ "name": productName.value, "price": productPrice.value },)
    router.push('/products')
}

</script>


<template>
    <Pagesheader>
        <template #default>
            <Basebutton link="products">
                <template #svg-img>
                    <img src="@/assets/svg/products.svg" alt="" srcset="">
                </template>
                <template #default>
                    السلع
                </template>
            </Basebutton>

        </template>
    </Pagesheader>

    <div class="mt-30  grid place-items-center">
        <AddProductForm v-model:errorProductName="errorProductName" v-model:errorPrice="errorPrice"
            @sendData="validation" buttonName="اضافة السلعة" v-model:productName="productName"
            v-model:productPrice="productPrice" />
    </div>
</template>