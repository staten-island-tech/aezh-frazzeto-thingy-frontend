function decodeJwtPayload(token: string): Record<string, any> | null {
  if (typeof atob === "undefined") return null; // SSR guard
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return null;
  }
}

export const useUserStore = defineStore("functions", {
  state: () => ({
    loggedIn: false as boolean,
    userType: "Student" as "Student" | "Admin", // by default to limit permissions
    user: null as AppUser | null,
    accessToken: null as string | null,
    refreshToken: null as string | null,
  }),
  actions: {
    validatePassword(passwordChange: string): [string, boolean] {
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
        return [
          "Password requires one capital and one lowercase letter.",
          false,
        ];
      else return ["", true];
    },
    loginSuccess(
      access: string,
      refresh: string,
      email: string,
      userType: "Student" | "Admin",
    ) {
      const payload = decodeJwtPayload(access);
      this.accessToken = access;
      this.refreshToken = refresh;
      this.loggedIn = true;
      this.userType = userType;
      this.user = {
        user_id: payload?.user_id ?? "",
        username: email,
        name: email,
      };
    },
    async refreshAccessToken(): Promise<boolean> {
      if (!this.refreshToken) return false;
      const config = useRuntimeConfig();
      try {
        const response = await $fetch<{ access: string }>(
          `${config.public.apiBase}/api/token/refresh/`,
          { method: "POST", body: { refresh: this.refreshToken } },
        );
        this.accessToken = response.access;
        return true;
      } catch {
        this.logout();
        return false;
      }
    },
    logout() {
      this.loggedIn = false;
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },
  },
});