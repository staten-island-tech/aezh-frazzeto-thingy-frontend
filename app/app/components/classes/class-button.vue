<template>
    <label @click="$emit('select', prop)"
    for="courses-drawer" class="text-black border-2 border-[#ffcbab] forum rounded-2xl px-[2%] hover:translate-x-[2%] relative
                active:-translate-x-[1%] transition-all duration-300 ease-in-out hover:bg-[#ffdac9] mb-[10%] z-5">
        <p class="text-xl text-center">{{prop.courseName}} - {{prop.teacherName}}</p>
        <div v-if="nextDueDate" class="absolute bg-red-400 border-2 border-red-500 rounded-full z-10 top-[-70%] right-0 px-[2%]">
            Assignment Due: {{ prop.nextDueDate }}
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