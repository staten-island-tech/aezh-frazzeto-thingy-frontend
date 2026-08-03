<template>
  <div class="h-dvh px-[1%] flex flex-col items-center justify-center">
    <book-bk-header :book-title="'Book Title'"></book-bk-header>
    <div
      class="w-full h-[70vh] p-2 bg-slate-200 shadow-md mt-[3vh] rounded-lg flex md:flex-row flex-col items-center justify-between gap-2 overflow-y-scroll"
    >
    <!-- Please someone replace the placeholder image so it shows the correct book cover same thing with the rest of the book's details-->
      <img
        class="h-[50%] lg:h-[95%] shadow-lg shadow-slate-500 rounded-2xl"
        src="https://m.media-amazon.com/images/I/51Ppi-8kISL._SY445_SX342_QL70_FMwebp_.jpg"
      />
      <div
        class="bg-white h-full rounded-2xl w-[80%] lg:w-[60%] p-2 flex flex-col items-center"
      >
        <div class="flex justify-between px-[3] items-center h-[7%] w-full">
          <h4 class="forum text-lg lg:text-2xl text-black font-bold w-[65%]">
            Book Title - Book Genre
          </h4>
          <catalog-stars-container
            :text-size="'text-2xl'"
            :size="32"
            :stars="3"
            class="w-[30%] h-full"
          ></catalog-stars-container>
        </div>
        <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
        <div
          class="w-full h-[90%] flex flex-col gap-2 items-center overflow-y-scroll"
        >
          <book-review-editor></book-review-editor>
          <!--We need a way to get review ids-->
          <book-review-button
            v-for="review in Reviews"
            :review="review"
            :class="
              review.id === highlightedReviewId
                ? 'bg-amber-200'
                : 'bg-slate-200'
            "
          >
            <span
              v-if="review.id === highlightedReviewId"
              class="text-sm italic"
            >
              (Selected Review)
            </span>
          </book-review-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Review {
  id: number;
  Review: string;
  reviewer: string;
  rating: number;
  [key: string]: unknown;
}

// Use of route is a temporary solution until I figure out how to pass the book_id from the catalog page to the book page.
const route = useRoute();
const book_id = route.params.book_id as string;

const highlightedReviewId = useBookStore().highlightedReviewId;
async function fetchReviews() {
  try {
    const response = await fetch(
      `http://localhost:3000/api/reviews/?book=${book_id}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = (await response.json()) as Review[];
    return data;
  } catch (error) {
    console.error(error);
    return [] as Review[];
  }
}
const Reviews = ref<Review[]>([]);

onMounted(async () => {
  Reviews.value = await fetchReviews();
});
</script>

<style scoped></style>
