<template>
    <div class="bg-white shadow-md hover:shadow-lg active:shadow-none hover:-translate-y-px relative
    active:translate-y-0.5 overflow-y-scroll transition-all duration-300 ease-in-out 
    rounded-2xl py-1 mt-2" :class="divClasses" @click="isClicked = !isClicked" @mouseover="isHover = true"
        @mouseleave="isHover = false">
        <div class="w-full flex justify-between items-center px-[1%]">
            <h5 class="forum text-black text-center italic text-xs"> (on {{ review.book_name }})</h5>
            <CatalogStarsContainer :stars="3" :size="20" :text-size="'text-md'"></CatalogStarsContainer>
        </div>
        <div class="h-1 rounded-full bg-slate-800 my-0.5 mx-1"></div>
        <div class="absolute bg-slate-800/70 px-1 forum text-white 
        transition duration-300 ease-in-out rounded-lg top-[5%] left-[1%]" :class="(isHover && !isClicked) ? 'opacity-100' : 'opacity-0'">
            Click to expand.
        </div>
        <div class="flex w-full px-[1%] mt-[1%]">
            <p class="text-sm forum text-black"> {{ review.review_content }} </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    review: Review
}>()

const isClicked = ref(false)
const isHover = ref(false)

const divClasses = computed(() => {
    return isClicked.value ? 'min-h-[200%] z-5 -translate-x-[5%] w-[110%]' : 'min-h-[60%] w-full'
})


</script>

<style scoped></style>