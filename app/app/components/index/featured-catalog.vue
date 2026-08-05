<template>
    <div class="w-full rounded-2xl flex flex-col bg-slate-200 min-h-[55vh] lg:h-full  p-[1%] shadow-lg">
        <div class="flex flex-row h-[20%] items-center justify-between px-[1%]">
            <h2 class="forum text-[1.8rem] text-black font-bold"> Interested in these?</h2>
            <button @click="async () => {await navigateTo('/catalog')}"
            class="forum text-2xl bg-white shadow-sm hover:shadow-lg active:shadow-none px-[5%] text-black rounded-full w-[40%]
            transition-all duration-300 ease-in-out hover:bg-sky-400/20  active:bg-sky-400/60 hover:translate-y-[-2%] active:translate-y-[2%] h-[70%]">
                    View Catalog </button>

        </div>
        <div class="carousel h-full rounded-2xl mt-[2%] gap-2 px-2">
            <div class="h-[95%] bg-white p-[0.5%] carousel-item text-black rounded-lg flex justify-between gap-1 px-2 shadow-lg overflow-hidden w-80 relative" v-for="featuredBook in featuredBooks" loading="lazy">
               <img :src="featuredBook.img" class="rounded-lg aspect-1/2">
               <div class="flex flex-col min-w-[50%] w-full over">
                <h3 class="forum text-lg text-center font-bold">{{ featuredBook.title }}</h3>
                <div class="w-full min-h-1 bg-slate-800 rounded-full"></div>
                <div class="w-full flex flex-col items-center min-h-[70%] justify-around">
                    <h3 class="forum text-lg text-center font-bold">{{ featuredBook.genre }}</h3>
                    <catalog-stars-container :stars="featuredBook.averageRating || 0" :text-size="'text-2xl'" :size="48" ></catalog-stars-container>
                    <NuxtLink :to="`/books/${featuredBook.id}`" class="bg-slate-100 shadow-md hover:shadow-lg active:shadow-none w-[55%] py-2 rounded-lg
                    hover:bg-sky-400/20 active:bg-sky-400/60 transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-px flex items-center justify-center
                    forum font-bold absolute bottom-2">See More</NuxtLink>
                </div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const featuredBooks = ref<any[]>()

const config = useRuntimeConfig()
const userStore = useUserStore()
async function searchFeatured() {
  try {
        const response = await $fetch(`${config.public.apiBase}/api/books/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userStore.accessToken}`,
            },
            query: {
              featured: true
            },
        })
        featuredBooks.value = (response as any).results
    } catch (error) {
        console.error("Failed to fetch books:", error)
        throw error
    }
}
await searchFeatured()
</script>

<style scoped>
.scroll-container {
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.this-class-does-nothing {
  /* this class is so that the closing style tag does not show up as yellow :) */
  text-align: left;
}
</style>
