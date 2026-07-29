<template>
    <div class="flex flex-col gap-2 min-w-full">
        <div class="flex flex-row justify-between gap-4 items-center h-[20%] mt-5">

            <div>
                <h2 class="forum text-3xl text-black w-full h-full font-bold">
                    Your Classes
                </h2>
            </div>

            <div class="flex gap-2 items-center forum text-black font-bold text-lg">
                <div v-if="userType === 'Admin'" class="flex items-center gap-2">
                    <Add @click="$emit('menu-click', 'add')" :size="40" color="black" class="rounded-full hover:bg-cyan-400/20 p-[2%] transition-colors duration-200 ease-in" />  <p class="md:block hidden">Create Class</p>
                </div>
                <PlusCircle @click="$emit('menu-click', 'join')" :size="40" color="black" class="rounded-full hover:bg-emerald-400/20 p-[2%] transition-colors duration-200 ease-in" />  <p class="md:block hidden">Join Class</p>
            </div>

        </div>
        <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
    </div>
</template>

<script setup lang="ts">
import { Add } from 'reicon-vue';
import { PlusCircle } from 'reicon-vue';

const emit = defineEmits(['menu-click'])

const userType = ref<'Student' | 'Admin'>('Admin')
</script>

<style scoped></style>