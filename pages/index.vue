<template>
    <div class="lg:min-h-screen max-w-2xl fixed bottom-1 w-full flex">
        <Login />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'guest',
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/users',
    }
})
</script>