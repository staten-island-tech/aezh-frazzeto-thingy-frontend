<template>
    <div class="w-full px-[2%]">
        <classes-course-header @menu-click="(mode) => bodyMode = mode"></classes-course-header>
        <div v-if="courses"
            class="carousel bg-slate-200 h-[70vh] mt-[3vh] p-[2%] gap-2 shadow-lg rounded-2xl w-full flex items-center">
            <lazy-classes-course-carousel-item v-for="course in sortedCourses" :key="course.id" :course="course"></lazy-classes-course-carousel-item>
        </div>
    </div>
    <transition name='highlight-background'>
        <div class="w-screen h-screen bg-taupe-700/40 fixed top-0 left-0"
            v-if="bodyMode === 'join' || bodyMode === 'add'"></div>
    </transition>
    <transition name="join-modal">
        <lazy-classes-join-modal @close="async () => {bodyMode = null; courses = await fetchCourses()}" v-if="bodyMode === 'join'"></lazy-classes-join-modal>
    </transition>
    <transition name="add-modal">
        <lazy-classes-add-modal @close="async () => {bodyMode = null; courses = await fetchCourses()}" v-if="bodyMode === 'add'"></lazy-classes-add-modal>
    </transition>
</template>

<script setup lang="ts">
const bodyMode = ref<null | 'join' | 'add'>(null)

const config = useRuntimeConfig()
const userStore = useUserStore()

async function fetchCourses() {
    try {
        const response = await fetch(`${config.public.apiBase}/api/courses/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${userStore.accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch courses: ${response.status} ${response.statusText}`);
        }

        const classes = await response.json();
        return classes;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error; 
    }
}

const courses = ref(await fetchCourses())

const sortedCourses = computed(() => {
    if (!courses.value) return []
    let sortedByPeriod = [...courses.value].sort((a, b) => a.period - b.period)
    let sortedByName = sortedByPeriod.sort((a, b) => a.name.localeCompare(b.name))
    let sortedByArchived = sortedByName.sort((a, b) => a.isArchived - b.isArchived)
    return sortedByArchived
})
</script>
<style scoped>
.join-modal-enter-active,
.join-modal-leave-active,
.add-modal-enter-active,
.add-modal-leave-active {
    transition: all .2s ease-in-out;
}

.join-modal-enter-from,
.join-modal-leave-to,
.add-modal-enter-from,
.add-modal-leave-to {
    opacity: 0;
    scale: 0;
    translate: 100% -50%
}

.join-modal-enter-to,
.join-modal-leave-from,
.add-modal-enter-to,
.add-modal-leave-from {
    opacity: 1;
    scale: 1;
}

.highlight-background-enter-from,
.highlight-background-leave-to {
    opacity: 0
}

.highlight-background-enter-to,
.highlight-background-leave-from {
    opacity: 1
}

.highlight-background-enter-active,
.highlight-background-leave-active {
    transition: all 0.2s ease-out
}
</style>