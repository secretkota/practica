<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRolesStore } from '../../../stores/rolesStore'

const store = useRolesStore()
const search = ref('')

const allPermissions = [
  { key: 'reports.view', title: 'Reports', description: 'View all reports' },
  { key: 'admin.panel', title: 'Admin Panel', description: 'Access admin panel' },
  { key: 'users.manage', title: 'Users', description: 'Manage users' },
  { key: 'permissions.edit', title: 'Permissions', description: 'Edit permissions' },
  { key: 'permissions.add', title: 'Permissions add', description: 'Edit permissions' },
]

const filteredPermissions = computed(() => {
  if (!store.selectedRole) return []
  return allPermissions.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
})

function togglePermission(permission: string) {
  const role = store.selectedRole
  if (!role) return

  const index = role.permissions.indexOf(permission)
  index === -1
    ? role.permissions.push(permission)
    : role.permissions.splice(index, 1)
}

function closePanel() {
  store.selectedRoleId = null
}
</script>

<template>
  <aside
    class="h-full rounded-base bg-white border border-default
           flex flex-col shadow-sm animate-slide-in"
  >
    <!-- Header -->
    <div class="p-5 border-b border-default flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold text-heading">
          {{ store.selectedRole?.title }}
        </h2>
        <p class="text-sm text-body">
          {{ allPermissions.length }} Permissions
        </p>
      </div>

      <button
        @click="closePanel"
        class="w-8 h-8 flex items-center justify-center
               rounded-base border border-default
               hover:bg-gray-100 transition"
      >
        ✕
      </button>
    </div>

    <!-- Search -->
    <div class="p-5 pb-0">
      <input
        v-model="search"
        type="text"
        placeholder="Search for permissions"
        class="w-full px-3 py-2 rounded-base
               border border-default text-sm
               focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
    </div>

    <!-- Tags -->
    <div class="px-5 pt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in ['Reports (13/14)', 'Admin Panel (15/18)', 'Users (20/40)', 'Permissions (2/6)']"
        :key="tag"
        class="px-3 py-1 text-xs rounded-full
               bg-gray-100 text-body"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Permissions -->
    <div class="flex-1 overflow-y-auto p-5 space-y-3">
      <label
        v-for="p in filteredPermissions"
        :key="p.key"
        class="flex gap-3 p-3 rounded-base border border-default
               hover:bg-gray-50 cursor-pointer"
      >
        <input
          type="checkbox"
          class="mt-1 w-5 h-5 accent-blue-500"
          :checked="store.selectedRole?.permissions?.includes(p.key)"
          @change="togglePermission(p.key)"
        />

        <div>
          <p class="font-medium text-heading">{{ p.title }}</p>
          <p class="text-sm text-body">{{ p.description }}</p>
        </div>
      </label>
    </div>

    <!-- Footer -->
    <div class="p-5 border-t border-default">
      <button
        @click="closePanel"
        class="w-full py-2 rounded-base
               bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Close
      </button>
    </div>
  </aside>
</template>

