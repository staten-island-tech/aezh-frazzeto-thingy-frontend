export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === "/login") return;

  const userStore = useUserStore();

  if(userStore.loggedIn) return;

  userStore.loadFromCookies();

  if (!userStore.accessToken) {
    return navigateTo("/login");
  }

  const config = useRuntimeConfig();

  try {
    await $fetch(`${config.public.apiBase}/api/token/verify/`, {
      method: "POST",
      body: { token: userStore.accessToken },
    });
    // valid — let the navigation proceed, no redirect needed
    return;
  } catch (error) {
    // access token invalid/expired — try refreshing it
    console.error(error);
    const refreshed = await userStore.refreshAccessToken();
    if (!refreshed) {
      return navigateTo("/login");
    }
    // refreshed successfully — let navigation proceed
  }
});
