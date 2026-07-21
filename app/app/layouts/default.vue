<template>
    <div>
        <div class="sticky h-[7vh] bg-[#FFDF88] flex justify-between items-center px-[1%]">
            <h1 class="forum text-2xl hover:underline font-bold text-black" @click="async () => {await navigateTo('/')}">SITHS Book Review</h1>
            <div class="flex lg:w-[40%] w-[70%] justify-around">
                <button @click="async () => {await navigateTo('/catalog')}"
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] text-black">
                    Catalog </button>
                <button @click="async () => {await navigateTo('/classes')}"
                    class="text-black forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                    Classes </button>
                <h2 class="forum text-2xl hover:underline text-black" @click="async () => {await navigateTo('/settings')}">
                    username
                </h2>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
