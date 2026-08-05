<template>
    <div class="bg-slate-100 h-dvh p-[1%] flex flex-col gap-6">
        <div class="w-full flex flex-col justify-between p-[0.5%] gap-2">
            <div class="flex min-h-[30vh] w-full justify-between items-center gap-2">
                <h3 class="lg:text-[2.3rem] md:text-[1.8rem] text-[1.5rem] forum font-bold text-black w-[50%]"> Welcome <span class="text-sky-800"> {{userStore.user!.username.split("@")[0]}}</span>! What will you be reading today? </h3>
                <index-view-classes></index-view-classes>
            </div>
            <index-featured-catalog></index-featured-catalog>
        </div>
    </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
</script>

<style scoped>

</style>