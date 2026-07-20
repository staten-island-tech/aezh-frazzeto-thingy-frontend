<template>
    <div>
        <div class="sticky h-[7vh] bg-[#FFDF88] flex justify-between items-center px-[1%]">
            <h1 class="forum text-2xl">Website Name</h1>
            <div class="flex lg:w-[30%] w-[60%] justify-around">
                <button
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                    Catalog </button>
                <button
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                    Classes </button>
                <h2 class="forum text-2xl">username</h2>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>