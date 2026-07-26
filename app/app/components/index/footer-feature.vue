<template>
    <div
        class="bg-[#FFE9CC] h-[20%] rounded-2xl border-2 border-[#ffcbab] flex flex-col mt-[1%] p-[1%] justify-between">
        <div v-for="opacity in ['100%', '80%', '60%', '40%', '20%']" :class="`bg-[#D9D9D9]/[${opacity}]`"
            class="w-full h-[16%] rounded-full">

        </div>
    </div>
</template>

<script setup lang="ts">
const acceptedClasses: string[] = [`bg-[#D9D9D9]/[100%]`, `bg-[#D9D9D9]/[80%]`, `bg-[#D9D9D9]/[60%]`, `bg-[#D9D9D9]/[40%]`, `bg-[#D9D9D9]/[20%]`]
</script>

<style scoped></style>