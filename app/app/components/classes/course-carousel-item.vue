<template>
    <div class="shadow-md h-full w-[40vw]! bg-white rounded-2xl p-4 carousel-item flex flex-col">
        <h3 class="text-slate-800 forum text-2xl text-center font-black">{{ teacherName }}'s {{ courseName }}, Period {{
            prop.periodNumber }}</h3>
        <p class="text-lg italic forum text-slate-600 text-center">your role: {{ userRole }}</p>
        <div class="h-1 rounded-full bg-slate-800 my-2"></div>
        <div v-if="upcomingReview"
            class="h-[64%] w-full flex justify-center items-center bg-red-200 shadow-md rounded-2xl shadow-red-400/40 p-2">
            <p class="forum text-2xl text-black font-bold m-2 text-center"> You have an upcoming review that you must
                complete by <span class="text-red-900 text-4xl">{{ upcomingReview }}</span>.</p>
            <div class="h-1 rounded-full bg-slate-800 my-2"></div>
        </div>
        <div v-else-if="userRole === 'Student'"
            class="h-[64%] w-full flex items-center bg-slate-100 shadow-md rounded-2xl p-2 flex-col justify-between py-1">
            <p class="forum text-2xl text-black font-bold m-2 text-center"> You have no upcoming reviews! Chill out and
                read a book.</p>
            <button @click="async () => { await navigateTo('/catalog') }"
                class="forum text-2xl bg-white shadow-sm hover:shadow-lg active:shadow-none px-[5%] text-black rounded-full w-full
            transition-all duration-300 ease-in-out hover:bg-sky-100 active:bg-sky-300 hover:-translate-y-0.5 active:translate-y-1 py-[5%]">
                View Catalog </button>
            <div class="h-1 rounded-full bg-slate-800 my-2"></div>
        </div>
        <div class="w-full flex flex-col justify-between">
            <div class="flex justify-between flex-wrap gap-4" v-if="userRole === 'Admin'">
                <h2 class="text-2xl text-black forum font-bold">Actions:</h2>
                <button 
                    class="w-full transition-all duration-300 ease-in-out shadow-sm min-h-12 flex justify-between px-2 items-center rounded-2xl text-black forum hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 hover:bg-emerald-400/20 active:bg-emerald-400/60 active:shadow-none gap-2 mt-2">
                    <User :size="24" />
                    Students/Assignments
                </button>
                <button 
                    class="transition-all duration-300 ease-in-out shadow-sm min-h-12 flex justify-between px-2 items-center rounded-2xl text-black forum hover:shadow-lg active:translate-y-1 hover:-translate-y-0.5 hover:bg-amber-400/20 active:bg-amber-400/60 active:shadow-none gap-2 w-full ">
                    <ArchiveDown2 :size="24" />
                    Edit Class
                </button>
                <button 
                    class="transition-all duration-300 ease-in-out shadow-sm min-h-12 flex justify-between px-2 items-center rounded-2xl text-black forum hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 hover:bg-red-400/20 active:bg-red-400/60 active:shadow-none gap-2 w-full ">
                    <Trash2 :size="24" />
                    Delete Class
                </button>
                <button 
                    class="transition-all duration-300 ease-in-out shadow-sm min-h-12 flex justify-between px-2 items-center rounded-2xl text-black forum hover:shadow-lg active:translate-y-1 hover:-translate-y-0.5 hover:bg-sky-400/20 active:bg-sky-400/60 active:shadow-none gap-2 w-full">
                    <ArchiveDown2 :size="24" />
                    Archive Class
                </button>
            </div>
            <button v-else class="transition-all duration-300 ease-in-out shadow-sm min-h-12 flex justify-between px-2 items-center rounded-2xl text-black forum hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 hover:bg-red-400/20 active:bg-red-400/60 active:shadow-none gap-2 w-full mt-2">
                <ArrowDoorIn :size="24" />
                    Leave Class
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Trash2 } from 'reicon-vue';
import { ArchiveDown2 } from 'reicon-vue';
import { User } from 'reicon-vue';
import { ArrowDoorIn } from 'reicon-vue';

const prop = defineProps<{
    periodNumber: number
}>()

const courseName = ref<string>('English')
const teacherName = ref<string>("Mrs. Peterson")
const upcomingReview = ref<string | null>(null)
const userRole = ref<'Admin' | 'Student'>('Student')

</script>

<style scoped></style>