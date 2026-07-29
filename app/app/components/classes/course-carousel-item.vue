<template>
    <div class="shadow-md h-[94%] w-[40vw]! rounded-2xl p-4 carousel-item flex flex-col mx-2" :class="isArchived ? 'bg-sky-100' : 'bg-white'">
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
                <h2 class="text-2xl text-black forum font-bold mt-2">Actions:</h2>
                <button v-if="!isArchived"
                    class="w-full gap-2 px-4 bg-white shadow-sm rounded-2xl min-h-10 flex justify-between items-center text-black forum text-left my-1">
                    New Review Due
                    <input type="number" placeholder="MM" maxlength="2" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[10%]
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">  /
                    <input type="number" placeholder="DD" maxlength="2" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[10%]
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"> / 
                    <input type="number" placeholder="YYYY" maxlength="4" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[10%]
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">
                    <Add :size="24" class="transition-all duration-300 ease-in-out hover:bg-emerald-400/20 active:bg-emerald-400/60 rounded-full aspect-square -ml-2"/>
                </button>
                <button @click="viewingStudents = true"
                    class="w-full transition-all duration-300 ease-in-out shadow-sm min-h-10 flex justify-between px-4 items-center rounded-2xl text-black forum hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 hover:bg-purple-400/20 active:bg-purple-400/60 active:shadow-none gap-2">
                    View Students
                    <User :size="24" />
                </button>
                <button v-if="!isArchived"
                    class="w-full gap-2 px-4 bg-white shadow-sm rounded-2xl min-h-10 flex justify-between items-center text-black forum text-left my-1">
                    Edit Class Name
                    <input type="text" placeholder="New Name..." maxlength="35" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[50%]
                    ">                  
                    <div class="transition-all duration-300 ease-in-out hover:bg-yellow-400/20 active:bg-yellow-400/60 rounded-full aspect-square -ml-2">
                        <Pen :size="24" />
                    </div>
                </button>
                <button 
                    class="transition-all duration-300 ease-in-out shadow-sm min-h-10 flex justify-between px-4 items-center rounded-2xl text-black forum hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 hover:bg-red-400/20 active:bg-red-400/60 active:shadow-none gap-2 w-full ">
                    Delete Class
                    <Trash2 :size="24" />
                </button>
                <button v-if="!isArchived"
                    class="transition-all duration-300 ease-in-out shadow-sm min-h-10 flex justify-between px-4 items-center rounded-2xl text-black forum hover:shadow-lg active:translate-y-1 hover:-translate-y-0.5 hover:bg-sky-400/20 active:bg-sky-400/60 active:shadow-none gap-2 w-full">
                    Archive Class
                    <ArchiveDown2 :size="24" />
                </button>
            </div>
            <button v-else class="transition-all duration-300 ease-in-out shadow-sm min-h-10 flex justify-between px-4 items-center rounded-2xl text-black forum hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 hover:bg-red-400/20 active:bg-red-400/60 active:shadow-none gap-2 w-full mt-4">
                <ArrowDoorIn :size="24" />
                    Leave Class
            </button>
            <h2 v-if="isArchived" class="forum text-black italic text-center text-lg mt-1 -mb-1">This class is archived.</h2>
        </div>
        <transition name="highlight-background">
            <div class="w-screen h-screen bg-taupe-700/40 fixed top-0 left-0" v-if="viewingStudents"></div>
        </transition>
        <transition name="students-modal">
            <ClassesStudentsModal v-if="viewingStudents" @close="viewingStudents = false"></ClassesStudentsModal>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Trash2 } from 'reicon-vue';
import { ArchiveDown2 } from 'reicon-vue';
import { User } from 'reicon-vue';
import { ArrowDoorIn } from 'reicon-vue';
import { Pen } from 'reicon-vue';
import { Add } from 'reicon-vue'

const prop = defineProps<{
    periodNumber: number
    isArchived: boolean
}>()

const viewingStudents = ref<boolean>(false)
const courseName = ref<string>('English')
const teacherName = ref<string>("Mrs. Peterson")
const upcomingReview = ref<string | null>(null)
const userRole = ref<'Admin' | 'Student'>('Admin')

</script>

<style scoped>
.students-modal-enter-active,
.students-modal-leave-active {
    transition: all .2s ease-in-out;
}

.students-modal-enter-from,
.students-modal-leave-to {
    opacity: 0;
    scale: 0;
    translate: 0% 100%;
}
.students-modal-enter-to, 
.students-modal-leave-from {
    opacity: 1;
    scale: 1;
    translate: 0%;
}
.highlight-background-enter-from,
.highlight-background-leave-to {
    opacity: 0
}

.highlight-background-enter-to,
.highlight-background-leave-from {
    opacity: 1
}

.highlight-background-enter-active,
.highlight-background-leave-active {
    transition: all 0.2s ease-out
}

</style>