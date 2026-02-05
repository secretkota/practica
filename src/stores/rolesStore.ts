import { defineStore } from "pinia";
import { Role } from "../types/roles";


export const useRolesStore = defineStore('roles', {
    state: () => ({
        roles: [] as Role[],
        selectedRoleId: null as number | null
    }),

    getters: {
        rolesCount: (state) => state.roles.length,
        selectedRole: (state) => state.roles.find(role => role.id === state.selectedRoleId)
    },

    actions: {
        selectRole(id: number) {
            this.selectedRoleId = id
        },
        addRole(role: Role) {
            this.roles.push({
                ...role,
                permissions: [],
                id: Date.now() + Math.floor(Math.random() * 1000)
            })
        },
        updateRole(updateData: { id: number; title: string; description: string }) {
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