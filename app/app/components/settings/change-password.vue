<template>
    <div class="flex flex-col min-h-[50%] w-full justify-between items-center lg:mt-[1.5%] mt-[4%]">
                    <div class="w-full flex justify-between">
                        <h5 class="forum text-xl"> Change Password </h5>
                        <input type="password"
                            class="w-[50%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-[#FFE1A8] placeholder-[#a9895f] focus:outline-none focus:border-[#FF9A5A] border-[#ffcbab] border-2"
                            placeholder="New password..." v-model="passwordChange">
                        <button
                            class="forum text-xl bg-[#FAE6DA] px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#ffdac9] hover:-translate-y-[2%] active:translate-y-[2%] h-[60%] border-[#ffcbab] border-2 "
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
</template>

<script setup lang="ts">
const functionStore = useFunctionStore()

const passwordChange = ref<string>("")
watch(() => passwordChange.value, () => { errorMessage.value = ""; successfulPasswordChange.value = false })
const errorMessage = ref<string>("")
const successfulPasswordChange = ref<boolean>(false)
</script>

<style scoped>

</style>