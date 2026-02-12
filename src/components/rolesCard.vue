<script setup lang="ts">
import { useRolesStore } from '../stores/rolesStore';
import { Role } from '../types/roles';

defineProps<{
    role: Role
}>()

defineEmits<{
    (e: 'delete', role: Role): void
    (e: 'edit', role: Role): void
}>()


const store = useRolesStore()
</script>

<template>
    <div id="container"
        class="mt-2 border-b border-gray-200 flex items-start justify-between py-2 hover:bg-gray-50 px-2 "
        :class="{ 'border-b-4 border-gray-500': store.selectedRoleId === role.id }" @click="store.selectRole(role.id)">
        <div id="info-card">
            <h3 id="info-card__title" class="text-md text-gray-600 font-bold"
                :class="{ 'text-gray-900': store.selectedRole?.id === role.id }">
                {{ role.title }}</h3>
            <p id="info-card__subtitle" class="text-sm text-body mt-1">
                {{ role.description }}
            </p>
        </div>
        <div id="icons-card" class="flex gap-2">
            <svg @click="$emit('edit', role)" class="w-6 h-6 text-gray-800 hover:text-blue-500 active:text-blue-500 active:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
            </svg>
            <svg @click="$emit('delete', role)" id="icons-card__delete"
                class="w-6 h-6 text-gray-800 hover:text-red-500 active:scale-105" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </div>
    </div>
</template>
