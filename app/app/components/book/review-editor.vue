<template>
    <div class="flex flex-col gap-2 min-w-full min-h-[60%] bg-slate-200 rounded-2xl shadow-md p-2">
        <div class='flex flex-row justify-between items-center px-2 gap-2'>
            <h2 class="forum text-black text-md lg:text-2xl text-center">Write a Review:</h2>
            <p class="text-xs lg:text-md forum italic" :class="reviewUpload.length === 500 ? 'text-red-600' : 'text-black'">
                ({{ reviewUpload.length }}/500 characters)</p>
        </div>
        <textarea rows="5" cols="100"
            class="w-full h-[70%] bg-white shadow-md focus:shadow-lg rounded-2xl text-black focus:outline-none p-2 forum transition-all ease-in-out duration-300"
            v-model="reviewUpload" maxlength="500"></textarea>
        <div class="rating rating-lg items-center justify-between px-2">
            <label class="w-[40%] text-black forum bg-slate-200">Rating: </label>
            <input @click="starRating = 0" type="radio" name="rating-10" class="rating-hidden bg-yellow-500" aria-label="clear" />
            <input @click="starRating = 1" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" aria-label="1 star" />
            <input @click="starRating = 2" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" aria-label="2 star" />
            <input @click="starRating = 3" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" aria-label="3 star" />
            <input @click="starRating = 4" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" aria-label="4 star" />
            <input @click="starRating = 5" type="radio" name="rating-10" class="mask mask-star-2 bg-yellow-500" aria-label="5 star" />
        </div>
        <div class="flex justify-between w-full gap-2">
            <button @click="uploadReview('free')"
            class="flex-1 forum text-md lg:text-lg bg-slate-100 hover:bg-emerald-400/20 over:shadow-md active:shadow-none active:bg-emerald-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md text-black w-[40%]">
            Upload For Fun
            </button>
            <button @click="uploadReview('assignment')"
            class="flex-1 forum text-md lg:text-lg bg-slate-100 hover:bg-emerald-400/20 over:shadow-md active:shadow-none active:bg-emerald-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md text-black w-[40%]">
            Upload To Assignment
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const reviewUpload = ref<string>('')
const starRating = ref<number>(0)

function uploadReview(uploadPurpose:('assignment' | 'free')) {
    console.log(reviewUpload.value, starRating.value)
    starRating.value = 0
    reviewUpload.value = ""
}
</script>

<style scoped></style>