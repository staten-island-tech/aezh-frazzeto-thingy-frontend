<template>
    <div class="flex flex-col min-h-[50%] w-full justify-between items-center lg:mt-[1.5%] mt-[4%] text-black">
        <div class="w-full flex items-center justify-between">
            <div class="flex justify-around items-center flex-row">
                <h5 class="forum text-xl w-[70%]"> Change Password </h5>
            </div>
            <input type="password"
                class="lg:mx-0 mx-[0.5%] w-[40%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-white placeholder-slate-400 shadow-sm hover:shadow-md transition-colors ease-in-out duration-300"
                placeholder="New password..." v-model="passwordChange">
            <button
                class="ml-1 forum text-xl bg-white px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-sky-400/20 hover:shadow-md active:shadow-none active:bg-sky-400/60 hover:translate-y-[-2%] active:translate-y-[2%] h-[60%] shadow-sm "
                @click="[errorMessage, successfulPasswordChange] = functionStore.validatePassword(passwordChange)">
                Confirm </button>
        </div>
        <div class="bg-red-400/80 rounded-full shadow-md shadow-red-400 px-[3%] h-[15%] forum font-bold w-full mt-[1%]"
            v-if="errorMessage">
            Error: {{ errorMessage }}
        </div>
        <div class="bg-emerald-300 rounded-full shadow-md shadow-emerald-400/80 px-[3%] h-[15%] forum font-bold w-full mt-[1%]"
            v-if="successfulPasswordChange">
            Password successfully changed!
        </div>
    </div>
</template>

<script setup lang="ts">
const functionStore = useFunctionStore()

const passwordChange = ref<string>("")
watch(() => passwordChange.value, () => { errorMessage.value = ""; successfulPasswordChange.value = false })
const errorMessage = ref<string>("")
const successfulPasswordChange = ref<boolean>(false)
</script>

<style scoped></style>