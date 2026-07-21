<template>
    <div class="text-black border-2 border-[#ffcbab] forum rounded-2xl px-[2%] hover:translate-x-[2%] relative
                active:-translate-x-[1%] transition-all duration-300 ease-in-out hover:bg-[#ffdac9] mb-[10%] z-5">
        <p class="text-xl text-center">{{courseName}} - {{teacherName}}</p>
        <div class="absolute bg-red-400 border-2 border-red-500 rounded-full z-10 top-[-70%] right-0">
            Assignment Due: {{ nextDueDate }}
        </div>
    </div>
</template>

<script setup lang="ts">
const courseName = ref<string>("English Pd4")
const teacherName = ref<string>("Mr. Frazzetto")
const nextDueDate = ref<string | null>("7/23/2026")
</script>

<style scoped></style>