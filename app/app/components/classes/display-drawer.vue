<template>
    <div class="drawer max-w-0">
        <input id="courses-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->
            
        </div>
        <div class="drawer-side">
            <label for="courses-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu min-h-full w-80 p-4 bg-[#FFE9CC] pt-10">
                <div class="flex justify-between max-h-[10%] items-center  mb-[-5%]">
                    <h2 class="forum text-2xl text-black w-[70%] font-bold">Your Classes</h2>
                    <button v-if="userType==='Admin'" @click=""
                    class="text-black forum bg-[#FAE6DA] border-2 border-[#ffcbab] rounded-full transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:rotate-[7deg] active:rotate-[15deg] text-center justify-center items-center aspect-square w-[15%] h-[15%] text-2xl font-bold">+</button>
                </div>
                <div class="h-1 rounded-full bg-[#ffcbab] my-3"></div>
                <classes-class-button @select="(course) => $emit('select', course)"
                v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :courseName="`English Pd ${i}`" :teacher-name="'Mr. Frazzetto'" :next-due-date="'7/23/2026'"></classes-class-button>
                <hr class="h-1 rounded-full bg-[#ffcbab] mb-2 -mt-3" ></hr>
                <classes-join-class></classes-join-class>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['select'])
const userType = ref<("Admin" | "Student")>("Admin")
</script>

<style scoped></style>