<template>
    <div class="bg-[#FEDBB3] h-screen p-[1%] flex flex-col gap-6">
        <div class="w-full h-[65%] flex justify-between p-[0.5%] gap-2">
            <div class="flex flex-col w-[50%] justify-center gap-2">
                <h3 class="text-[3rem] forum"> Welcome! What will you be doing today? </h3>
                <div class="flex flex-row bg-[#FFCCA7] h-[30%] rounded-2xl border-2 border-[#FF9D00] flex flex-row items-center justify-between px-[1%]">
                    <div class="flex flex-col p-[3%] justify-center">
                        <h6 class="md:text-xl forum text-lg"> Trying to get to work? </h6>
                        <p class="forum md:text-sm text-xs"> See your upcoming assignments. </p>
                    </div>
                    <button 
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[60%]" @click="async () => {await navigateTo('/classes')}">
                    View Classes </button>
                </div>
            </div>
            <index-featured-catalog></index-featured-catalog>
        </div>
        <div class="flex flex-row bg-[#FFCCA7] h-[20%] rounded-2xl border-2 border-[#FF9D00] flex flex-col mt-[1%] p-[1%] justify-between">
            <div v-for="opacity in ['100%', '80%', '60%', '40%', '20%']" :class="`bg-[#D9D9D9]/[${opacity}]`" class="w-full h-[16%] rounded-full">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const acceptedClasses:string[] = [`bg-[#D9D9D9]/[100%]`, `bg-[#D9D9D9]/[80%]`, `bg-[#D9D9D9]/[60%]`, `bg-[#D9D9D9]/[40%]`, `bg-[#D9D9D9]/[20%]`]
</script>

<style scoped>

</style>