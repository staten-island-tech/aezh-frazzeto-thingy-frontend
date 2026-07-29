<template>
    <div
        class="bg-slate-200 h-[60%] rounded-2xl  flex flex-col items-center justify-center w-[40%] p-[2%] shadow-md">
        <div class="flex flex-col p-[3%] justify-center">
            <h6 class="md:text-xl forum text-lg text-black text-center"> Have a review due? </h6>
            <p class="forum md:text-sm text-xs text-black text-center"> Check out your classes. </p>
        </div>
        <button
            class="shadow-sm forum text-2xl bg-white px-[5%] transition-all duration-300 ease-in-out hover:bg-sky-100 hover:translate-y-[-2%] active:translate-y-[2%] h-[60%] text-black w-full rounded-full"
            @click="async () => { await navigateTo('/classes') }">
            View Classes </button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>