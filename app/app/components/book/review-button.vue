<template>
    <div class="border-[#FF9238] border-2 bg-[#FFCCA6] w-[95%] rounded-lg flex flex-col items-center justify-center m-[1%]">
        <div class="flex flex-col items-center justify-center w-[95%]">
          <h2 class="forum text-[1rem] max-w-full text-black">
            {{ review.reviewer }}
          </h2>
          <h3 class="forum text-[0.875rem] max-w-[90%] text-black justify-center text-center">
            {{ visibleContent }}{{ review.expanded ? extraContent : "..." }}
          </h3>
          <h3 class="forum text-[0.875rem] max-w-full text-black">
            {{ review.rating }}/5
          </h3>
        </div>
        <button @click="
          review.expanded = !review.expanded;
        ">
        <ChevronDown :size="24" :color="'#000000'" v-if="!review.expanded"/>
        <ChevronUp :size="24" :color="'#000000'" v-else/>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ChevronDown, ChevronUp } from 'reicon-vue';

const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
});

console.log(props.review.review)

const visibleContent = props.review.review.substring(0, 70)
const extraContent = props.review.review.substring(70)
</script>