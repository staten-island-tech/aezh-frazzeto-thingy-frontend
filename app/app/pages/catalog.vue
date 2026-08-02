<template>
  <div
    class="bg-slate-100 px-[1%] flex flex-col items-center justify-center"
  >
  <catalog-cat-header > </catalog-cat-header>
    <div class="flex gap-4 items-start p-[1%] forum text-black font-bold rounded-2xl shadow-lg text-lg bg-slate-200 w-full h-[70vh]! mt-[3vh] overflow-y-scroll flex-wrap relative">
      <catalog-book-cover class="w-45"
        v-for="book in books"
        :key="book.name"
        :book="book"
      > </catalog-book-cover>
      <pagination class="bg-white absolute lg:w-[40%] w-[60%] h-[10%] lg:left-[30%] left-[20%] rounded-2xl bottom-2 shadow-md flex justify-between items-center px-2">
        <button class="bg-slate-200 aspect-square h-[80%] rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-300 active:shadow-none active:bg-sky-400/60 transition-all duration-300 ease-in-out" @click="paginationInteract(-1)"> <ArrowLeft :size="24" /> </button>
        <p class="text-2xl forum"> Pg. {{ currentPageNum }} </p>
        <button class="bg-slate-200 aspect-square h-[80%] rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-300 active:shadow-none active:bg-sky-400/40 transition-all duration-300 ease-in-out" @click="paginationInteract(1)"> <ArrowRight :size="24" /> </button>
      </pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBookStore } from '#imports';
import { ArrowRight } from 'reicon-vue';
import { ArrowLeft } from 'reicon-vue';
const store = useBookStore()
const books = store.books;

const currentPageNum = ref<number>(1)
const totalPageCount = 100 // this changes with the api

watch(() => currentPageNum.value, () => {
  console.log(currentPageNum.value) // call API to get new books
})

function paginationInteract(modify:number) {
  currentPageNum.value = Math.min(Math.max(1, currentPageNum.value + modify), 100)
}
</script>

<style scoped></style>
