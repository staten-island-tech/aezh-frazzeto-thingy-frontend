<template>
    <div class="fixed left-[10%] top-[10%] h-[80vh] w-[80vw] bg-[#FFE9CC] rounded-3xl border-2 border-[#ffcbab] shadow-sm p-[2%] flex flex-col justify-between">
        <div class="flex justify-between w-full items-center">
            <h2 class="text-3xl forum font-bold text-center text-black"> Create a Class </h2>
            <X :size="64" color="black" @click="$emit('close')" class="rounded-full hover:bg-amber-400/20 p-[2%] transition-colors duration-200 ease-in"/>
        </div>
        <div class="flex justify-between items-center">
            <label for="courseNameInput" class="forum text-black text-3xl mb-[-2%] h-full">Enter Class Name:</label>
            <input v-model="courseName" id="courseNameInput" placeholder="English, AP Language, 'etc.'" type="text" maxlength="9"  class="w-[70%] py-[2%] flex justify-between border-4 border-black rounded-2xl focus:outline-none p-[4%] text-2xl text-center bg-[#FFE1A8] placeholder-[#a9895f] focus:border-[#FF9A5A] transition-all duration-300 ease-in-out text-black forum"></input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { X } from 'reicon-vue';
const emit = defineEmits(['close'])
const courseName = ref<string>("")
</script>

<style scoped>

</style>