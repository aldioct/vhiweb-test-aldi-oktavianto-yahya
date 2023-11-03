<template>
    <div class="mb-4 flex justify-between items-center p-4 bg-white rounded-b-xl">
        <div class="capitalize font-bold text-lg">Hi, User</div>
        <button
            class="py-2 px-2.5 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 active:bg-cyan-700 transition ease-in-out duration-150"
            @click="signOut({ callbackUrl: '/' })">
            Logout
        </button>
    </div>
</template>

<script setup lang="ts">
const { signOut } = useAuth()
</script>