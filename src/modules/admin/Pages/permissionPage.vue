<script lang="ts" setup>
import { ref } from 'vue';
import RolesForm from '../components/rolesForm.vue';
import RolesList from '../components/rolesList.vue';
import { useRolesStore } from '../../../stores/rolesStore';
import { Role } from '../../../types/roles';
import RolesPermissons from '../components/rolesPermissonsPanel.vue';
import RolesPermissonsPanel from '../components/rolesPermissonsPanel.vue';


const isOpenForm = ref(false)
const isEdit = ref(false)
const editingRole = ref<Role | null>(null)
const rolesStore = useRolesStore()

const openCreateForm = () => {
    isEdit.value = false
    editingRole.value = null
    isOpenForm.value = true
}

const openEditForm = (role: Role) => {
    isEdit.value = true
    editingRole.value = role
    isOpenForm.value = true
}

const closeForm = () => {
    isOpenForm.value = false
    isEdit.value = false
    editingRole.value = null
}

</script>


<template>
    <div class="p-4 rounded-base border-default">
        <div class="p-4 border border-default rounded-base flex items-center justify-between">
            <div>
                <h2 class="mb-1 text-lg font-semibold text-heading">
                    Roles
                </h2>
                <p class="text-body text-sm">
                    <span class="text-[20px] font-bold">{{ rolesStore.rolesCount }}</span> Roles
                </p>
            </div>
            <div>
                <button @click="openCreateForm"
                    class="flex p-2 rounded-base border-2 border-blue-400 text-blue-400 hover:bg-blue-400  hover:text-white trasition-colors duration-200 hover:scale-105 active:bg-blue-400 active:scale-105 active:text-white">
                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14m-7 7V5" />
                    </svg>
                    Add Role
                </button>
            </div>

        </div>
        <RolesForm 
            :open="isOpenForm" 
            :is-edit="isEdit"
            :role="editingRole"
            @close="closeForm" 
            />
        <RolesList 
            @edit="openEditForm" 
            />
        <RolesPermissonsPanel />
    </div>
</template>