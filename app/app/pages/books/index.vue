<template>
  <div
    class="bg-slate-100 px-[1%] flex flex-col items-center justify-center"
  >
  <catalog-cat-header
  @return-search="async (booksReturn, count) => { setBooks(booksReturn, count)}"
    @featured-search="async (booksReturn) => {
      featuredBooks = booksReturn
      searchFeatured = !searchFeatured
    }"> </catalog-cat-header>
    <div class="flex gap-4 justify-between lg:justify-start p-[1%] forum text-black font-bold rounded-2xl shadow-lg text-lg bg-slate-200 w-full h-[70vh]! mt-[3vh] overflow-y-scroll flex-wrap relative pt-[3%] pb-[7%]">
      <catalog-book-cover v-if="showCatalog && !searchFeatured"
        v-for="book in (books as any).results"
        :key="book.title"
        :book="book"
      > </catalog-book-cover>
      <catalog-book-cover v-if="showCatalog && searchFeatured"
        v-for="book in featuredBooks"
        :key="book.title"
        :book="book"
      >
      </catalog-book-cover>
      <div class="bg-white fixed z-2 lg:w-[40%] w-[60%] h-[10%] lg:left-[30%] left-[20%] rounded-2xl bottom-2 shadow-md flex justify-between items-center px-2" v-if="!searchFeatured">
        <button class="bg-slate-200 aspect-square h-[80%] rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-300 active:shadow-none active:bg-sky-400/60 transition-all duration-300 ease-in-out" @click="paginationInteract(-1)"> <ArrowLeft :size="24" /> </button>
        <p class="text-2xl forum"> Pg. {{ currentPageNum }} </p>
        <button class="bg-slate-200 aspect-square h-[80%] rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-300 active:shadow-none active:bg-sky-400/40 transition-all duration-300 ease-in-out" @click="paginationInteract(1)"> <ArrowRight :size="24" /> </button>
      </div>
      <div class="z-2 bg-white fixed lg:w-[40%] w-[60%] h-[10%] lg:left-[30%] left-[20%] rounded-2xl bottom-2 shadow-md flex justify-between items-center px-2" v-else>
        <p class="text-2xl forum w-full text-center"> Featured Catalog </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBookStore } from '#imports';
import { ArrowRight, ArrowLeft } from 'reicon-vue';

const showCatalog = ref<boolean>(true)
const store = useBookStore()
const userStore = useUserStore()
const searchFeatured = ref<boolean>(false)

const featuredBooks = ref<any[]>([])

const currentPageNum = ref<number>(1)
const totalPageCount = ref<number>(682) // this changes with the api

const config = useRuntimeConfig()

async function fetchBooks(params: { page?: number } = {}) {
    try {
        const response = await $fetch(`${config.public.apiBase}/api/books/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userStore.accessToken}`,
            },
            query: params,
        })
        totalPageCount.value = Math.ceil((response as any).count / 10)

        return response
    } catch (error) {
        console.error("Failed to fetch books:", error)
        throw error
    }
}

const books = ref<any>(await fetchBooks({ page: currentPageNum.value }))

async function paginationInteract(modify: number) {
    currentPageNum.value = Math.min(Math.max(1, currentPageNum.value + modify), totalPageCount.value)
    showCatalog.value = false

    books.value = await fetchBooks({ page: currentPageNum.value })

    await nextTick()
    showCatalog.value = true
}

async function setBooks(booksReturn: any, count: number) {
    showCatalog.value = false

    books.value = { results: booksReturn } // wrap to match template's `.results` access
    currentPageNum.value = 1
    totalPageCount.value = Math.ceil(count / 10)

    await nextTick()
    showCatalog.value = true
}

async function fetchReviews(params: { book: number, page: number }) {
    try {
        const response: any = await $fetch(`${config.public.apiBase}/api/review/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userStore.accessToken}`,
            },
            query: params
        })
        totalPageCount.value = Math.ceil(response.count / 3)
        
        return response.results as Review[]
    } catch (error) {
        console.error(error)
        return [] as Review[]
    }
}

fetchReviews({book: 1, page: 1})
</script>

<style scoped></style>
