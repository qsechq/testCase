import { defineStore } from 'pinia'
import * as api from '../../api'

export const useAuth = defineStore('useAuth', {
    state: () => ({
        login: '',
        pass: '',
        error: false
    }),
    actions: {
        async auth(name, password) {
            try {
                const { data } = await api.auth.auth({name: name, password: password})
                if( data.length != 0 ) {
                    localStorage.setItem('user', JSON.stringify(data[0]))
                    window.location.reload()
                } else {
                    this.error = true
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
})