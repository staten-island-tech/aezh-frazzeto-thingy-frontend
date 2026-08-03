export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/login') {
    if(!useUserStore().loggedIn) {
        return navigateTo('/login')
    }
  }
})