<template>
    <header class="header">
        <header-component></header-component>
    </header>
    <div class="container-table">
        <div class="loading" v-if="order.loading">Идет загрузка...</div>
        <div class="table" v-else>
            <order-table :orders="orderList.order" @onResolve="updateStatus" />
        </div>
    </div>
</template>

<script lang="js">
import { HeaderComponent } from '@/components/HeaderComponent'
import { OrderTable } from '@/components/OrderTable'
import { onMounted, computed, watch, reactive } from 'vue';
import { useOrders } from '../../store/modules/order';

export default {
    name: 'OrderPage',
    components: { HeaderComponent, OrderTable },
    setup() {
        const order = useOrders()
        const orderList = reactive({
            order :computed(() => order.getOrderById)
        })
        onMounted(() => {
            order.getOrders()
        })
        watch(() => order.getOrders())
        return {
            order,
            orderList
        }
    },
    methods: {
        updateStatus(id) {
            this.order.updateStatus(id)
            console.log(id);
        }
    }
}
</script>

<style lang="scss" scoped src="./order-page.scss"></style>