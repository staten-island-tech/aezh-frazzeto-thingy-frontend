<template>
    <div class="bg-[#FEDBB3] min-h-screen flex flex-row gap-6 w-full">
        <div class="bg-[#FFE9CC] border-r-2 border-r-[#ffcbab] h-full p-[1%] w-[30%]">
            <h2 class="text-2xl forum"> Your Classes </h2>
            <classes-class-button v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
            @click=""
            ></classes-class-button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>