<script setup>
import { reactive } from 'vue';
import { useRolesStore } from '../../../stores/rolesStore';

defineProps({
    open: Boolean
})

const formData = reactive({
    title: '',
    description: ''
})

const rolesStore = useRolesStore()

const handleSubmit = () => {
    rolesStore.addRole({
        title: formData.title,
        description: formData.description
    })

    formData.title = ''
    formData.description = ''

    emit('close')
}

const emit = defineEmits(
    ['close']
)
</script>

<template>
    <div v-show="open" class="border border-default rounded-base mt-2">
        <div class="p-4 border-b border-default flex items-center justify-between">
            <h2 class="text-lg font-semibold">New Role</h2>
            <svg @click="emit('close')" class="w-6 h-6 cursor-pointer text-gray-800 hover:text-red-500 transition"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
        </div>

        <div class="p-4">
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="roleName" class="block mb-2 text-sm font-medium text-heading">Title <span
                            class="text-red-500">*</span></label>
                    <input v-model="formData.title" type="text" id="roleName" name="roleName"
                        class="w-full p-2 border border-default rounded-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter role name" />
                </div>
                <div class="mb-4">
                    <label for="roleDescription" class="block mb-2 text-sm font-medium text-heading">Description</label>
                    <textarea v-model="formData.description" id="roleDescription" name="roleDescription" rows="2"
                        class="resize-none w-full p-2 border border-default rounded-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter role description"></textarea>
                </div>
                <div class="flex flex-col md:flex-row md:justify-start">
                    <button
                        type="button"
                        class="lg:w-100 md:w-40 px-4 py-2 border border-red-500 text-red-500 hover:text-white rounded-base hover:bg-red-600 transition-colors duration-200 font-medium">
                        Delete Role
                    </button>

                    <button type="submit"
                        class="lg:w-300 md:w-40 mt-2 md:mt-0 ml-1 px-4 py-2 border border-green-500
                             text-green-500 hover:text-white hover:bg-green-600 transition-colors duration-200 rounded-base flex justify-center gap-1 font-medium">
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14m-7 7V5" />
                        </svg>
                        Create Role
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>