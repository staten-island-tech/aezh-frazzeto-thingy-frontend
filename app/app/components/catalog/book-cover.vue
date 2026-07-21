<template>
    <div>
          <button @mouseenter="isHovered = true" @mouseleave="isHovered = false">
              <img class="rounded-lg" :src="book.cover"/>
              <div class="bg-white fixed rounded-lg w-[20vw] h-[10vh] top-0" v-if="isHovered">
                <h1 class="forum text-2xl">{{ book.name }}</h1>
                <h2 class="forum text-1x1">{{ book.author }}</h2>
                <h2 class="forum text-1x1">{{ book.rating }}/5</h2>
              </div>
          </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isHovered = ref(false)

defineProps({
  book: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>

</style>