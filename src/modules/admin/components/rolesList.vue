<script setup lang="ts">
import { ref } from 'vue';
import RolesCard from '../../../components/rolesCard.vue';
import RoleDeleteModal from '../../../components/roleDeleteModal.vue';
import { Role } from '../../../types/roles';
import { useRolesStore } from '../../../stores/rolesStore';

defineProps<{
  isEdit: boolean
}>()


const emits = defineEmits<{
    (e: 'edit', role: Role): void
}>()

const rolesStore = useRolesStore()

const isDeleteOpen = ref(false)
const selectedRole = ref<Role | null>(null)

const openDeleteModal = (role: Role) => {
    selectedRole.value = role
    isDeleteOpen.value = true
}

const confirmDelete = () => {
    if (!selectedRole.value) return
    rolesStore.removeRole(selectedRole.value!.id)
    isDeleteOpen.value = false
    selectedRole.value = null
}

const onEdit = (role: Role) => {
    emits('edit', role)
}

</script>

<template>
    <div class="mt-2 p-4 rounded-base shadow-sm">
        <div v-if="rolesStore.rolesCount == 0" class="text-sm flex justify-center font-bold text-gray-500">No roles</div>
        <RolesCard 
            v-for="role in rolesStore.roles" 
            :key="role.id" 
            :role="role"
            :is-edit="isEdit"
            @delete="openDeleteModal"
            @edit="onEdit" 
            />
    </div>

    <RoleDeleteModal v-if="isDeleteOpen && selectedRole" :role="selectedRole" @confirm="confirmDelete"
        @close="isDeleteOpen = false" />
</template>