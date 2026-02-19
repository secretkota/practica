<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRolesStore } from '../../../stores/rolesStore'
import { usePermissionsStore } from '../../../stores/permisson'

const store = useRolesStore()
const permissionsStore = usePermissionsStore()
const search = ref('')
const activeGroup = ref<string | null>(null)


function toggleGroupFilter(groupName: string) {
  if (activeGroup.value === groupName) {
    activeGroup.value = null
  } else {
    activeGroup.value = groupName
  }
}

permissionsStore.loadPermissions()

const filteredPermissions = computed(() => {
  if (!store.selectedRole) return []

  return permissionsStore.permissions.filter(p =>
    (!activeGroup.value || p.group === activeGroup.value) &&
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

const permissionTags = computed(() => {
  const userPerms = store.selectedRole?.permissions || []

  return Object.entries(permissionsStore.groupedPermissions).map(
    ([groupName, perms]) => {
      const userCount = perms.filter(p => userPerms.includes(p.code)).length
      const totalCount = perms.length
      return {
        groupName,
        label: `${groupName} (${userCount}/${totalCount})`
      }
    }
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
  <aside class="h-full rounded-base
           flex flex-col shadow-sm animate-slide-in">
    <div class="p-5 flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold text-heading mb-3">
          {{ store.selectedRole?.title }}
        </h2>
        <p class="text-sm text-body">
          {{ store.selectedRole?.permissions.length || 0 }} Permissions
        </p>
      </div>

      <button @keyup.esc="closePanel" @click="closePanel" class="w-8 h-8 flex items-center justify-center
               hover:bg-gray-100 rounded-3xl transition">
        ✕
      </button>
    </div>

    <div class="px-3 pb-0 relative">
      <svg class="absolute left-7 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
      </svg>

      <input v-model="search" type="text" placeholder="Search for permissions" class="w-full pl-10 pr-3 py-2 rounded-base
               border border-default text-sm
               focus:outline-none focus:ring-1 focus:ring-blue-400 bg-gray-50" />
    </div>
    <div class="px-5 pt-3 flex flex-wrap justify-center">
      <span v-for="tag in permissionTags" :key="tag.groupName" @click="toggleGroupFilter(tag.groupName)"
        :class="[
        'first:rounded-l last:rounded-r px-10 py-2 text-xs font-bold border border-default text-body-subtle hover:bg-gray-100 sm:w-full-md:w-10',
        activeGroup === tag.groupName ? 'bg-gray-100 border-gray-100' : 'text-body-subtle border-default'
        ]"
        >
        {{ tag.label }}
      </span>
    </div>
    <div class="flex-1 overflow-y-auto p-5 space-y-3">
      <label v-for="p in filteredPermissions" :key="p.code" class="flex gap-2 mb-3
               hover:bg-gray-50 cursor-pointer">
        <input type="checkbox" class="mt-4 mr-1 w-5 h-5 accent-blue-500 rounded-xs"
          :checked="store.selectedRole?.permissions?.includes(p.code)" @change="togglePermission(p.code)" />

        <div>
          <p class="font-medium text-heading mb-1">{{ p.group }}</p>
          <p class="text-sm text-body">{{ p.description }}</p>
        </div>
      </label>
    </div>

  </aside>
</template>
