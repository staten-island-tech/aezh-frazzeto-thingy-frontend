<template>
    <div class="rounded-2xl border-2 border-[#ffcbab] w-full h-[10%] p-[2%] mt-[8%] lg:mt-[4%]
    flex items-center justify-center transition-all duration-300 ease-in-out hover:translate-x-[2%] active:-translate-x-[1%]
    hover:bg-[#ffdac9] relative">
        <p class="forum text-xl text-center">{{ className }} ⋅ {{ teacherName }} </p>
        <div class="absolute top-[-20%] rounded-full font-bold px-[1%] right-0 bg-red-500/50 border-2 border-red-600 forum md:text-sm text-xs" v-if="nextDueDate"> <!-- notification-->
            Assignment Due: {{ nextDueDate }}
        </div>
    </div>
</template>

<script setup lang="ts">
const className = ref<string>("English Pd4")
const teacherName = ref<string>("Mr. Frazzetto")
const nextDueDate = ref<string | null>("7/23/2026")
</script>

<style scoped>

</style>