<template>
  <div
    class="!pt-0 bg-[#FEDBB3] h-screen px-[1%] flex flex-col items-center justify-center"
  >
    <div
      class="bg-[#FFCCA6] w-[90%] h-[90%] rounded-lg flex flex-col items-center justify-center"
    >
      <div class="bg-[#FFFFFF] w-[95%] h-[95%] rounded-lg flex flex-row">
        <div class="w-[20%] flex flex-col items-center">
          <img
            class="rounded-lg max-w-[15vw] p-[1%]"
            src="https://m.media-amazon.com/images/I/51Ppi-8kISL._SY445_SX342_QL70_FMwebp_.jpg"
          />
          <button
            class="border-[#ffcbab] border-2 forum text-[0.875rem] text-black bg-[#FAE6DA] p-[5%] m-[1%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[8%]"
          >
            Write Review
          </button>
          <button
            class="border-[#ffcbab] border-2 forum text-[0.875rem] text-black bg-[#FAE6DA] p-[5%] m-[1%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[8%]"
          >
            Submit Assignment
          </button>
        </div>
        <div class="w-[30%]">
          <h2 class="forum text-[1.25rem] text-black">
            Harry Potter and the Sorcerer's Stone
          </h2>
          <h3 class="forum text-[1rem] text-black">JK Roling</h3>
          <h3 class="forum text-[1rem] text-black">3/5</h3>
        </div>
        <div class="w-[50%] h-[100%] overflow-y-auto">
          <book-review-button
            v-for="review in placeholderListofReviews"
            :key="review.id"
            :review="review"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
