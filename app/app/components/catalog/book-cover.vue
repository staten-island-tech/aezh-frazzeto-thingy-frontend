<template>
  <div class="relative w-45! h-67.5! shrink-0">
    <img @click="isSelected = !isSelected" v-if="book.cover"
      class="absolute w-full h-full object-cover rounded-lg z-0 shadow-sm hover:shadow-lg active:shadow-none hover:scale-[1.03] hover:-translate-y-2 shadow-slate-600 active:translate-y-1 transition-all duration-300 ease-in-out active:scale-[0.97]"
      :src="book.cover"
    />
    <div v-else @click="isSelected = !isSelected"
    class="absolute w-full h-full object-cover rounded-lg z-0 shadow-sm hover:shadow-lg active:shadow-none hover:scale-[1.03] hover:-translate-y-2 shadow-slate-600 active:translate-y-1 transition-all duration-300 ease-in-out active:scale-[0.97] bg-linear-to-tr from-sky-300 to-white flex justify-center items-center">
        NO COVER :(
    </div>
    <transition name="slide-fade">
        <aside class="absolute bg-white h-full w-[150%] translate-x-[18vw] rounded-lg shadow-lg p-2 shadow-slate-600 z-1 flex flex-col justify-between py-4" v-if="isSelected">
            <div>
                <h3 class="forum text-center text-md"> {{ book.name ? book.name : 'Unnamed Book' }} <span class="text-xs italic"> (written by {{ book.author ? book.author : 'unknown' }}) </span></h3>
                <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
            </div>
            <p class="text-center text-2xl"> Genre: {{ book.genre ? book.genre : "None" }}</p>
            <div class="flex w-full items-center justify-center gap-2 px-5">
                <p class="forum text-black text-2xl"> Rating: </p>
                <catalog-stars-container :text-size="'text-2xl'" :size="40" :stars="book.rating" class="w-full h-[15%]"></catalog-stars-container>
            </div>
             <button
            class="shadow-sm hover:shadow-lg active:shadow-none forum text-2xl bg-white px-[5%] transition-all duration-300 ease-in-out hover:bg-sky-400/20 hover:-translate-y-px active:translate-y-0.5 text-black w-full rounded-full active:bg-sky-400/60 flex items-cetner justify-between"
            @click="async () => { await navigateTo(`/book/${book_id}`) }">
            <Eye :size="32" weight="Filled" :color="'#1d293d'"/> View More </button>
        </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Eye } from 'reicon-vue';

const isSelected = ref<boolean>(false)
const book_id = ref<number>(1)

defineProps({
  book: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease
}

.slide-fade-enter-to, 
.slide-fade-leave-from {
    opacity: 1;
    translate: 18vw;
}
.slide-fade-enter-from, 
.slide-fade-leave-to {
    opacity: 0;
    translate: 0%
}
</style>