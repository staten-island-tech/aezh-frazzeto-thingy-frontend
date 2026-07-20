<template>
    <div class="bg-[#FEDBB3] min-h-screen w-full flex flex-col items-center px-4 py-24 lg:py-32">
        <div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            <login-account-form :userType="'Student'"></login-account-form>
            <login-account-form :userType="'Admin'"></login-account-form>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>