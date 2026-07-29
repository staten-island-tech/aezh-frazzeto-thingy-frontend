<template>
    <div class="fixed left-[10%] top-[10%] h-[80vh] w-[80vw] bg-slate-100 rounded-3xl shadow-lg p-[2%] gap-4 justify-between flex-col flex py-[8%] md:py-[4%]">
        <div class="flex justify-between w-full items-center flex-col">
            <div class="flex flex-row justify-between w-full h-[10%] items-center">
                <h2 class="text-3xl forum font-bold text-center text-black"> Join a Class </h2>
                <X :size="48" color="black" @click="$emit('close')" class="rounded-full hover:bg-sky-400/20 p-1 transition-colors duration-200 ease-in"/>
            </div>
        </div>
        <label for="classCodeInput" class="forum text-black text-2xl mb-[-2%]">Enter Class Code:</label>
        <input v-model="classCodeInput" id="classCodeInput" placeholder="XXXX-XXXX" type="text" @animationend="wobbling = false" :class="{ 'is-wobbling': wobbling }" maxlength="9" 
         class="w-full min-h-30 uppercase flex justify-between rounded-2xl focus:outline-none p-[4%] text-[4rem] text-center shadow-md bg-white placeholder-slate-400 focus:shadow-lg transition-all duration-300 ease-in-out text-black forum"></input>
        <button 
            @click="verifyClassCode()"
            class="w-full h-[20%] whitespace-nowrap text-black forum text-2xl bg-white px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-emerald-400/20 active:bg-emerald-400/60 active:shadow-none hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 font-bold"
        >
            Join Class
        </button>
    </div>
</template>

<script setup lang="ts">
import { X } from 'reicon-vue';
const emit = defineEmits(['close'])
const classCodeInput = ref<string>("")

const wobbling = ref<boolean>(false)
function verifyClassCode() {
    if (classCodeInput.value.length < 8) { // passcode is invalid
        // if already wobbling from a previous click reset so animation re-triggers
        wobbling.value = false
        nextTick(() => {
            wobbling.value = true
        })
    }
}
</script>

<style scoped>
@keyframes wobble {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
    75% { transform: rotate(-2deg); }
    100% { transform: rotate(0deg); }
}

.is-wobbling {
    animation: wobble 0.25s ease-in-out;
}
</style>