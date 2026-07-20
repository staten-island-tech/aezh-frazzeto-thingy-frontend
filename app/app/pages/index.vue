<template>
    <div class="bg-[#FEDBB3] h-screen p-[1%]">
        <div class="w-full h-[50%] flex justify-between p-[0.5%]">
            <div class="flex flex-col w-[50%] justify-center gap-2">
                <h3 class="text-[3rem] forum"> Welcome! What will you be doing today? </h3>
                <div class="flex flex-row bg-[#FFCCA7] h-[30%] rounded-2xl border-2 border-[#FF9D00] flex flex-row items-center justify-between px-[1%]">
                    <div class="flex flex-col p-[3%] justify-center">
                        <h6 class="text-xl forum"> Trying to get to work? </h6>
                        <p class="forum text-sm"> See your upcoming assignments. </p>
                    </div>
                    <button
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[60%]">
                    View Assignments </button>
                </div>
            </div>
            <index-featured-catalog></index-featured-catalog>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>