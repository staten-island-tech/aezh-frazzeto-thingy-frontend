<template>
    <div class="flex justify-end gap-2 mr-2 items-center">
        <p class="text-2xl text-black forum"> {{ stars }}/5</p>
        <Star :size="((size ? size : 32)  as number)" color="#efb100" weight="Filled" />
    </div>
</template>

<script setup lang="ts">
import { Star } from 'reicon-vue';
const prop = defineProps<{
   stars: Number;
   size: Number;
}>()
</script>

<style scoped>

</style>