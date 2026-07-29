<template>
  <div
    class="bg-slate-100 px-[1%] flex flex-col items-center justify-center"
  >
  <catalog-cat-header > </catalog-cat-header>
    <div
      class="bg-slate-200 w-full h-[70vh] mt-[3vh] rounded-2xl shadow-lg grid grid-cols-5 overflow-y-scroll p-2"
    >
      <catalog-book-cover
        class="p-[2.5%]"
        v-for="book in books"
        :key="book.name"
        :book="book"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBookStore } from '#imports';
const store = useBookStore()
const books = store.Books;
</script>

<style scoped></style>
