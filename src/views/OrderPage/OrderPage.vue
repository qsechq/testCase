<template>
    <header class="header">
        <header-component></header-component>
    </header>
    <div class="container-table">
        <div class="loading" v-if="order.loading">Идет загрузка...</div>
        <div class="table" v-else>
            <order-table :orders="sortedPosts" @onChange="changeSort" @onRejected="deleteOrder" @onResolve="updateStatus" />
        </div>
    </div>
    <modal-component />
</template>

<script lang="js">
import { HeaderComponent } from '@/components/HeaderComponent'
import { OrderTable } from '@/components/OrderTable'
import { onMounted, computed } from 'vue';
import { useOrders } from '../../store/modules/order';

export default {
    name: 'OrderPage',
    components: { HeaderComponent, OrderTable },
    setup() {
        const order = useOrders()
        const updateStatus = (id) => {
            order.updateStatus(id)
        }
        const deleteOrder = (id) => {
            order.isShow = true
            order.id = id
        }
        const changeSort = (arg) => {   
            order.selectedSort = arg
        }
        const sortedPosts = computed(() => {
            return [...order.orders].sort((order1, order2) => order1[order.selectedSort] > order2[order.selectedSort] ? 1 : -1)
        })
        onMounted(() => {
            order.getOrders()
        })
        return {
            order,
            deleteOrder,
            updateStatus,
            sortedPosts,
            changeSort
        }
    }
}
</script>

<style lang="scss" scoped src="./order-page.scss"></style>