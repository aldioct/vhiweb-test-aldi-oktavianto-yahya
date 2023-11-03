<template>
    <div class="absolute w-full px-2">
        <div v-if="isShow" :class="containerClass">
            <div class="shrink-0">
                <img :src="iconComponent" :class="iconClass">
            </div>
            <div class="flex-1 space-y-2 min-w-0">
                <h2 v-if="title" :class="titleClass">
                    {{ title }}
                </h2>
            </div>
            <div v-if="onDismiss" class="shrink-0">
                <button :class="closeButtonClass" @click="onDismiss">
                    <img src="/icons/xmark.svg">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { cva } from "class-variance-authority"
import { useAlertStore } from '~/stores/alert'

const alertStore = useAlertStore()

const intent = computed(() => alertStore.intent)
const title = computed(() => alertStore.title)
const isShow = computed(() => alertStore.isShow)
const onDismiss = computed(() => alertStore.onDismiss)

const containerClass = computed(() => {
    return cva("flex p-4 rounded-md space-x-3", {
        variants: {
            intent: {
                success: "bg-green-100",
                danger: "bg-red-100",
            },
        },
    })({
        intent: intent.value as any,
    });
});

const iconClass = computed(() => {
    return cva("w-6 h-6", {
        variants: {
            intent: {
                success: "text-green-600",
                danger: "text-red-500",
            },
        },
    })({
        intent: intent.value as any,
    });
});

const titleClass = computed(() => {
    return cva("font-medium", {
        variants: {
            intent: {
                success: "text-green-900",
                danger: "text-red-900",
            },
        },
    })({
        intent: intent.value as any,
    });
});

const closeButtonClass = computed(() => {
    return cva("p-0.5 rounded-md -m-1", {
        variants: {
            intent: {
                success: "text-green-900/70 hover:text-green-900 hover:bg-green-200 active:bg-green-300",
                danger: "text-red-900/70 hover:text-red-900 hover:bg-red-200 active:bg-red-300",
            },
        },
    })({
        intent: intent.value as any,
    });
});

const iconComponent = computed(() => {
    const icons = {
        success: '/icons/checkcircle.svg',
        danger: '/icons/xcircle.svg',
    };

    return icons[intent.value];
});
</script>