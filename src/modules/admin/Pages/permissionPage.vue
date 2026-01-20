<script lang="ts" setup>
import { ref } from 'vue';
import RolesForm from '../components/rolesForm.vue';
import RolesList from '../components/rolesList.vue';
import { useRolesStore } from '../../../stores/rolesStore';


const isOpenForm = ref(false)
const rolesStore = useRolesStore()

const openFrom = () => {
    isOpenForm.value = !isOpenForm.value
}

const closeForm = () => {
    isOpenForm.value = false
}

</script>


<template>
    <div class="p-4 border border-default border-dashed rounded-base">
        <div class="p-4 border border-default border-dashed rounded-base flex items-center justify-between">
            <div>
                <h2 class="mb-2 text-lg font-semibold text-heading">
                    Roles
                </h2>
                <p class="text-body text-sm">
                    <span class="text-[20px] font-bold">{{ rolesStore.rolesCount }}</span> Roles
                </p>
            </div>
            <div>
                <button @click="openFrom"
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
        <RolesForm :open="isOpenForm" @close="closeForm" />
        <RolesList />
    </div>
</template>