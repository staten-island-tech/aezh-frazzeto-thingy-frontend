<template>
    <h4 class="forum text-black text-xl text-center w-full mb-[0.5%]">
        Join a Class
    </h4>
    <div class="max-w-full flex items-center justify-between">
        <input 
            v-model="classCodeInput"
            type="text" 
            placeholder="Enter Class Code..."
            maxlength="8"
            :class="[
                'max-w-[70%] text-center flex text-black border-2 border-[#ffcbab] forum rounded-xl px-4 py-2 text-lg bg-[#FFE9CC] transition-colors duration-300 ease-in-out focus:outline-none placeholder-[#f4ae84] focus:border-[#FF9A5A]',
                { 'is-wobbling': wobbling }
            ]"
            @animationend="wobbling = false"
        />
        <button 
            @click="verifyClassCode"
            class="max-w-[30%] whitespace-nowrap text-black forum text-lg bg-[#FAE6DA] border-2 border-[#ffcbab] px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]"
        >
            Join
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const wobbling = ref<boolean>(false)
const classCodeInput = ref<string>("")

watch(() => classCodeInput.value, () => {
    classCodeInput.value = classCodeInput.value.toUpperCase()
})

function verifyClassCode() {
    if (true) { // Passcode is invalid
        // If already wobbling from a previous click, reset briefly so the animation re-triggers
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