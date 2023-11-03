<template>
    <div class="flex flex-col items-center gap-y-2">
        <div class="h-24 w-24">
            <img class="w-full" src="/icons/exclamation.svg">
        </div>
        <div class="text-center">
            <div class="text-xl font-bold">The page failed to load</div>
            <div class="font-medium">please reload this page or try again later.</div>
        </div>
        <button @click="reload"
            class="flex items-center gap-x-2 py-2 px-2.5 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 active:bg-cyan-700 transition ease-in-out duration-150">
            Reload Page
        </button>
    </div>
</template>

<script setup lang="ts">
const reload = () => window.location.reload()
</script>