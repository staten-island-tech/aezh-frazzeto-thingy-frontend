<template>
    <div
        class="bg-[#FFE9CC] h-[30%] rounded-2xl border-2 border-[#ffcbab] flex flex-row items-center justify-between px-[1%]">
        <div class="flex flex-col p-[3%] justify-center">
            <h6 class="md:text-xl forum text-lg text-black"> Trying to get to work? </h6>
            <p class="forum md:text-sm text-xs text-black"> See your upcoming assignments. </p>
        </div>
        <button
            class="border-[#ffcbab] border-2 forum text-2xl bg-[#FAE6DA] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[60%] text-black"
            @click="async () => { await navigateTo('/classes') }">
            View Classes </button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>