<template>
    <div class="bg-[#FEDBB3] min-h-screen flex flex-row gap-6 w-full">
        <classes-display-drawer @select="(course) => selectedCourse = course"></classes-display-drawer>
        <classes-course-view :course="selectedCourse"></classes-course-view>
    </div>
</template>

<script setup lang="ts">
const selectedCourse = ref<null | Course>(null)
</script>

<style scoped></style>