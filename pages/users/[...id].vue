<template>
    <div class="flex flex-col gap-y-8 p-4 bg-white rounded-xl">
        <h1 class="text-2xl font-bold flex items-center gap-x-4">
            <button @click="router.back()" class="w-6 h-6"><img class="w-full" src="/icons/arrowleft.svg"></button>
            User Detail
        </h1>

        <UiErrorState v-if="isError" />

        <UiUserDetailLoading v-if="isLoading" />

        <div v-else
            class="flex sm:flex-row flex-col gap-4 p-4 items-center border rounded-xl border-slate-300 !shadow-[0_4px_12px_rgba(20,18,20,0.12)]">
            <div class="sm:w-1/3 w-full border border-slate-300 rounded-full">
                <img class="w-full rounded-full" :src="detail?.avatar" alt="Michael" />
            </div>
            <div class="sm:w-2/3 w-full flex">
                <div class="flex flex-col gap-y-2 mr-1">
                    <div class="font-medium">First name </div>
                    <div class="font-medium">Last name </div>
                    <div class="font-medium">Email </div>
                </div>
                <div class="flex flex-col gap-y-2 mr-2">
                    <div class="font-medium">: </div>
                    <div class="font-medium">: </div>
                    <div class="font-medium">: </div>
                </div>
                <div class="flex flex-col gap-y-2">
                    <div class="font-medium">{{ `${detail?.first_name}` }}</div>
                    <div class="font-medium">{{ `${detail?.last_name}` }}</div>
                    <div class="font-medium">{{ detail?.email }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import axios from 'axios'

const router = useRouter()
const userId = computed(() => String(router.currentRoute.value?.params.id))

const detail: Ref<any> = ref(undefined)
const isLoading = ref(true)
const isError = ref(false)

const fetchUserDetail = async () => {
    isError.value = false
    try {
        const res = await axios.get(`https://reqres.in/api/users/${userId.value}`)
        if (res.data) {
            detail.value = res.data.data
        }
    } catch {
        // log error
        isError.value = true
    }
    isLoading.value = false
}

onMounted(() => {
    fetchUserDetail()
})

</script>