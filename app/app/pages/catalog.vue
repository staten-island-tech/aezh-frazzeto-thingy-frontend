<template>
  <div
    class="bg-slate-100 px-[1%] flex flex-col items-center justify-center"
  >
  <catalog-cat-header > </catalog-cat-header>
    <div class="flex gap-4 items-start p-[1%] forum text-black font-bold rounded-2xl shadow-lg text-lg bg-slate-200 w-full h-[70vh]! mt-[3vh] overflow-y-scroll flex-wrap">
      <catalog-book-cover class="w-45"
        v-for="book in books"
        :key="book.name"
        :book="book"
      > </catalog-book-cover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBookStore } from '#imports';
const store = useBookStore()
const books = store.Books;
</script>

<style scoped></style>
