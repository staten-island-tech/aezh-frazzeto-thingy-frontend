<template>
    <div class="flex justify-end gap-2 mr-2 items-center">
        <p class="forum" :class="textSize, textColor"> {{ stars }}/5</p>
        <Star :size="((size ? size : 32)  as number)" color="#efb100" weight="Filled" />
    </div>
</template>

<script setup lang="ts">
import { Star } from 'reicon-vue';
const prop = defineProps<{
   stars: Number;
   size: Number;
   textSize: string;
}>()

const textColor = computed(() => {
    const rating = prop.stars as number
    if(rating < 2) {
        return 'text-red-700'
    } else if (rating < 3.9) {
        return 'text-yellow-700'
    } else if (rating < 4.6) {
        return 'text-green-500'
    } else {
        return 'text-blue-800'
    }
})
</script>

<style scoped>

</style>