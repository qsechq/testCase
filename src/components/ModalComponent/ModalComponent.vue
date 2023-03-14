<template>
    <div class="modal" v-if="order.isShow">
        <div class="modal-content">
            <div class="modal-content-text">Вы действительно хотите удалить заказ?</div>
            <div class="modal-content__btns">
                <custom-button >Нет</custom-button>
                <custom-button @click="deleteOrder(order.id)">Да</custom-button>
            </div>
        </div>
    </div>
</template>

<script>
import { useOrders } from '../../store/modules/order';

export default {
    name: 'ModalComponent',
    setup() {
        const order = useOrders()
        const deleteOrder = (id) => {
            order.deleteOrder(id)
            order.isShow = false
        }
        return {
            order,
            deleteOrder
        }
    },
}
</script>

<style lang="scss" scoped src="./modal-component.scss"></style>