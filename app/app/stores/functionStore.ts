export const useFunctionStore = defineStore('functions', {
    state: () => ({

    }),
    actions: {
        validatePassword(passwordChange: string): [string, boolean] {
            if (passwordChange.length === 0) return ["Empty password field.", false]
            else if (passwordChange.length < 8) return ["Password must be at least 8 characters.", false]
            else if (passwordChange.length > 50) return ["Password must be at most 50 characters.", false]
            else if (!(/[0123456789]/.test(passwordChange))) return ["Password must contain at least one number.", false]
            else if (!(/[!@#$%^&*():;,<.>/?]/.test(passwordChange))) return ["Password must contain at least one symbol.", false]
            else if ((/ /.test(passwordChange))) return ["Password cannot contain spaces.", false]
            else if (!(/[qwertyuiopasdfghjklzxcvbnm]/.test(passwordChange) && /[QWERTYUIOPASDFGHJKLZXCVBNM]/.test(passwordChange))) return ["Password requires one capital and one lowercase letter.", false]
            else return ["", true]
        }
    }
})