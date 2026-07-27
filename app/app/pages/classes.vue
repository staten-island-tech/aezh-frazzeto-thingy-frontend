<template>
    <div class="w-full px-[1%]">
        <classes-course-header @menu-click="(mode) => bodyMode = mode"></classes-course-header>
        <div class="w-full h-[78vh] border-2 border-black">

        </div>
    </div>
    <transition name='highlight-background'>
        <div class="w-screen h-screen bg-taupe-700/40 fixed top-0 left-0" v-if="bodyMode === 'join' || bodyMode === 'add'"></div>
    </transition>
    <transition name="join-modal">
        <classes-join-modal @close="bodyMode = null" v-if="bodyMode === 'join'"></classes-join-modal>
    </transition>
    <transition name="add-modal">
        <classes-add-modal @close="bodyMode = null" v-if="bodyMode === 'add'"></classes-add-modal>
    </transition>
</template>

<script setup lang="ts">
const selectedCourse = ref<null | Course>(null)
const bodyMode = ref<null | 'join' | 'add'>(null)
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