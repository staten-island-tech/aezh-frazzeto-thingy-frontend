<template>
    <div class="relative w-[15vw] max-h-[40vh] aspect-1/2! shrink-0" ref="bookCover">
        <img @click="isSelected = !isSelected" v-if="book.img"
            class="absolute w-full h-full object-cover rounded-lg z-0 shadow-sm hover:shadow-lg active:shadow-none hover:scale-[1.03] hover:-translate-y-2 shadow-slate-600 active:translate-y-1 transition-all duration-300 ease-in-out active:scale-[0.97]"
            :src="book.img" />
        <div v-else @click="isSelected = !isSelected"
            class="absolute w-full h-full object-cover rounded-lg z-0 shadow-sm hover:shadow-lg active:shadow-none hover:scale-[1.03] hover:-translate-y-2 shadow-slate-600 active:translate-y-1 transition-all duration-300 ease-in-out active:scale-[0.97] bg-linear-to-tr from-sky-300 to-white flex justify-center items-center">
            NO COVER D:
        </div>
        <transition :name="slideClass">
            <aside
                class="absolute bg-white h-[150%] lg:h-[120%] lg:w-[150%] w-[200%] rounded-lg shadow-lg p-2 shadow-slate-600 z-1 flex flex-col justify-between py-4"
                v-if="isSelected"
                :class="slideClass === 'slide-fade-left' ? 'translate-x-[18vw]' : 'translate-x-[-30vw]'">
                <div>
                    <h3 class="forum text-center text-md"> {{ book.title ?? 'Unnamed Book' }} <span
                            class="text-xs italic"> (written by {{ book.author.name ?? 'unknown' }}) </span></h3>
                    <div class="h-1 rounded-full bg-slate-800 my-2 w-full"></div>
                </div>
                <div v-if="useUserStore().userType === 'Admin'" class="flex items-center gap-2 justify-center">
                    <button
    class="mx-3 w-full rounded-md py-2 px-4 font-medium transition-all duration-300 ease-in-out hover:shadow-lg shadow-md active:shadow-none hover:translate-y-[-1] active:translate-y-[0.5]"
    :class="book.featured
        ? 'bg-yellow-500 text-black hover:bg-amber-400 active:bg-yellow-100'
        : 'bg-slate-100 text-black hover:bg-sky-400/20 active:bg-sky-400/60'"
    @click="addToFeatured()"
>
    {{ props.book.featured ? 'Remove from' : 'Add to'}} Featured
</button>
                </div>
                <p class="text-center text-2xl"> Genre: {{ book.genre ?? "None" }}</p>
                <button
                    class="shadow-sm hover:shadow-lg active:shadow-none forum text-2xl bg-white px-[5%] transition-all duration-300 ease-in-out hover:bg-sky-400/20 hover:-translate-y-px active:translate-y-0.5 text-black w-full rounded-full active:bg-sky-400/60 flex items-center justify-between"
                    @click="async () => { await navigateTo(`/books/${book.id}`) }">
                    <Eye :size="32" weight="Filled" :color="'#1d293d'" /> View More
                </button>
            </aside>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Eye } from 'reicon-vue';

const isSelected = ref<boolean>(false)

const props = defineProps({
    book: {
        type: Object,
        required: true,
    },
})

const bookCover = ref<HTMLElement | null>()
const slideClass = computed(() => {
    if (bookCover.value) {
        const rect = bookCover.value.getBoundingClientRect()
        const container = bookCover.value.parentElement 
        const containerRect = container?.getBoundingClientRect()
        const spaceOnRight = (containerRect?.right ?? window.innerWidth) - rect.right
        if (spaceOnRight < (.5 * (containerRect?.right || 1000))) {
            return "slide-fade-right"
        }
    }
    return "slide-fade-left"
})

const config = useRuntimeConfig()
const userStore = useUserStore()
async function addToFeatured() {
    props.book.featured = !props.book.featured
    try {
        const response = await $fetch(`${config.public.apiBase}/api/books/update/${props.book.id}/`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${userStore.accessToken}`,
                "Content-Type": "application/json",
            },
            body: {
                featured: props.book.featured

            }
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

</script>

<style scoped>
.slide-fade-left-enter-active,
.slide-fade-left-leave-active {
    transition: all 0.3s ease
}

.slide-fade-left-enter-to,
.slide-fade-left-leave-from {
    opacity: 1;
    translate: 18vw;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
    opacity: 0;
    translate: 0%
}

.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
    transition: all 0.3s ease
}

.slide-fade-right-enter-to,
.slide-fade-right-leave-from {
    opacity: 1;
    translate: -30vw;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
    opacity: 0;
    translate: 0%
}
</style>