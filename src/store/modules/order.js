import { defineStore } from 'pinia'
import * as api from '../../api'

export const useOrders = defineStore('useOrders', {
    state: () => ({
        orders: [],
        loading: false,
        isShow: false,
        id: 0,
        selectedSort: ''
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
            const inx = this.orders.findIndex((el) => el.id === id)
            try {
                await api.getOrders.updateStatus({id: orderByID[0].id, status: 'Выполнен'})
                this.orders.status[inx] = orderByID[0].status = 'Выполнен'
            } catch (e) {
                console.log(e)
            }
        },
        async deleteOrder(id) {
            const orderByID = this.getOrderById.filter(el => el.id === id)
            try {
                await api.getOrders.deleteOrder({id: orderByID[0].id})
                this.orders = this.orders.filter(el => el.id != id)
            } catch (e) {
                console.log(e)
            }
        },
        async createOrder( {obj} ) {
            try {
                await api.getOrders.createOrder({id: obj.id, address: obj.address, date: obj.date, status: obj.status, comment: obj.comment, name: obj.name})
            } catch (e) {
                console.log(e)
            }
        }
    }
})