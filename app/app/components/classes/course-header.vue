<template>
        <div class="flex flex-col gap-2 min-w-full">
        <div class="flex flex-row justify-start gap-4 items-center h-[20%] mt-5">
        <label for="courses-drawer" class="btn btn-circle swap swap-rotate">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" class="shadow-none" />

            <!-- hamburger icon -->
            <svg class="swap-off rounded-full transition-all ease-in-out duration-300 hover:rotate-[-5deg] active:rotate-[-10deg] border-[#ffcbab] shadow-none" @mouseover="isHover = true"
                @mouseleave="isHover = false" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 512 512">
                <rect width="512" height="512" :fill="hoverClass" />
                <path fill="black" d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <!-- close icon -->
        </label>
        <div class="text-[4rem] text-left w-full" v-if="prop.course !== null">
            <h2 class="forum text-3xl text-black w-full h-full">
                {{ prop.course!.courseName }} - {{ prop.course!.teacherName }}
            </h2>
        </div>
        <div v-else>
            <h2 class="forum text-3xl text-black w-full h-full">
                [Select a Class]
            </h2>
        </div>
    </div>
    <div class="h-1 rounded-full bg-[#ffcbab] my-2 w-full" ></div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    course: Course | null
}>()

const isHover = ref<boolean>(false)
const hoverClass = computed(() => {
    return isHover.value ? '#ffdac9' : '#FFE9CC'
})
</script>

<style scoped>

</style>