import { defineStore } from 'pinia'

export const useAuth = defineStore('useAuth', {
    state: () => ({
        login: '',
        pass: '',
    })
})