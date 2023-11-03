import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        intent: 'success',
        title: '',
        isShow: false,
        onDismiss: undefined
    }),
    actions: {
        showAlert({
            intent = 'success',
            title = '',
            onDismiss = undefined,
            auto = false
        }) {
            this.intent = intent
            this.title = title
            this.isShow = true
            this.onDismiss = onDismiss

            if (auto)
                setTimeout(() => this.hideAlert(), 3000)
        },
        hideAlert() {
            this.intent = 'success'
            this.title = ''
            this.isShow = false
            this.onDismiss = undefined
        }
    }
})
