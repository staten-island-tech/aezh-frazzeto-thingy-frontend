<template>
    <header class="sticky top-0 h-[7vh] border-b border-slate-800 bg-slate-100 flex justify-between items-center px-[2%] shadow-md">
        <h1 class="forum lg:text-2xl text-lg hover:underline font-bold text-black"
            @click="async () => { await navigateTo('/') }">SITHS Book Review</h1>
        <div class="flex lg:w-[40%] w-[70%] justify-between items-center">
            <button @click="async () => { await navigateTo('/catalog') }"
                class="forum text-2xl bg-white shadow-sm px-[5%] rounded-full transition-all duration-300 ease-in-out hover:bg-sky-100 hover:translate-y-[-2%] active:translate-y-[2%] text-black flex justify-around items-center gap-2">
                <BookOpen :weight="'Filled'" :size="24" />
                Catalog </button>
            <button @click="async () => { await navigateTo('/classes') }"
                class="forum text-2xl bg-white shadow-sm px-[5%] rounded-full transition-all duration-300 ease-in-out hover:bg-sky-100 hover:translate-y-[-2%] active:translate-y-[2%] text-black flex justify-around items-center gap-2">
                <MortarboardSquare :size="24" weight="Filled" />
                Classes </button>
            <Gear class="hover:rotate-15 active:rotate-45 transition-all duration-300 ease-in-out" :size="32" weight="Filled" :color="'black'" @click="showSettings = !showSettings" />
        </div>
    </header>
    <transition name="options-modal">
        <index-options-modal v-if="showSettings && loggedIn" @close="showSettings = false"></index-options-modal>
    </transition>
    <slot></slot>
</template>

<script setup lang="ts">
import { MortarboardSquare } from 'reicon-vue';
import { BookOpen } from 'reicon-vue';
import { Gear } from 'reicon-vue'

const showSettings = ref<boolean>(false)
const loggedIn = ref<boolean>(true) // they shouldnt be able to use settings if they are logged out
</script>

<style scoped>

.options-modal-enter-active,
.options-modal-leave-active {
    transition: all .15s ease-in-out;
}

.options-modal-enter-from,
.options-modal-leave-to {
    opacity: 0;
    scale: 0;
    translate: 100% -50%
}

.options-modal-enter-to,
.options-modal-leave-from {
    opacity: 1;
    scale: 1;
}
</style>