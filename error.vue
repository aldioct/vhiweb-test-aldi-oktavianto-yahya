<template>
    <NuxtLayout name="guest">
        <div class="lg:min-h-screen max-w-2xl fixed bottom-1 w-full flex">
            <div
                class="lg:m-auto lg:p-14 lg:min-w-[360px] lg:w-[600px] p-4 m-4 w-full bg-white flex flex-col gap-y-16 border rounded-xl">
                <div class="flex flex-col items-center gap-y-4">
                    <div class="h-24 w-24">
                        <img class="w-full" src="/icons/exclamation.svg">
                    </div>
                    <div class="text-xl font-bold">{{ title }}</div>
                    <a href="/"
                        class="flex items-center gap-x-2 py-2 px-2.5 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 active:bg-cyan-700 transition ease-in-out duration-150">
                        Back to home
                    </a>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError() as any;

const title = error.value?.statusCode === 404 ? 'Page not found' : 'The page failed to load'
</script>