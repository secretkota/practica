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
  { key: 'permissions.panel', title: 'Permissions add', description: 'Edit permissions' },
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
  <!-- Overlay -->
  <div v-if="store.selectedRole" class="fixed inset-0 bg-black/20 z-40" @click="closePanel"></div>

  <!-- Sidebar -->
  <aside class="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out
           border-l border-gray-200 flex flex-col" :class="store.selectedRole ? 'translate-x-0' : 'translate-x-full'">
    <!-- Header -->
    <div class="flex items-center justify-between p-6 border-b border-gray-200">
      <div>
        <h2 class="text-lg font-semibold text-gray-900">{{ store.selectedRole?.title }}</h2>
        <p class="text-sm text-gray-500">Permissions</p>
      </div>
      <button @click="closePanel" class="text-gray-400 hover:text-gray-700">
        ✕
      </button>
    </div>

    <input v-model="search" type="text" placeholder="Search for permissions"
      class="w-full mb-4 p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />


    <div class="flex gap-2 mb-4">
      <button class="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
        Reports (13/14)
      </button>
      <button class="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
        Admin Panel (15/18)
      </button>
      <button class="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
        Users (20/40)
      </button>
      <button class="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
        Permissions (2/6)
      </button>
    </div>

    <div class="space-y-3 max-h-96 overflow-y-auto">
      <label v-for="p in filteredPermissions" :key="p.key"
        class="flex items-start gap-3 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
        <input type="checkbox" :checked="store.selectedRole?.permissions?.includes(p.key)" 
          @change="togglePermission(p.key)" class="mt-1 accent-blue-500 w-5 h-5" />
        <div>
          <p class="text-gray-800 font-medium">{{ p.title }}</p>
          <p class="text-gray-500 text-sm">{{ p.description }}</p>
        </div>
      </label>
    </div>


    <!-- Footer (optional) -->
    <div class="p-6 border-t border-gray-200">
      <button class="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        @click="closePanel">
        Close
      </button>
    </div>
  </aside>
</template>
