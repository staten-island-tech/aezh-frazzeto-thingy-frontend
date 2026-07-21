<template>
  <div>
    <button @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="relative">
      <img class="rounded-lg z-0" :src="book.cover" />
      <div
        class="lg:bg-white absolute rounded-lg w-[40vw] h-[50vh] top-[0%] sm:bg-white w-[20vw] h-[20vw] z-50 flex flex-row transition-all duration-300 ease-in-out"
        :class="focusedClasses"
        v-if="isHovered">
        <img class="rounded-lg aboslute w-[40%] min-h-[40%]" :src="book.cover" />
        <div class="flex flex-col items-center justify-center w-full">
          <h2 class="forum text-2xl w-full h-[40%] text-center">{{ book.name }}</h2>
          <h3 class="forum text-1x1 h-[30%] text-center">{{ book.author }}</h3>
          <h3 class="forum text-1x1 h-[30%] text-center">{{ book.rating }}/5</h3>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isHovered = ref<boolean>(false)

const transitionTrigger = computed(() => {
  return 
})

defineProps({
  book: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>