<template>
    <label @click="$emit('select', prop)"
    for="courses-drawer" class="text-black border-2 border-[#ffcbab] forum rounded-full px-[2%] hover:translate-x-[2%] relative
                active:-translate-x-[1%] transition-all duration-300 ease-in-out hover:bg-[#ffdac9] mb-[10%] z-5">
        <p class="text-xl text-center">{{prop.courseName}} - {{prop.teacherName}}</p>
        <div v-if="nextDueDate" class="absolute bg-red-400 border-2 border-red-500 z-10 top-[-30%] right-[-2%] px-[2%] aspect-square rounded-full h-full items-center justify-center flex text-white boldonse">
            !
        </div>
    </label>
</template>

<script setup lang="ts">
const emit = defineEmits(['select'])
const prop = defineProps<{
    courseName: string
    teacherName: string
    nextDueDate: string
}>()
</script>

<style scoped></style>