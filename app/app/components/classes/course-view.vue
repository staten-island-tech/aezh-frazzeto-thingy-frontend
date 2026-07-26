<template>
    <div class="w-full px-[1%]">
        <classes-course-header :course="prop.course"></classes-course-header>
        <div class="w-full h-[78%] border-2 border-black">

        </div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    course: Course | null
}>()
</script>

<style scoped></style>