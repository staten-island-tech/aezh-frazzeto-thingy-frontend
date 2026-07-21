<template>
  <div>
    <button @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="relative">
      <img class="rounded-lg z-0" :src="book.cover" />
      <transition class="transition-all duration-200 ease-in-out">
      <div
        class="bg-white absolute rounded-lg top-[0%] z-50 flex flex-row overflow-hidden hover:scale-110 origin-top-left"
        :class="hoverClasses"
        v-if="isHovered">
        <img class="rounded-lg max-w-[18vw] aboslute" :src="book.cover" />
        <div class="flex flex-col items-center justify-center w-[20vw] h-[20vw]">
          <h2 class="forum text-2xl w-full h-[40%] text-center">{{ book.name }}</h2>
          <h3 class="forum text-1x1 h-[30%] text-center">{{ book.author }}</h3>
          <h3 class="forum text-1x1 h-[30%] text-center">{{ book.rating }}/5</h3>
        </div>
      </div>
      </transition>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isHovered = ref<boolean>(false)

const hoverClasses = computed(() => {
  return isHovered.value ? ["max-w-[50vw]"]: ["max-h-[0vw]"]
})

defineProps({
  book: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>