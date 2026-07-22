<template>
    <div class="w-full rounded-2xl flex flex-col bg-[#FFE9CC] min-h-[55vh] lg:h-full border-2 border-[#ffcbab] p-[1%]">
        <div class="flex flex-row h-[20%] items-center justify-between px-[1%]">
            <h2 class="forum text-[1.8rem] text-black font-bold"> Interested in these?</h2>
            <button @click="async () => {await navigateTo('/catalog')}"
            class="forum text-2xl bg-[#FAE6DA] border-[#ffcbab] border-2  px-[5%] text-black rounded-full w-[40%]
            transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[70%]">
                    View Catalog </button>

        </div>
        <div class="carousel h-full rounded-2xl mt-[2%]">
            <div class="h-full bg-slate-200 border border-slate-300 min-w-[30%] p-[2%] carousel-item text-black" v-for="i in [0, 1, 2, 3, 4, 5, 6, 7]">
                sample book cover change this to an img tag when its time
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.scroll-container {
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none; 
}

.this-class-does-nothing { /* this class is so that the closing style tag does not show up as yellow :) */
    text-align: left
}
</style>