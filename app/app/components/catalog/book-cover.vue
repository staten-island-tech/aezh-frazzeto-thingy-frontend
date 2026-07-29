<template>
  <div>
    <img class="rounded-lg z-0 h-[30vh] w-[20vw] overflow-hidden shadow-sm hover:shadow-lg active:shadow-none hover:scale-[1.03] hover:-translate-y-0.5 active:translate-y-1 transition-all duration-300 ease-in-out active:scale-[0.97]" :src="book.cover"> </img
    <button
    @click="async () => { await navigateTo('/book/' + book.id) }" :key="book.id" :book="book">
    </button>
  </div>
</template>

<script setup lang="ts">
const isHovered = ref<boolean>(false)

defineProps({
  book: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>