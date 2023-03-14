<template>
    <header class="header">
        <header-component></header-component>
    </header>
    <div class="container-table">
        <div class="loading" v-if="order.loading">Идет загрузка...</div>
        <div class="table" v-else>
            <order-table :orders="order.orders" @onRejected="deleteOrder" @onResolve="updateStatus" />
        </div>
    </div>
    <modal-component />
</template>

<script lang="js">
import { HeaderComponent } from '@/components/HeaderComponent'
import { OrderTable } from '@/components/OrderTable'
import { onMounted } from 'vue';
import { useOrders } from '../../store/modules/order';

export default {
    name: 'OrderPage',
    components: { HeaderComponent, OrderTable },
    setup() {
        const order = useOrders()
        onMounted(() => {
            order.getOrders()
        })
        return {
            order
        }
    },
    methods: {
        updateStatus(id) {
            this.order.updateStatus(id)
            console.log(id);
        },
        deleteOrder(id) {
            this.order.isShow = true
            this.order.id = id
            console.log(id);
        }
    }
}
</script>

<style lang="scss" scoped src="./order-page.scss"></style>