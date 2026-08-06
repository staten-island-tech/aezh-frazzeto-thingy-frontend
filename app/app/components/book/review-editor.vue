<template>
  <div
    class="flex flex-col gap-2 min-w-full min-h-[60%] bg-slate-200 rounded-2xl shadow-md p-2"
  >
    <div class="flex flex-row justify-between items-center px-2 gap-2">
      <h2 class="forum text-black text-md lg:text-2xl text-center">
        Write a Review:
      </h2>
      <p
        class="text-xs lg:text-md forum italic"
        :class="reviewUpload.length === 500 ? 'text-red-600' : 'text-black'"
      >
        ({{ reviewUpload.length }}/500 characters)
      </p>
    </div>
    <textarea
      rows="5"
      cols="100"
      class="w-full h-[70%] bg-white shadow-md focus:shadow-lg rounded-2xl text-black focus:outline-none p-2 forum transition-all ease-in-out duration-300"
      v-model="reviewUpload"
      maxlength="500"
    ></textarea>
    <div class="rating rating-lg items-center justify-between px-2">
      <label class="w-[40%] text-black forum bg-slate-200">Rating: </label>
      <input
        @click="
          starRating = 0;
          reviewed = true;
        "
        type="radio"
        name="rating-10"
        class="rating-hidden bg-yellow-500"
        aria-label="clear"
      />
      <input
        @click="
          starRating = 1;
          reviewed = true;
        "
        type="radio"
        name="rating-10"
        class="mask mask-star-2 bg-yellow-500"
        aria-label="1 star"
      />
      <input
        @click="
          starRating = 2;
          reviewed = true;
        "
        type="radio"
        name="rating-10"
        class="mask mask-star-2 bg-yellow-500"
        aria-label="2 star"
      />
      <input
        @click="
          starRating = 3;
          reviewed = true;
        "
        type="radio"
        name="rating-10"
        class="mask mask-star-2 bg-yellow-500"
        aria-label="3 star"
      />
      <input
        @click="
          starRating = 4;
          reviewed = true;
        "
        type="radio"
        name="rating-10"
        class="mask mask-star-2 bg-yellow-500"
        aria-label="4 star"
      />
      <input
        @click="
          starRating = 5;
          reviewed = true;
        "
        type="radio"
        name="rating-10"
        class="mask mask-star-2 bg-yellow-500"
        aria-label="5 star"
      />
    </div>
    <div
      v-if="errorMessage"
      class="bg-red-400 shadow-md shadow-red-400 w-full p-1 rounded-2xl text-md forum text-center my-1"
    >
      Error: {{ errorMessage }}
    </div>
    <div class="flex justify-between w-full gap-2">
      <button
        @click="uploadReview('free')"
        class="flex-1 forum text-md lg:text-lg bg-slate-100 hover:bg-emerald-400/20 over:shadow-md active:shadow-none active:bg-emerald-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md text-black w-[40%]"
      >
        Upload For Fun
      </button>
      <button
        @click="uploadReview('assignment')"
        class="flex-1 forum text-md lg:text-lg bg-slate-100 hover:bg-emerald-400/20 over:shadow-md active:shadow-none active:bg-emerald-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md text-black w-[40%]"
      >
        Upload To Assignment
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Profanease, Category } from "profanease";
import en from "profanease/langs/en";
const prop = defineProps<{
  book_id: number;
}>();
const filter = new Profanease({
  languages: [en],
  normalize: "aggressive",
  categories: [Category.SLUR, Category.SEXUAL],
  // if you wish, you can have Category. INSULT, PROFANITY, RELIGIOUS, DRUGS, and VIOLENCE,
  // however i assume that some books will cover these topics naturally so i excluded them
});
const reviewUpload = ref<string>("");
const starRating = ref<number>(0);
const errorMessage = ref<string>("");
const reviewed = ref<boolean>(false);

watch(
  () => reviewUpload.value,
  () => {
    errorMessage.value = "";
  },
);

const config = useRuntimeConfig();
const userStore = useUserStore();

async function uploadReview(uploadPurpose: "assignment" | "free") {
  if (filter.check(reviewUpload.value)) {
    errorMessage.value = "Do you kiss your mother with that mouth?";
  } else if (!reviewUpload.value || !reviewed.value) {
    errorMessage.value = "One or more empty fields.";
  } else {
    try {
      if (uploadPurpose === "free") {
        const response = await $fetch(`${config.public.apiBase}/api/review/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userStore.accessToken}`,
          },
          body: {
            stars: starRating.value,
            textReview: reviewUpload.value,
          },
        });

        console.log(response);
      } else if (uploadPurpose === "assignment") {
        try {
          const response = await $fetch<{ book: number; id: number }>(
            `${config.public.apiBase}/api/assignments/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${userStore.accessToken}`,
              },
            },
          );
          if (response.book === prop.book_id) {
            await $fetch(`${config.public.apiBase}/api/reviews/`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${userStore.accessToken}`,
              },
              query: {
                stars: starRating.value,
                textReview: reviewUpload.value,
                assignment: response.id,
              },
            });
            return true;
          } else {
            errorMessage.value =
              "You have no assignments for this book. Please upload as a free review.";
            return false;
          }
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error: any) {
      console.log("FULL ERROR OBJECT:", error);
      console.log("ERROR DATA:", error?.data);
      console.log("ERROR RESPONSE:", error?.response);
    }
  }
  starRating.value = 0;
  reviewUpload.value = "";
}
</script>

<style scoped></style>
