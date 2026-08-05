<template>
  <div class="h-dvh px-[1%] flex flex-col items-center justify-center">
    <book-bk-header :book-title="`${book.title} - written by ${book.author.name}`"></book-bk-header>
    <div
      class="w-full h-[70vh] p-2 bg-slate-200 shadow-md mt-[3vh] rounded-lg flex md:flex-row flex-col items-center justify-between gap-2 overflow-y-scroll">
      <!-- Please someone replace the placeholder image so it shows the correct book cover same thing with the rest of the book's details-->
      <img class="h-[50%] lg:h-[95%] shadow-lg shadow-slate-500 rounded-2xl" :src="book.img" />
      <div class="bg-white h-full rounded-2xl w-[80%] lg:w-[60%] p-2 flex flex-col items-center">
        <div class="flex justify-between px-[3] items-center h-[7%] w-full">
          <h4 class="forum text-lg lg:text-2xl text-black font-bold w-[65%]">
            {{ book.title }} - {{ book.genre }}
          </h4>
          <catalog-stars-container :text-size="'text-2xl'" :size="32" :stars="bookRating"
            class="w-[30%] h-full"></catalog-stars-container>
        </div>
        <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
        <div class="w-full h-[90%] flex flex-col gap-2 items-center overflow-y-scroll">
          <book-review-editor :book_id="book.id"></book-review-editor>
          <!--We need a way to get review ids-->
          <book-review-button v-for="review in reviews" :review="review">
          </book-review-button>
        </div>
      </div>
      <div
        class="bg-white absolute lg:w-[40%] w-[60%] h-[10%] lg:left-[30%] left-[20%] rounded-2xl bottom-2 shadow-md flex justify-between items-center px-2">
        <button
          class="bg-slate-200 aspect-square h-[80%] rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-300 active:shadow-none active:bg-sky-400/60 transition-all duration-300 ease-in-out"
          @click="paginationInteract(-1)">
          <ArrowLeft :size="24" :color="'black'" />
        </button>
        <p class="text-2xl forum text-black"> Pg. {{ currentPageNum }} </p>
        <button
          class="bg-slate-200 aspect-square h-[80%] rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md hover:bg-slate-300 active:shadow-none active:bg-sky-400/40 transition-all duration-300 ease-in-out"
          @click="paginationInteract(1)">
          <ArrowRight :size="24" :color="'black'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'reicon-vue'

const currentPageNum = ref<number>(1)
const showReviews = ref<boolean>(true)


// Use of route is a temporary solution until I figure out how to pass the book_id from the catalog page to the book page.
const route = useRoute();
const book_id = parseInt(route.params.book_id as string) || 1;

const config = useRuntimeConfig()
const userStore = useUserStore()

async function searchForBook(params: { id?: number } = {}) {
  try {
    const response = await $fetch(`${config.public.apiBase}/api/books/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userStore.accessToken}`,
      },
      query: params,
    })
    return (response as any).results[0]
  } catch (error) {
    console.error("Failed to fetch book:", error)
    throw error
  }
}

const book = await (searchForBook({ id: book_id }))

const totalPageCount = ref(1)
const bookRating = ref<number>(0)

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

async function paginationInteract(modify: number) {
  currentPageNum.value = Math.min(Math.max(1, currentPageNum.value + modify), totalPageCount.value)
  showReviews.value = false

  reviews.value = await fetchReviews({ book: book_id, page: currentPageNum.value })

  await nextTick()
  showReviews.value = true
}

async function getRating() {
  try {
    const response: any = await $fetch(`${config.public.apiBase}/api/books/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userStore.accessToken}`,
      },
      query: {id: book_id}
    })


    bookRating.value = response.results[0].averageRating
  } catch (error) {
    console.error(error)
    return 0
  }
}

getRating()

const reviews = ref<Review[]>([]);

onMounted(async () => {
  reviews.value = await fetchReviews({ book: book_id, page: currentPageNum.value });
});
</script>

<style scoped></style>
