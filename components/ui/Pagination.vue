<template>
    <div class="flex flex-col items-center">
        <div class="flex gap-x-2">
            <button @click="goToPage(1)" class="w-8 h-8 py-1 px-2.5 text-white rounded-xl" :class="{
                ['bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 transition ease-in-out duration-150']: currentPage !== 1,
                ['bg-slate-400']: currentPage === 1
            }" :disabled="currentPage === 1">
                <img class="w-full" src="/icons/chevronleft.svg" />
            </button>
            <button v-for="y of totalPages" :key="`pages-btn-${y}`" @click="goToPage(y)"
                class="py-1 px-2.5 text-white rounded-xl" :class="{
                    ['bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 transition ease-in-out duration-150']: currentPage !== y,
                    ['bg-slate-400']: currentPage === y
                }" :disabled="currentPage === y">
                {{ y }}
            </button>
            <button @click="goToPage(totalPages)" class="w-8 h-8 py-1 px-2.5 text-white rounded-xl" :class="{
                ['bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 transition ease-in-out duration-150']: currentPage !== totalPages,
                ['bg-slate-400']: currentPage === totalPages
            }" :disabled="currentPage === totalPages">
                <img class="w-full" src="/icons/chevronright.svg" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    totalPages: number
    currentPage: number
}>()

const emit = defineEmits<{
    (e: 'goToPage', number: number): void
}>()

const goToPage = (number: number) => {
    emit('goToPage', number)
}
</script>

