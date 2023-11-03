<template>
    <div class="flex flex-col gap-y-4">
        <div v-for="i of 3" :key="i"
            class="flex gap-x-4 p-4 items-center border rounded-xl border-slate-300 !shadow-[0_4px_12px_rgba(20,18,20,0.12)]">
            <div class="w-24 h-24 flex-none flex-none border border-slate-300 bg-slate-300 rounded-full animate-pulse">
            </div>
            <div class="w-full flex flex-col gap-y-3">
                <div class="w-2/3 h-7 rounded-full bg-slate-300 animate-pulse"></div>
                <div class="w-2/3 h-7 rounded-full bg-slate-300 animate-pulse"></div>
            </div>
        </div>
    </div>
</template>