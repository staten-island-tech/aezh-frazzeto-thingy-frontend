<template>
    <div class="bg-[#FEDBB3] h-screen p-[1%] flex lg:flex-row flex-col gap-6 justify-center lg:pt-[10%]">
        <div class="lg:w-[45%] flex flex-col justify-center gap-2 items-center h-[70%]">
            <h3 class="text-[3rem] forum font-bold text-center"> Student Log In</h3>
            <div class="flex flex-col w-full min-h-full justify-around items-center">
                <input type="text"
                    class="border-2 border-[#ffcbab] w-[50%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-[#FFE1A8]"
                    placeholder="Username" v-model="studentUser">
                <input type="password"
                    class="border-2 border-[#ffcbab] w-[50%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-[#FFE1A8]"
                    placeholder="Password" v-model="studentPassword">
                <div class="flex w-full justify-around items-center">
                    <button @click="logIn('student')"
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                    Log in </button>
                    <button @click="signUp('student')"
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                    Sign Up </button>
                </div>
            </div>
        </div>
        <div class="lg:w-[45%] flex flex-col justify-center gap-2 items-center h-[70%]">
            <h3 class="text-[3rem] forum font-bold text-center"> Admin Log In</h3>
            <div class="flex flex-col w-full min-h-full justify-around items-center">
                <input type="text"
                    class="border-2 border-[#ffcbab] w-[50%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-[#FFE1A8]"
                    placeholder="Username" v-model="adminUser">
                <input type="password"
                    class="border-2 border-[#ffcbab] w-[50%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-[#FFE1A8]"
                    placeholder="Password" v-model="adminPassword">
                <div class="flex w-full justify-around items-center">
                    <button @click="logIn('admin')"
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                    Log in </button>
                    <button @click="signUp('student')"
                    class="forum text-2xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%]">
                    Sign Up </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const adminUser = ref<string>()
const adminPassword = ref<string>()
const studentUser = ref<string>()
const studentPassword = ref<string>()

function logIn(accountType:("student" | "admin")) {
navigateTo("/")
}

function signUp(accountType:("student" | "admin")) {
navigateTo("/")
}

</script>

<style scoped></style>