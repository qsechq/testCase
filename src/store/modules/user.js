import { defineStore } from 'pinia'

export const useUser = defineStore('useUser', {
    state: () => ({
        user: ''
    }),
    actions: {
        userInfo() {
            if( localStorage.getItem('user') != null ) {
                this.user = JSON.parse(localStorage.getItem('user'))
            }
        },
        userLogout() {
            localStorage.removeItem('user')
            window.location.reload()
        }
    }
})