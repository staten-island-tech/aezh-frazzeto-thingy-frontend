<template>
    <div class="bg-[#FFE9CC] rounded-3xl border-2 border-[#ffcbab] shadow-sm p-8 flex flex-col items-center gap-6">
                <h3 class="text-3xl forum font-bold text-center text-[#4a3a28]">{{ userType }} Log In</h3>

                <div class="w-full flex flex-col gap-4">
                    <input type="text"
                        class="border-2 border-[#ffcbab] w-full rounded-xl px-4 py-3 elms-sans focus:outline-none focus:border-[#FF9A5A] text-left text-lg forum bg-[#FFE1A8] placeholder-[#a9895f] transition-colors"
                        placeholder="Username" v-model="user">
                    <input type="password"
                        class="border-2 border-[#ffcbab] w-full rounded-xl px-4 py-3 elms-sans focus:outline-none focus:border-[#FF9A5A] text-left text-lg forum bg-[#FFE1A8] placeholder-[#a9895f] transition-colors"
                        placeholder="Password" v-model="password">
                    <div class="bg-red-400 rounded-full border-2 border-red-500 px-[3%] h-[15%] forum font-bold w-full mt-[1%]"
                        v-if="errorMessage">
                        Error: {{ errorMessage }}
                    </div>
                </div>

                <div class="flex w-full gap-4 justify-center">
                    <button @click="logIn()"
                        class="flex-1 forum text-lg bg-[#FAE6DA] border-2 border-[#ffcbab] py-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm">
                        Log in
                    </button>
                    <button @click="signUp()" v-if="userType==='Student'"
                        class="flex-1 forum text-lg bg-[#FAE6DA] border-2 border-[#ffcbab] py-2 rounded-xl transition-all duration-200 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm">
                        Sign Up
                    </button>
                </div>
            </div>
</template>

<script setup lang="ts">
defineProps<{
    userType: ('Admin' | 'Student')
}>()

const functionStore = useFunctionStore()

const user = ref<string>("")
const password = ref<string>("")

const errorMessage = ref<string>("")
const passwordValid = ref<boolean>(false)

watch(() => password.value, () => errorMessage.value = "")

function logIn() {
    navigateTo("/")
}

function signUp() {
    passwordValid.value = false
    errorMessage.value = functionStore.validatePassword(password.value)[0]
    passwordValid.value = functionStore.validatePassword(password.value)[1]

    if(passwordValid.value) {
        navigateTo("/")
    }

}
</script>

<style scoped>

</style>