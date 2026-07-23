<template>
    <div class="p-[1%] flex flex-col gap-6 text-black right-2 top-12 fixed w-[70vw] lg:w-[40vw]">
        <div class="bg-[#FFE9CC] rounded-3xl border-2 border-[#ffcbab] shadow-sm p-8 flex flex-col items-center gap-6">
            <div class="flex justify-between w-full items-center">
                <h2 class="text-3xl forum font-bold text-center"> Options [username] </h2>
                <button @click="$emit('close')"
                    class="text-black forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] rounded-full transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] w-[20%] text-center justify-center items-center">Exit</button>
            </div>
            <div class="h-full w-full">
                <index-change-password></index-change-password>

                <hr class="h-1 rounded-full bg-[#ffcbab] my-2">
                </hr>
                <div class="w-full" v-if="userType==='Admin'">
                                    <label class="label text-black forum mt-[1%]">
                    <input type="checkbox" :checked="isChecked" class="checkbox border-2 border-[#ffcbab] p-[2%] accent-[#ffcbab]" @click="isChecked = !isChecked" />
                    Use Admin Controls
                    
                </label>
                <hr class="h-1 rounded-full bg-[#ffcbab] my-2">
                </hr>
                </div>

            </div>
            <button
                class="forum text-xl bg-[#FAE6DA] border-[#ffcbab] border-2  px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] w-full"
                @click="async () => { loggedIn = false; $emit('close'); await navigateTo('/login') }">
                Log Out </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const loggedIn = ref<boolean>(true) // CONVERT THIS INTO BACKEND STUFF
const userType = ref<("Admin" | "Student")>("Admin")
const isChecked = ref<boolean>(false)
</script>

<style scoped></style>