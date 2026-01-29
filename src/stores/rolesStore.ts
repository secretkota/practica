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
        updateRole(updateData: {id: number; title: string; description: string}) {
            const role = this.roles.find(role => role.id === updateData.id)
            if (!role) return

            role.title = updateData.title
            role.description = updateData.description
        },
        removeRole(id: number) {
            this.roles = this.roles.filter(r => r.id !== id)
        }
    }
})