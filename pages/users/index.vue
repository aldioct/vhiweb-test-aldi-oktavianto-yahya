<template>
    <div class="flex flex-col gap-y-4 p-4 bg-white rounded-xl">
        <h1 class="text-2xl font-bold">User List</h1>

        <UiErrorState v-if="isError" />

        <template v-else>
            <UiUserListLoading v-if="isLoading" />

            <template v-else>
                <div v-if="userList.length > 0" class="flex flex-col gap-y-4">
                    <NuxtLink :href="`/users/${userDetail.id}`" v-for="(userDetail, i) of userList" :key="i"
                        class="flex gap-x-4 items-center p-4 border rounded-xl border-slate-300 !shadow-[0_4px_12px_rgba(20,18,20,0.12)]">
                        <div class="w-24 h-24 flex-none border border-slate-300 rounded-full">
                            <img class="w-full rounded-full" :src="userDetail.avatar" alt="Michael" />
                        </div>
                        <div class="flex flex-col w-full">
                            <div class="text-lg font-bold">{{ `${userDetail.first_name} ${userDetail.last_name} ` }}</div>
                            <div class="text-sm font-medium">{{ userDetail.email }}</div>
                        </div>
                    </NuxtLink>
                </div>

                <UiPagination :total-pages="totalPages" :current-page="page" @go-to-page="goToPage" />
            </template>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import axios from 'axios'

const route = useRoute()

const userList: Ref<any[]> = ref([])

const isLoading = ref(true)
const isError = ref(false)
const page = ref(1)
const totalPages = ref(0)

const fetchUsers = async () => {
    isLoading.value = true
    isError.value = false
    try {
        const res = await axios.get(`https://reqres.in/api/users`, {
            params: {
                page: page.value
            }
        })

        if (res.data) {
            userList.value = res.data.data
            totalPages.value = res.data.total_pages
        }
    } catch {
        // Log error
        isError.value = true
    }
    isLoading.value = false
}

const goToPage = (number: number) => {
    page.value = number
    const query = number > 1 ? { page: number } : {}

    navigateTo({ query }, { replace: true })
    fetchUsers()
}

onMounted(() => {
    page.value = Number(route.query?.page) || 1
    fetchUsers()
})
</script>