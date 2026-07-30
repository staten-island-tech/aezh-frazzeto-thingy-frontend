<template>
    <div class="fixed left-[10%] top-[10%] h-[80vh] w-[80vw] bg-slate-100 rounded-3xl shadow-lg p-[2%] gap-4 justify-between flex-col flex md:py-[4%]">
        <div class="flex justify-between w-full items-center">
            <h2 class="text-3xl forum font-bold text-center text-black"> View Students </h2>
            <X :size="48" color="black" @click="$emit('close')" class="rounded-full hover:bg-sky-400/20 p-1 transition-colors duration-200 ease-in"/>
        </div>
        <div class="bg-white h-[90%] rounded-2xl shadow-md w-full overflow-y-scroll flex flex-row flex-wrap p-4 gap-2 justify-between">
            <div v-for="student in students" class="bg-slate-300 min-w-60 w-[30%] h-50 rounded-2xl shadow-md flex flex-col p-1.5 justify-between">
                <h5 class="forum text-black text-md text-center">{{student.username}} / {{student.name}}</h5>
                <div v-if="!student" class="bg-red-400/20 shadow-red-400/50 text-center rounded-2xl shadow-xs p-1 text-black forum text-md mt-2 h-[60%] flex items-center justify-center"> 
                    This student has not submitted a review yet.
                </div>
                <button v-else class="bg-white hover:bg-sky-400/20 active:bg-sky-400/60 shadow-xs hover:shadow-md active:shadow-none hover:-translate-y-px active:translate-y-0.5 transition-all duration-300 ease-in-out rounded-2xl py-1 mt-2 forum text-black text-center h-[60%]">
                    View Their Review
                </button>
                <button  class="bg-white hover:bg-red-400/20 active:bg-red-400/60 shadow-xs hover:shadow-md active:shadow-none hover:-translate-y-px active:translate-y-0.5 transition-all duration-300 ease-in-out rounded-full py-1 mt-2 forum text-black text-center flex items-center gap-2 justify-center">
                    <ArrowDoorIn :size="24" weight="Filled" />Kick From Class
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { X } from 'reicon-vue';
import { ArrowDoorIn } from 'reicon-vue';

const emit = defineEmits(['close'])

const students = ref<Student[]>([])

const booleanArray:boolean[] = [true, false, true, true, false, true, true, false, true, true, false, true]
for(let i of booleanArray) {
    students.value.push({
        user_id: '234',
        username: 'josephf123',
        name: 'Joseph Frazzetto',
        enrolledClasses: [],
        completedReviews: []
    })
}

</script>

<style scoped>

</style>