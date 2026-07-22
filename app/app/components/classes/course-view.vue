<template>
    <div class="text-[4rem]" v-if="prop.course !== null">
        {{ prop.course!.courseName }}
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    course: Course | null
}>()
</script>

<style scoped>

</style>