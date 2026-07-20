<template>
    <div class="bg-[#FEDBB3] h-screen p-[1%] flex flex-col gap-6">
        <h2 class="text-[3rem] forum"> Settings </h2>
        <div
            class="flex flex-row bg-[#FFCCA7] min-h-[30%] rounded-2xl border-2 border-[#FF9D00] flex flex-col mt-[1%] p-[1%] justify-between">
            <h2 class="text-2xl forum"> Account Settings </h2>
            <div class="h-full w-full">

                <div class="flex flex-col min-h-[50%] w-full justify-between items-center lg:mt-[1.5%] mt-[4%]">
                    <div class="w-full flex justify-between">
                        <h5 class="forum text-xl"> Change Password </h5>
                        <input type="password"
                            class="w-[50%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-[#FFE1A8]"
                            placeholder="New password..." v-model="passwordChange">
                        <button
                            class="forum text-xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[60%]"
                            @click="[errorMessage, successfulPasswordChange] = functionStore.validatePassword(passwordChange)">
                            Confirm </button>
                    </div>
                    <div class="bg-red-400 rounded-full border-2 border-red-500 px-[3%] h-[15%] forum font-bold w-full mt-[1%]"
                        v-if="errorMessage">
                        Error: {{ errorMessage }}
                    </div>
                    <div class="bg-emerald-300 rounded-full border-2 border-emerald-500 px-[3%] h-[15%] forum font-bold w-full"
                        v-if="successfulPasswordChange">
                        Password successfully changed!
                    </div>
                </div>
                <div class="h-[3%] rounded-full bg-[#FF9D00] mt-[1%]">
                </div>
            </div>
            <button class="forum text-xl bg-[#FAE6DA] border-2 border-[#ffcbab] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] w-full"
                @click="async () => {loggedIn = false ; await navigateTo('/login')}">
                Log Out </button>
        </div>

        <div
            class="flex flex-row bg-[#FFCCA7] min-h-[30%] rounded-2xl border-2 border-[#FF9D00] flex flex-col mt-[1%] p-[1%] justify-between">
            <h2 class="text-2xl forum"> Other </h2>
        </div>
    </div>
</template>

<script setup lang="ts">
const functionStore = useFunctionStore()

const passwordChange = ref<string>("")
watch(() => passwordChange.value, () => { errorMessage.value = ""; successfulPasswordChange.value = false })
const errorMessage = ref<string>("")
const successfulPasswordChange = ref<boolean>(false)
const loggedIn = ref<boolean>(true) // CONVERT THIS INTO BACKEND STUFF

</script>

<style scoped></style>