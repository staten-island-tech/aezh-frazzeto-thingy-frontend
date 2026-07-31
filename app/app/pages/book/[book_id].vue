<template>
  <div
    class="h-dvh px-[1%] flex flex-col items-center justify-center"
  >
    <book-bk-header :book-title="'Book Title'"></book-bk-header>
    <div
      class="w-full h-[70vh] p-2 bg-slate-200 shadow-md mt-[3vh] rounded-lg flex md:flex-row flex-col items-center justify-between gap-2 overflow-y-scroll"
    >
          <img
            class="h-[50%] lg:h-[95%] shadow-lg shadow-slate-500 rounded-2xl "
            src="https://m.media-amazon.com/images/I/51Ppi-8kISL._SY445_SX342_QL70_FMwebp_.jpg"
          />
          <div class="bg-white h-full rounded-2xl w-[80%] lg:w-[60%] p-2 flex flex-col items-center">
            <div class="flex justify-between px-[3] items-center h-[7%] w-full"> <h4 class="forum text-lg lg:text-2xl text-black font-bold w-[65%]"> Book Title - Book Genre </h4> <catalog-stars-container :text-size="'text-2xl'" :size="32" :stars="3" class="w-[30%] h-full"></catalog-stars-container> </div> 
            <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
            <div class="w-full h-[90%] flex flex-col gap-2 items-center overflow-y-scroll">
                <book-review-editor></book-review-editor>
                <book-review-button v-for="review in placeholderListofReviews" :review="review" :class="review.id === highlightedReviewId ? 'bg-amber-200' : 'bg-slate-200' ">
                  <span v-if="review.id === highlightedReviewId" class="text-sm italic"> (Selected Review) </span>
                </book-review-button>
            </div>
          </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const highlightedReviewId = useBookStore().highlightedReviewId
const placeholderListofReviews = ref([
  {
    reviewer: "John Doe",
    review:
      "This book was amazing! I couldn't put it down. There was so much suspense and the characters were well-developed. I would recommend it to anyone who loves a good mystery.",
    rating: 5,
    expanded: false,
    id: 1,
  },
  {
    reviewer: "Jane Smith",
    review:
      "I found the plot to be a bit slow, but the characters were well-developed.",
    rating: 3,
    expanded: false,
    id: 2,
  },
  {
    reviewer: "Bob Johnson",
    review:
      "I didn't enjoy this book at all. The writing style was not my cup of tea.",
    rating: 1,
    expanded: false,
    id: 3,
  },
]);
</script>

<style scoped></style>
