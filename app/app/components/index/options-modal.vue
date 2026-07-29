<template>
    <div class="p-[1%] flex flex-col gap-6 text-black right-2 top-12 fixed w-[70vw] lg:w-[40vw] z-2">
        <div class="bg-slate-100 rounded-3xl shadow-md p-8 flex flex-col items-center gap-6">
            <div class="flex justify-between w-full items-center">
                <h2 class="text-3xl forum font-bold text-center"> Options [username] </h2>
                <X :size="40" @click="$emit('close')" class="rounded-full hover:bg-sky-400/20 p-1 transition-colors duration-200 ease-in"/>
            </div>
            <div class="h-full w-full">
                <index-change-password></index-change-password>

                <div class="h-1 rounded-full bg-slate-800 my-2"></div>

                <div class="w-full" v-if="userType==='Admin'">
                <label class="label text-black forum mt-[1%]">
                    <input type="checkbox" :checked="isChecked" class="checkbox border-2 border-slate-800 p-[2%] bg-slate-700 shadow-md" @click="isChecked = !isChecked" />
                    Use Admin Controls
                    
                </label>
                <div class="h-1 rounded-full bg-slate-800 my-2"></div>

                </div>

            </div>
            <button
                class="forum text-xl bg-white  px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-red-100 hover:translate-y-[-2%] active:translate-y-[2%] w-full flex items-center justify-center gap-2 shadow-sm"
                @click="async () => { loggedIn = false; $emit('close'); await navigateTo('/login') }">
                <ArrowDoorIn :size="24" weight="Filled" /> Log Out </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { X } from 'reicon-vue';
import { ArrowDoorIn } from 'reicon-vue';
const emit = defineEmits(['close'])
const loggedIn = ref<boolean>(true) // CONVERT THIS INTO BACKEND STUFF
const userType = ref<("Admin" | "Student")>("Admin")
const isChecked = ref<boolean>(false)
</script>

<style scoped></style>