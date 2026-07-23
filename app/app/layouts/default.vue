<template>
    <header class="sticky top-0 h-[7vh] bg-[#ffd16f] flex justify-between items-center px-[2%]">
        <h1 class="forum lg:text-2xl text-lg hover:underline font-bold text-black"
            @click="async () => { await navigateTo('/') }">SITHS Book Review</h1>
        <div class="flex lg:w-[40%] w-[70%] justify-around">
            <button @click="async () => { await navigateTo('/catalog') }"
                class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-full transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] text-black">
                Catalog </button>
            <button @click="async () => { await navigateTo('/classes') }"
                class="text-black forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-full transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                Classes </button>
            <h2 class="forum lg:text-2xl text-lg hover:underline text-black" @click="showSettings = !showSettings">
                username
            </h2>
        </div>
    </header>
    <transition>
        <index-options-modal v-if="showSettings && loggedIn" @close="showSettings = false"></index-options-modal>
    </transition>
    <slot></slot>
</template>

<script setup lang="ts">
const showSettings = ref<boolean>(false)
const loggedIn = ref<boolean>(true) // they shouldnt be able to use settings if they are logged out
</script>

<style scoped></style>