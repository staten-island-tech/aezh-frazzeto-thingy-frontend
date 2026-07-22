<template>
    <div class="drawer">
        <input id="courses-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->
            <label for="courses-drawer" class="btn btn-circle swap swap-rotate ml-[2%] mt-[2%]">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />

                <!-- hamburger icon -->
                <svg class="swap-off rounded-full transition-all ease-in-out duration-300" @mouseover="isHover=true" @mouseleave="isHover=false" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 512 512">
                    <rect width="512" height="512" :fill="hoverClass" />
                    <path fill="black" d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <!-- close icon -->
            </label>
        </div>
        <div class="drawer-side">
            <label for="courses-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu min-h-full w-80 p-4 bg-[#FFE9CC] pt-10">
                <h2 class="forum text-2xl text-black">Your Classes</h2>
                <div class="h-1 rounded-full bg-[#ffcbab] my-3"></div>
                <classes-class-button @select="(course) => $emit('select', course)"
                v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :courseName="`English Pd ${i}`" :teacher-name="'Mr. Frazzetto'" :next-due-date="'7/23/2026'"></classes-class-button>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['select'])
const isHover = ref<boolean>(false)
const hoverClass = computed(() => {
    return isHover.value ? '#ffdac9' : '#FFE9CC'
})
</script>

<style scoped></style>