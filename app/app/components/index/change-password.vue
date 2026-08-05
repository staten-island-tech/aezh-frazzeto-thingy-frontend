<template>
    <div class="flex flex-col min-h-[50%] w-full justify-between items-center lg:mt-[1.5%] mt-[4%] text-black">
        <div class="w-full flex items-center justify-between">
            <div class="flex justify-around items-center flex-row">
                <h5 class="forum text-xl w-[70%]"> Change Password </h5>
            </div>
            <input type="password"
                class="lg:mx-0 mx-[0.5%] w-[40%] rounded-2xl px-[2%] elms-sans focus:outline-none text-left text-xl forum bg-white placeholder-slate-400 shadow-sm focus:shadow-md transition-all ease-in-out duration-300"
                placeholder="New password..." v-model="passwordChange">
            <button
                class="ml-1 forum text-xl bg-white px-[5%] rounded-2xl transition-all duration-300 ease-in-out hover:bg-sky-400/20 hover:shadow-md active:shadow-none active:bg-sky-400/60 hover:translate-y-[-2%] active:translate-y-[2%] h-[60%] shadow-sm "
                @click="validatePassword(passwordChange); changePassword({
                    newPassword: passwordChange,
                    newPasswordConfirm: passwordChange,
                })">
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
function validatePassword(passwordChange: string): [string, boolean] | void {
    if (passwordChange.length === 0) {
        errorMessage.value = "Empty password field."
        return
    }
    else if (passwordChange.length < 8) {
        errorMessage.value = "Password must be at least 8 characters."
        return
    }
    else if (passwordChange.length > 50) {
        errorMessage.value = "Password must be at most 50 characters."
        return
    }
    else if (!(/[0123456789]/.test(passwordChange))) {
        errorMessage.value = "Password must contain a number."
        return
    }
    else if (!(/[!@#$%^&*():;,<.>/?]/.test(passwordChange))) {
        errorMessage.value = "Password must contain a symbol."
        return
    }
    else if ((/ /.test(passwordChange))) {
        errorMessage.value = "Password cannot contain spaces."
        return
    }
    else if (!(/[qwertyuiopasdfghjklzxcvbnm]/.test(passwordChange) && /[QWERTYUIOPASDFGHJKLZXCVBNM]/.test(passwordChange))) {
        errorMessage.value = "Password must contain a lowercase and uppercase letter."
        return
    }
    else changePassword({
        newPassword: passwordChange,
        newPasswordConfirm: passwordChange
    })
}
const functionStore = useFunctionStore()

const passwordChange = ref<string>("")
watch(() => passwordChange.value, () => { errorMessage.value = ""; successfulPasswordChange.value = false })
const errorMessage = ref<string>("")
const successfulPasswordChange = ref<boolean>(false)

const config = useRuntimeConfig()
const userStore = useUserStore()

async function changePassword(params: {
    newPassword: string
    newPasswordConfirm: string
}) {
    if (!errorMessage.value) {
        try {
            const response = await $fetch(`${config.public.apiBase}/api/change-password/`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${userStore.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: {
                    new_password: params.newPassword,
                    new_password_confirm: params.newPasswordConfirm,
                    refresh: userStore.refreshToken,
                },
            })
            console.log(response)
            successfulPasswordChange.value = true
        } catch (error: any) {
            errorMessage.value = "Error occured while processing password change."
            throw error
        }
    }
}
</script>

<style scoped></style>