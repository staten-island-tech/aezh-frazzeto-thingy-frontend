// plugins/hydrate-user.client.ts
export default defineNuxtPlugin(() => {
    const userStore = useUserStore()
    userStore.loadFromLocalStorage()
})