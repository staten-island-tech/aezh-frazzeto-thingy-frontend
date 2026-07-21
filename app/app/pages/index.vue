<template>
    <div class="bg-[#FEDBB3] h-screen p-[1%] flex flex-col gap-6">
        <div class="w-full h-[65%] flex justify-between p-[0.5%] gap-2">
            <div class="flex flex-col w-[50%] justify-center gap-2">
                <h3 class="text-[3rem] forum font-bold text-black"> Welcome! What will you be doing today? </h3>
                <index-view-classes></index-view-classes>
            </div>
            <index-featured-catalog></index-featured-catalog>
        </div>
        <index-footer-feature></index-footer-feature>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>