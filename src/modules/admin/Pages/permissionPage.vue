<script lang="ts" setup>
import { ref } from 'vue'
import RolesForm from '../components/rolesForm.vue'
import RolesList from '../components/rolesList.vue'
import RolesPermissonsPanel from '../components/rolesPermissonsPanel.vue'
import { useRolesStore } from '../../../stores/rolesStore'
import type { Role } from '../../../types/roles'

const rolesStore = useRolesStore()

const isOpenForm = ref(false)
const isEdit = ref(false)
const editingRole = ref<Role | null>(null)

function openCreateForm() {
  isEdit.value = false
  editingRole.value = null
  isOpenForm.value = true
}

function openEditForm(role: Role) {
  isEdit.value = true
  editingRole.value = role
  isOpenForm.value = true
}

function closeForm() {
  isOpenForm.value = false
  isEdit.value = false
  editingRole.value = null
}
</script>

<template>
<div class="grid gap-6 min-h-130 transition-all duration-300 mt-5"
     :class="rolesStore.selectedRole ? 'grid-cols-12' : 'grid-cols-1'">

  <div :class="rolesStore.selectedRole ? 'col-span-5 space-y-4' : 'col-span-12 space-y-4'"
       class="transition-all duration-300">

    <div class="p-4 rounded-base shadow-sm bg-white flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold text-heading">Roles</h2>
        <p class="text-sm text-body">
          <span class="text-xl font-bold">{{ rolesStore.rolesCount }}</span> Roles
        </p>
      </div>

      <button
        @click="openCreateForm"
        class="flex items-center gap-2 px-2 py-1 rounded-base
               border-2 border-blue-400 text-blue-400
               
               hover:bg-blue-400 hover:text-white transition"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h14m-7 7V5"
          />
        </svg>
        Add Role
      </button>
    </div>

    <RolesForm
      :open="isOpenForm"
      :is-edit="isEdit"
      :role="editingRole"
      @close="closeForm"
    />

    <RolesList @edit="openEditForm" />
  </div>

  <div
    v-if="rolesStore.selectedRole"
    class="col-span-7 rounded-base animate-fade-in transition-all duration-300"
  >
    <RolesPermissonsPanel />
  </div>

</div>

</template>
