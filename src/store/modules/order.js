import { defineStore } from 'pinia'
import * as api from '../../api'

export const useOrders = defineStore('useOrders', {
    state: () => ({
        orders: [],
        loading: false
    }),
    getters: {
        getOrderById() {
            return this.orders.map((el)=> {
                el === el
                return el
            } )
        }
    },
    actions: {
        async getOrders() {
            this.loading = true
            try {
                const { data } = await api.getOrders.getOrders()
                this.orders = data
            } catch (e) {
                console.log(e)
            } finally {
                this.loading = false
            }
        },
        async updateStatus(id) {
            const orderByID = this.getOrderById.filter(el => el.id === id)
            try {
                await api.getOrders.updateStatus({id: orderByID[0].id, status: 'Выполнен'})
            } catch (e) {
                console.log(e)
            }
        }
    }
})