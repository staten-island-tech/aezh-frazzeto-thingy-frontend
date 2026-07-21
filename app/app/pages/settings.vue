<template>
    <div class="bg-[#FEDBB3] h-screen p-[1%] flex flex-col gap-6">
        <h2 class="text-[3rem] forum"> Settings </h2>
        <div class="bg-[#FFE9CC] rounded-3xl border-2 border-[#ffcbab] shadow-sm p-8 flex flex-col items-center gap-6">
            <h2 class="text-3xl forum font-bold text-center"> Account Settings </h2>
            <div class="h-full w-full">
                <settings-change-password></settings-change-password>
                
                <div class="h-[3%] rounded-full bg-[#ffcbab] mt-[1%]"></div>
                
            </div>
            <button class="forum text-xl bg-[#FAE6DA] border-[#ffcbab] border-2  px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] w-full"
                @click="async () => {loggedIn = false ; await navigateTo('/login')}">
                Log Out </button>
        </div>

        <div class="bg-[#FFE9CC] rounded-3xl border-2 border-[#ffcbab] shadow-sm p-8 flex flex-col items-center gap-6">
            <h2 class="text-3xl forum font-bold"> Other </h2>
            <div class="w-full" v-if="studentType === 'Admin'">

            </div>
            <div class="w-full forum text-lg italic" v-else> <!--  -->
                You have no other settings options at this time.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const loggedIn = ref<boolean>(true) // CONVERT THIS INTO BACKEND STUFF
const studentType = ref<("Admin" | "Student")>("Student")
</script>

<style scoped></style>