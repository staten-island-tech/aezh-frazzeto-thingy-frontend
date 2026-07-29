<template>
    <div class="shadow-md bg-slate-200 w-full rounded-lg flex flex-col items-center justify-center m-[1%] transition-all duration-300 ease-in-out">
        <div class="flex flex-col items-center justify-center w-[95%]">
          <h2 class="forum text-[1rem] max-w-full text-black">
            {{ props.review.reviewer }}
          </h2>
          <h3 class="forum text-[0.875rem] max-w-[90%] text-black justify-center text-center">
            {{ visibleContent }}{{ !props.review.expanded && hasMore ? '...' : '' }}
          </h3>
          <div
            class="grid transition-all duration-300 ease-in-out w-full"
            :class="props.review.expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <h3 class="forum text-[0.875rem] max-w-[90%] text-black justify-center text-center overflow-hidden mx-auto">
              {{ extraContent }}
            </h3>
          </div>
          <h3 class="forum text-[0.875rem] max-w-full text-black">
            {{ props.review.rating }}/5
          </h3>
        </div>
        <button @click="props.review.expanded = !props.review.expanded">
          <ChevronDown :size="24" :color="'#000000'" class="transition-all duration-300 ease-in-out" :class="props.review.expanded ? 'rotate-180' : ''"/>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'reicon-vue';

const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
});

const TRUNCATE_LENGTH = 55

const hasMore = computed(() => props.review.review.length > TRUNCATE_LENGTH)

const visibleContent = computed(() => {
  if (!hasMore.value) return props.review.content
  const cut = props.review.review.slice(0, TRUNCATE_LENGTH)
  const lastSpace = cut.lastIndexOf(' ')
  return lastSpace > 0 ? cut.slice(0, lastSpace) : cut
})

const extraContent = computed(() => {
  if (!hasMore.value) return ''
  return props.review.review.slice(visibleContent.value.length)
})
</script>