<script setup lang="ts">
import { ref } from 'vue';
import RolesCard from '../../../components/rolesCard.vue';
import RoleDeleteModal from '../../../components/roleDeleteModal.vue';
import { Role } from '../../../types/roles';
import { useRolesStore } from '../../../stores/rolesStore';

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

</script>

<template>
    <div class="mt-2 p-4 border border-default rounded-base">
        <RolesCard v-for="role in rolesStore.roles" :key="role.id" :role="role" @delete="openDeleteModal" />
    </div>

    <RoleDeleteModal v-if="isDeleteOpen && selectedRole" :role="selectedRole" @confirm="confirmDelete"
        @close="isDeleteOpen = false" />
</template>