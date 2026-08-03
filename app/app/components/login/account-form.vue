<template>
  <div
    class="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center gap-6 text-black"
  >
    <h3 class="text-3xl forum font-bold text-center text-[#4a3a28]">
      {{ userType }} Log In
    </h3>

    <div class="w-full flex flex-col gap-4 text-black">
      <input
        type="text"
        class="shadow-sm bg-white focus:shadow-md placeholder-slate-400 w-full rounded-xl px-4 py-3 elms-sans focus:outline-none text-left text-lg forum transition-all"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="password"
        class="shadow-sm bg-white focus:shadow-md placeholder-slate-400 w-full rounded-xl px-4 py-3 elms-sans focus:outline-none text-left text-lg forum transition-all"
        placeholder="Password"
        v-model="password"
      />
      <div
        class="bg-red-400 rounded-full border-2 border-red-500 px-[3%] lg:h-[25%] h-[15%] forum font-bold w-full mt-[1%]"
        v-if="errorMessage"
      >
        Error: {{ errorMessage }}
      </div>
    </div>

    <div class="flex w-full gap-4 justify-center">
      <button
        @click="logIn()"
        class="flex-1 forum text-lg bg-slate-100 hover:bg-sky-400/20 active:shadow-none active:bg-sky-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md"
      >
        Log in
      </button>
      <button
        @click="signUp()"
        v-if="userType === 'Student'"
        class="flex-1 forum text-lg bg-slate-100 hover:bg-emerald-400/20 over:shadow-md active:shadow-none active:bg-emerald-400/60 py-2 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5 shadow-sm hover:shadow-md"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  userType: "Admin" | "Student";
}>();

const userStore = useUserStore();
const config = useRuntimeConfig();

const email = ref<string>("");
const password = ref<string>("");

const errorMessage = ref<string>("");
const emailValid = ref<boolean>(false);
const passwordValid = ref<boolean>(false);

watch(
  () => password.value,
  () => (errorMessage.value = ""),
);

function validatePassword(passwordChange: string): [string, boolean] {
  if (passwordChange.length === 0) return ["Empty password field.", false];
  else if (passwordChange.length < 8)
    return ["Password must be at least 8 characters.", false];
  else if (passwordChange.length > 50)
    return ["Password must be at most 50 characters.", false];
  else if (!/[0123456789]/.test(passwordChange))
    return ["Password must contain at least one number.", false];
  else if (!/[!@#$%^&*():;,<.>/?]/.test(passwordChange))
    return ["Password must contain at least one symbol.", false];
  else if (/ /.test(passwordChange))
    return ["Password cannot contain spaces.", false];
  else if (
    !(
      /[qwertyuiopasdfghjklzxcvbnm]/.test(passwordChange) &&
      /[QWERTYUIOPASDFGHJKLZXCVBNM]/.test(passwordChange)
    )
  )
    return ["Password requires one capital and one lowercase letter.", false];
  else return ["", true];
}

function validateFields(): boolean {
  passwordValid.value = false;
  emailValid.value = false;

  if (
    !email.value.includes("@nycstudents.net") &&
    props.userType === "Student"
  ) {
    errorMessage.value = "Invalid email address.";
    return false;
  }
  emailValid.value = true;

  const [pwError, pwValid] = validatePassword(password.value);
  errorMessage.value = pwError;
  passwordValid.value = pwValid;

  return emailValid.value && passwordValid.value;
}

async function logIn() {
  if (!validateFields()) return;

  try {
    const response = await $fetch<{ access: string; refresh: string }>(
      `${config.public.apiBase}/api/token/`,
      {
        method: "POST",
        body: {
          username: email.value,
          password: password.value,
        },
      },
    );

    userStore.loginSuccess(response.access, response.refresh, email.value, props.userType);
    localStorage.setItem("refreshToken", response.refresh)
    localStorage.setItem("accessToken", response.access)
    navigateTo("/");
  } catch (error) {
    console.error(error)
    errorMessage.value = "Invalid email or password.";
  }
}

async function signUp() {
  if (!validateFields()) return;

  try {
    await $fetch(`${config.public.apiBase}/api/register/`, {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });

    // Registration doesn't return tokens, so log in right after
    await logIn();
  } catch (error: any) {
    errorMessage.value =
      error?.data?.detail || "An error occurred during sign up.";
  }
}
</script>

<style scoped></style>
