<template>
    <div
        class="bg-[#FFE9CC] h-[60%] rounded-2xl border-2 border-[#ffcbab] flex flex-col items-center justify-center w-[40%] p-[2%]">
        <div class="flex flex-col p-[3%] justify-center">
            <h6 class="md:text-xl forum text-lg text-black text-center"> Have a review due? </h6>
            <p class="forum md:text-sm text-xs text-black text-center"> Check out your classes. </p>
        </div>
        <button
            class="border-[#ffcbab] border-2 forum text-2xl bg-[#FAE6DA] px-[5%] transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[60%] text-black w-full rounded-full"
            @click="async () => { await navigateTo('/classes') }">
            View Classes </button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>