import { defineStore } from "pinia";
import { Role } from "../types/roles";


export const useRolesStore = defineStore('roles', {
    state: () => ({
        roles: [] as Role[]
    }),

    getters: {
        rolesCount: (state) => state.roles.length
    },

    actions: {
        addRole(role: Role) {
            this.roles.push({
                ...role,
                id: Date.now() + Math.floor(Math.random() * 1000)
            })
        },
        removeRole(id: number) {
            this.roles = this.roles.filter(r => r.id !== id)
        }
    }
})