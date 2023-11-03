<template>
    <div
        class="lg:m-auto lg:p-14 lg:min-w-[360px] lg:w-[600px] p-4 m-4 w-full bg-white flex flex-col gap-y-16 border rounded-xl ">
        <h1 class="text-3xl font-bold text-center">
            Login
        </h1>

        <form class="flex flex-col gap-y-10" @submit.prevent="doSignIn()">
            <div class="relative">
                <div class="flex gap-x-2.5 border-b pb-2.5">
                    <div class="p-2 w-10">
                        <img src="/icons/user.svg">
                    </div>
                    <input v-model="email" id="email" type="text" class="w-full p-2" placeholder="Type your email"
                        autofocus />
                </div>
                <span v-if="v$.email.$error" class="absolute left-[58px] top-[52px] text-red-500 font-medium text-sm">{{
                    v$.email.$errors[0]?.$message }}</span>
            </div>

            <div class="relative">
                <div class="flex gap-x-2.5 border-b pb-2.5">
                    <div class="p-2 w-10">
                        <img src="/icons/lock.svg">

                    </div>
                    <input v-model="password" id="password" type="password" class="w-full p-2"
                        placeholder="Type your password" />
                </div>
                <span v-if="v$.password.$error" class="absolute left-[58px] top-[52px] text-red-500 font-medium text-sm">{{
                    v$.password.$errors[0]?.$message }}</span>
            </div>

            <button
                class="py-2 px-2.5 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 active:bg-cyan-700 transition ease-in-out duration-150"
                type="submit" :disabled="isLoading">
                Login
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email as isEmail } from '~/utils/validators'
import axios from 'axios'

const { signIn } = useAuth()
const { $bus } = useNuxtApp()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const rules = {
    email: {
        required: required('Email is required'),
        email: isEmail('Email is invalid')
    },
    password: {
        required: required('Password is required'),
        minLength: minLength('Password minimiun 8 characters', 8)
    },
}

const v$ = useVuelidate(rules, { email, password })

const doSignIn = async () => {
    v$.value.$touch()
    if (v$.value.$invalid) return true

    isLoading.value = true
    try {
        const body = {
            email: email.value,
            password: password.value
        }
        const response = await axios.post('/api/login', body)

        if (response?.data) {
            $bus.$emit('showAlert', {
                title: 'Login Successfull',
            })
            signIn('credentials', { email, token: response.data }, { callbackUrl: '/users' })
        }
    } catch (error: any) {
        $bus.$emit('showAlert', {
            intent: 'danger',
            title: error.response.data.meta.message || 'Login failed',
            auto: true
        })
        isLoading.value = false
    }
}
</script>