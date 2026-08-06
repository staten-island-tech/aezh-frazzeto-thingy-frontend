<template>
    <div
        class="fixed left-[10%] top-[10%] h-[80vh] w-[80vw] bg-slate-100 rounded-3xl shadow-lg p-[2%] gap-4 justify-between flex-col flex md:py-[4%]">
        <div class="flex justify-between w-full items-center">
            <h2 class="text-3xl forum font-bold text-center text-black"> Create a Class </h2>
            <X :size="48" color="black" @click="$emit('close')"
                class="rounded-full hover:bg-sky-400/20 p-1 transition-colors duration-200 ease-in" />
        </div>
        <label for="classCodeInput" class="forum text-black text-2xl mb-[-2%]">Enter Class Name:</label>
        <input v-model="courseName" id="classCodeInput" placeholder="English, AP Language, etc." type="text"
            maxlength="35"
            class="bg-white h-[20%] text-[2.7rem] rounded-2xl text-center shadow-md focus:shadow-lg forum transition duration-300 ease-in-out placeholder-slate-400 text-black focus:outline-none px-1">
        <div class="flex flex-row flex-wrap h-[20%] items-center gap-y-0">
            <label for="periodsInput" class="forum text-black text-3xl h-full flex items-center">Periods:</label>
            <div v-for="i in 9" class="forum text-black text-2xl flex gap-2 items-center flex-row p-[1%]">
                <input id="periodsInput" type="checkbox"
                    class="checkbox border-2 border-slate-800 p-[2%] bg-slate-700 shadow-md"
                    @click="periodsInput[i - 1] = !periodsInput[i - 1]" />
                {{ i }}
            </div>
        </div>
        <button @click="createNewClass()"
            class="w-full h-[10%] whitespace-nowrap text-black forum text-2xl bg-white shadow-md px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-sky-400/20 active:bg-sky-400/60 active:shadow-none hover:shadow-lg hover:-translate-y-0.5 active:translate-y-1 font-bold">
            Create Class(es)
        </button>
        <div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { X } from 'reicon-vue';
const emit = defineEmits(['close'])
const courseName = ref<string>("")
const periodsInput = ref<boolean[]>([false, false, false, false, false, false, false, false, false])
const config = useRuntimeConfig()
const userStore = useUserStore()

async function createNewClass() {
    periodsInput.value.forEach(async (period, index) => {
        if (period) {
            const response: any = await $fetch(`${config.public.apiBase}/api/courses/`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${userStore.accessToken}`,
                },
                body: { 
                    "name": courseName.value,
                    "period": index + 1
                 }
            })
        }
    }
    )
    emit('close')
}
</script>

<style scoped></style>