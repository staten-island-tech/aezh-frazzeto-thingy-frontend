<template>
  <div ref="reviewContainer"
    class="shadow-md bg-slate-200 w-full rounded-lg flex flex-col items-center justify-center m-[1%] transition-all duration-300 ease-in-out">
    <div class="flex flex-col items-center justify-center w-full p-2">
      <div class="w-full flex justify-between mx-2">
        <h2 class="forum text-xl max-w-full text-black text-left w-full">
          {{ props.review.reviewer }}
        </h2>
        <catalog-stars-container :stars="props.review.rating" :size="24"></catalog-stars-container>
      </div>
      <h3 class="forum text-[0.875rem] text-black justify-center text-center">
        {{ visibleContent }}{{ !props.review.expanded && hasMore ? '...' : '' }}
      </h3>
      <div class="grid transition-all duration-300 ease-in-out w-full"
        :class="props.review.expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
        <h3 class="forum text-[0.875rem] max-w-[90%] text-black justify-center text-center overflow-hidden mx-auto">
          {{ extraContent }}
        </h3>
      </div>
    </div>
    <button v-if="hasMore" @click="props.review.expanded = !props.review.expanded">
      <ChevronDown :size="24" :color="'#000000'" class="transition-all duration-300 ease-in-out"
        :class="props.review.expanded ? 'rotate-180' : ''" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'reicon-vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
});

const reviewContainer = ref<HTMLElement | null>(null)
const containerWidth = ref(0)
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (reviewContainer.value) {
    containerWidth.value = reviewContainer.value.getBoundingClientRect().width

    resizeObserver = new ResizeObserver((entries) => {
      containerWidth.value = entries[0]!.contentRect.width
    })
    resizeObserver.observe(reviewContainer.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

const TRUNCATE_LENGTH = computed(() => Math.ceil(containerWidth.value / 6.6))

const hasMore = computed(() => props.review.review.length > TRUNCATE_LENGTH.value)

const visibleContent = computed(() => {
  if (!hasMore.value) return props.review.review
  const cut = props.review.review.slice(0, TRUNCATE_LENGTH.value)
  const lastSpace = cut.lastIndexOf(' ')
  return lastSpace > 0 ? cut.slice(0, lastSpace) : cut
})

const extraContent = computed(() => {
  if (!hasMore.value) return ''
  return props.review.review.slice(visibleContent.value.length)
})
</script>