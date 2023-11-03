<template>
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="max-w-2xl min-h-screen right-0 left-0 m-auto relative">
            <UiAlert />
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAlertStore } from '~/stores/alert'

const { $bus } = useNuxtApp()

const alertStore = useAlertStore()

onMounted(() => {
    $bus.$on('showAlert', (payload: any) => {
        alertStore.showAlert(payload)
    })

    $bus.$on('hideAlert', () => {
        alertStore.hideAlert()
    })
})
</script>