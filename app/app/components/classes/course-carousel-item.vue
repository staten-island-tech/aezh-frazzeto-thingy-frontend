<template>
    <div class="shadow-md h-[94%] w-[40vw]! rounded-2xl p-4 carousel-item flex flex-col mx-2 overflow-y-scroll" :class="isArchived ? 'bg-sky-100' : 'bg-white'">
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
                <div class="flex flex-row justify-between items-center w-full h-[16%]">
                    <h2 class="text-2xl text-black forum font-bold mt-2">Actions:</h2> 
                    <button @click="showClassCode = true"
                    class="transition-all duration-300 ease-in-out shadow-sm min-h-10 flex justify-between px-4 items-center rounded-2xl text-black forum hover:shadow-lg active:translate-y-1 hover:-translate-y-0.5 hover:bg-sky-400/20 active:bg-sky-400/60 active:shadow-none gap-2">
                    <Screencast2 :size="24" weight="Filled"/>
                    Show Class Code
                    
                </button>
                </div>
                <button v-if="!isArchived"
                    class="w-full gap-2 px-4 bg-white shadow-sm rounded-2xl min-h-10 flex justify-between items-center text-black forum text-left my-1">
                    New Review Due
                    <input v-model="newDateM" type="number" placeholder="MM" maxlength="2" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[10%]
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">  /
                    <input v-model="newDateD" type="number" placeholder="DD" maxlength="2" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[10%]
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"> / 
                    <input v-model="newDateY" type="number" placeholder="YYYY" maxlength="4" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[10%]
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">
                    <Add :size="24" class="transition-all duration-300 ease-in-out hover:bg-emerald-400/20 active:bg-emerald-400/60 rounded-full aspect-square -ml-2" @click="validateReviewDue()"/>
                </button>
                <div v-if="newDateError" class="bg-red-400/80 rounded-2xl shadow-md shadow-red-400/40 forum text-black w-full flex items-center justify-center font-bold">
                     Error: {{ newDateError }}
                </div>
                <div v-else-if="newDateSuccess" class="bg-emerald-400/80 rounded-2xl shadow-md shadow-emerald-400/40 forum text-black w-full flex items-center justify-center font-bold">
                    Successfully uploaded review!
                </div>
                <button @click="viewingStudents = true"
                    class="w-full transition-all duration-300 ease-in-out shadow-sm min-h-10 flex justify-between px-4 items-center rounded-2xl text-black forum hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 hover:bg-purple-400/20 active:bg-purple-400/60 active:shadow-none gap-2">
                    View Students
                    <User :size="24" />
                </button>
                <button v-if="!isArchived"
                    class="w-full gap-2 px-4 bg-white shadow-sm rounded-2xl min-h-10 flex justify-between items-center text-black forum text-left my-1">
                    Edit Class Name
                    <input v-model="newClassNameInput" type="text" placeholder="New Name..." maxlength="35" class="bg-slate-100 rounded-lg text-center focus:outline-none shadow-xs focus:shadow-md transition-all duration-300 ease-in-out text-sm px-0.5 w-[50%]
                    ">                  
                    <div class="transition-all duration-300 ease-in-out hover:bg-yellow-400/20 active:bg-yellow-400/60 rounded-full aspect-square -ml-2">
                        <Pen :size="24" @click="() => {
                            if(newClassNameInput) console.log(newClassNameInput) // change name in database
                        }"/>
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
            <div class="w-screen h-screen bg-taupe-700/40 fixed top-0 left-0" v-if="viewingStudents || showClassCode"></div>
        </transition>
        <transition name="students-modal">
            <ClassesStudentsModal v-if="viewingStudents" @close="viewingStudents = false"></ClassesStudentsModal>
        </transition>
        <transition name="class-code-modal">
            <div class="fixed left-[10%] top-[10%] h-[80vh] w-[80vw] bg-linear-to-tr from-sky-100 to-slate-100 rounded-3xl shadow-lg p-[2%] gap-4 justify-between flex-col flex py-[8%] md:py-[4%]" v-if="showClassCode">
        <div class="flex justify-between w-full items-center flex-col">
            <div class="flex flex-row justify-between w-full h-[10%] items-center">
                <X :size="48" color="black" @click="showClassCode = false" class="rounded-full hover:bg-sky-400/20 p-1 transition-colors duration-200 ease-in"/>
            </div>
        </div>
        <h3 class="text-[3rem] font-bold forum text-black text-center mt-10">CLASS CODE:</h3>
        <h3 class="text-[7rem] font-black forum text-black text-center mb-[30%]">AHHH-AHHH</h3>
    </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Trash2, ArchiveDown2, User, ArrowDoorIn, Pen, Add, Screencast2, X } from 'reicon-vue';

const prop = defineProps<{
    periodNumber: number
    isArchived: boolean
}>()

const newDateM = ref<number | null>(null)
const newDateD = ref<number | null>(null)
const newDateY = ref<number | null>(null)

const newDateError = ref<string>("")
const newDateSuccess = ref<boolean>(false)
const viewingStudents = ref<boolean>(false)
const courseName = ref<string>('English')
const teacherName = ref<string>("Mrs. Peterson")
const upcomingReview = ref<string | null>(null)
const userRole = useUserStore().userType
const newClassNameInput = ref<string>("")
const showClassCode = ref<boolean>(false)

watch(() => [newDateD.value, newDateY.value, newDateM.value], () => {
    newDateSuccess.value = false
    newDateError.value = ""
})

const monthDayCounts:number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function fulfillsLeapYear() {
    if(newDateM.value === 2 && newDateD.value === 29 && newDateY.value) {
        if(newDateY.value % 4 === 0 && (newDateY.value % 100 !== 0 || newDateY.value % 400 === 0)) {
            return true
        }
    } 
    return false
}

function validateReviewDue() {
    if(newDateM.value && newDateD.value && newDateY.value) {
        const daysInMonth = monthDayCounts[newDateM.value - 1] ?? 31
        if(newDateM.value > 12 || newDateM.value < 1) {
            newDateError.value = "Invalid month input."
        }
        else if (newDateY.value < 1 || newDateY.value > 2100) {
            newDateError.value = 'Invalid year input.'
        }
        else if (newDateD.value > daysInMonth && !fulfillsLeapYear()) {
            newDateError.value = "Invalid date input."
        } else {
            newDateSuccess.value = true
        }
    } else newDateError.value = "One or more blank fields."
}

</script>

<style scoped>
.students-modal-enter-active,
.students-modal-leave-active,
.class-code-modal-enter-active,
.class-code-modal-leave-active {
    transition: all .2s ease-in-out;
}

.students-modal-enter-from,
.students-modal-leave-to,
.class-code-modal-enter-from,
.class-code-modal-leave-to {
    opacity: 0;
    scale: 0;
    translate: 0% 100%;
}
.students-modal-enter-to, 
.students-modal-leave-from,
.class-code-modal-enter-to,
.class-code-modal-leave-from {
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