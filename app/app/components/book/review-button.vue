<template>
  <div ref="reviewContainer" v-if="!deleted"
    class="shadow-md w-full rounded-lg flex flex-col items-center justify-center m-[1%] transition-all duration-300 ease-in-out px-1 bg-slate-200">
    <div class="flex flex-col items-center justify-center w-full p-2">
      <div class="w-full flex justify-between mx-2">
        <h2 class="forum text-xl max-w-full text-black text-left w-full">
          {{ poster }} <slot></slot>
        </h2>
        <catalog-stars-container :stars="props.review.stars" :size="24"
          :text-size="'text-xl'"></catalog-stars-container>
        <Trash2 @click="deleteReview()" v-if="useUserStore().userType === 'Admin'" color="black" :size="32"
          weight="Filled"
          class="hover:bg-red-400/20 active:bg-red-400/60 transition-all duration-300 ease-in-out rounded-full" />
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
import { ChevronDown, Trash2 } from 'reicon-vue';

const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
});

const userType = useUserStore().userType

const deleted = ref<boolean>(false)
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

const hasMore = computed(() => (props.review.textReview.length || 50) > TRUNCATE_LENGTH.value)

const visibleContent = computed(() => {
  if (!hasMore.value) return props.review.textReview
  const cut = props.review.textReview.slice(0, TRUNCATE_LENGTH.value)
  const lastSpace = cut.lastIndexOf(' ')
  return lastSpace > 0 ? cut.slice(0, lastSpace) : cut
})

const extraContent = computed(() => {
  if (!hasMore.value) return ''
  return props.review.textReview.slice(visibleContent.value.length)
})

const config = useRuntimeConfig()
const userStore = useUserStore()

async function deleteReview() {
  try {
    const response = await $fetch(`${config.public.apiBase}/api/review/delete/${props.review.id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userStore.accessToken}`,
        "Content-Type": "application/json",
      },
    })
    deleted.value = true
  } catch (error: any) {
    console.error(error)
    throw error
  }
}
const poster = ref<string>(props.review.user)
async function getReviewPoster() {
  try {
    const response = await fetch(`${config.public.apiBase}/api/users/${props.review.user}/`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${userStore.accessToken}`,
            "Content-Type": "application/json"
        }
    })
    const userData:any = await response.json()
    const username = userData.username.split("@")[0]
    poster.value = username
  } catch (error) {
    console.error(error)
  }
}
getReviewPoster()
</script>