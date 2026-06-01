<script setup>
defineProps({
    link: String
})

</script>


<template>
    <div class=" place-items-center ">
        <RouterLink :to="'/' + link">
            <button
                class=" bg-gray-100 hover:bg-gray-200 cursor-pointer text-2xl font-bold w-15 h-15 p-3 flex items-center justify-center rounded-full leading-none">
                <slot name="svg-img"></slot>
            </button>
        </RouterLink>

        <p>

            <slot></slot>
        </p>
    </div>
</template>