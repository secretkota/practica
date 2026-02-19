import { defineStore } from 'pinia'
import { Permission } from '../types/roles'


export const usePermissionsStore = defineStore('permissions', {
  state: () => ({
    permissions: [] as Permission[],
  }),

    getters: {
    groupedPermissions: (state) => {
      return state.permissions.reduce((acc, perm) => {
        if (!acc[perm.group]) acc[perm.group] = []
        acc[perm.group].push(perm)
        return acc
      }, {} as Record<string, Permission[]>)
    }
  },

  actions: {
    loadPermissions() {
        this.permissions = [
        {
          code: 'reports.view',
          name: 'View Reports',
          group: 'Reports',
          description: 'View all reports'
        },
        {
          code: 'admin.panel',
          name: 'Access Admin Panel',
          group: 'Administration',
          description: 'Access admin panel'
        },
        {
          code: 'admin.access',
          name: 'Access to system',
          group: 'Administration',
          description: 'Access to system'
        },
        {
          code: 'users.manage',
          name: 'Manage Users',
          group: 'Users',
          description: 'Manage users'
        },
        {
          code: 'permissions.edit',
          name: 'Edit Permissions',
          group: 'Permissions',
          description: 'Edit permissions'
        },
        {
          code: 'permissions.add',
          name: 'Add Permissions',
          group: 'Permissions',
          description: 'Add permissions'
        },
        {
          code: 'permissions.delete',
          name: 'Delete Permissions',
          group: 'Permissions',
          description: 'Delete permissions'
        }
      ]
    }
    }
  })
