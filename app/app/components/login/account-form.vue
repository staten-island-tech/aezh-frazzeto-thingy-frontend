<template>
    <div class="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center gap-6 text-black">
                <h3 class="text-3xl forum font-bold text-center text-[#4a3a28]">{{ userType }} Log In</h3>

                <div class="w-full flex flex-col gap-4 text-black">
                    <input type="text"
                        class="shadow-sm bg-white focus:shadow-md placeholder-slate-400 w-full rounded-xl px-4 py-3 elms-sans focus:outline-none text-left text-lg forum transition-all"
                        placeholder="Email" v-model="email">
                    <input type="password"
                        class="shadow-sm bg-white focus:shadow-md placeholder-slate-400 w-full rounded-xl px-4 py-3 elms-sans focus:outline-none text-left text-lg forum transition-all"
                        placeholder="Password" v-model="password">
                    <div class="bg-red-400 rounded-full border-2 border-red-500 px-[3%] lg:h-[25%] h-[15%] forum font-bold w-full mt-[1%]"
                        v-if="errorMessage">
                        Error: {{ errorMessage }}
                    </div>
                </div>

                <div class="flex w-full gap-4 justify-center">
                    <button @click="logIn()"
                        class="flex-1 forum text-lg bg-slate-100 hover:bg-sky-400/20 active:shadow-none active:bg-sky-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md">
                        Log in
                    </button>
                    <button @click="signUp()" v-if="userType==='Student'"
                        class="flex-1 forum text-lg bg-slate-100 hover:bg-emerald-400/20 over:shadow-md active:shadow-none active:bg-emerald-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md">
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

const email = ref<string>("")
const password = ref<string>("")

const errorMessage = ref<string>("")
const emailValid = ref<boolean>(false)
const passwordValid = ref<boolean>(false)

watch(() => password.value, () => errorMessage.value = "")

function logIn() {
    navigateTo("/")
}

function signUp() {
    passwordValid.value = false
    emailValid.value = false
    if(!email.value.includes("@nycstudents.net")) {
        errorMessage.value = "Invalid email address."
    } else emailValid.value = true
    errorMessage.value = functionStore.validatePassword(password.value)[0]
    passwordValid.value = functionStore.validatePassword(password.value)[1]

    if(passwordValid.value && emailValid.value) {
        navigateTo("/")
    }

}
</script>

<style scoped>

</style>