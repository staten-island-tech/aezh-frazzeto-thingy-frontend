<template>
    <div class="flex flex-col gap-2 min-w-full">
        <div class="flex flex-row justify-between gap-4 items-center h-[20%] -mt-8">

            <div>
                <h2 class="forum text-3xl text-black w-full h-full font-bold">
                    {{ prop.bookTitle }}
                </h2>
            </div>

        </div>
            <div class="bg-white shadow-md w-full rounded-lg">
    </div>
        <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
    bookTitle: string
}>()
</script>

<style scoped></style>