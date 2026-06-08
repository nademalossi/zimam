<script setup>
defineProps({
    link: {
        type: [String, Object],
        default: null // إذا لم يرسل الأب رابطاً، ستكون قيمته null ويفعل الـ v-else
    },
    disabled: Boolean
})

</script>


<template>
    <div class=" place-items-center flex-col flex ">
        <RouterLink v-if="link" :to="link">
            <button :disabled="disabled"
                class=" bg-gray-100 hover:bg-yellow-50 cursor-pointer text-2xl font-bold w-15 h-15 p-3 flex items-center justify-center rounded-full leading-none">
                <slot name="svg-img"></slot>
            </button>
        </RouterLink>
        <button :disabled="disabled" v-else @click.stop="$emit('click')" type="button"
            class=" bg-gray-100 hover:bg-yellow-50 cursor-pointer text-2xl font-bold w-15 h-15 p-3 flex items-center justify-center rounded-full leading-none">
            <slot name="svg-img"></slot>
        </button>

        <p>
            <slot></slot>
        </p>
    </div>
</template>