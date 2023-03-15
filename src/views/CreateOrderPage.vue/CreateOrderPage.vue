<template>
    <header class="header">
        <header-component></header-component>
    </header>
    <div class="container">
        <form action="POST" class="form">
            <ul class="form-list">
                <li class="form-item">
                    <custom-input v-model="orderName" placeholder="Введите ваше имя" />
                </li>
                <li class="form-item">
                    <custom-input v-model="orderAddress" placeholder="Введите ваш адрес" />
                </li>
                <li class="form-item">
                    <custom-input v-model="orderComment" placeholder="Комментарий" />
                </li>
            </ul>
            <div class="form-btn">
                <custom-button @click.prevent="createOrder">Добавить заказ</custom-button>
            </div>
            <div class="form-error" v-if="error">Заполните поля имя и адрес</div>
        </form>
    </div>
    <modal-component />
</template>

<script lang="js">
import { HeaderComponent } from '@/components/HeaderComponent'
import { useOrders } from '../../store/modules/order'
import { ref } from 'vue'

export default {
    name: 'CreateOrderPage.vue',
    components: { HeaderComponent },
    setup() {
        const order = useOrders()
        const user = JSON.parse(localStorage.getItem('user'))
        let orderName = ref(user.name)
        let orderAddress = ref('')
        let orderComment = ref('')
        let error = ref(false)
        const createOrder = () => {
            const addStartingZero = (value) => value < 10 ? `0${value}` : value
            const weekAgo = new Date(Date.now())
            const formattedDate = [
                weekAgo.getFullYear(),
                addStartingZero(weekAgo.getMonth() + 1),
                addStartingZero(weekAgo.getDate())
            ].reverse().join(' ')
            let obj = {
                id: Date.now(),
                address: orderAddress.value,
                name: orderName.value,
                date: formattedDate,
                status: "Новый",
                comment: orderComment.value
            }
            orderName.value === '' ? error.value = true : error.value = false
            orderAddress.value === '' ? error.value = true : error.value = false
            if (error.value) {
                return
            } else {
                order.createOrder({ obj })
                orderName.value = ""
                orderAddress.value = ""
                orderComment.value = ""
                error.value = false
            }
        }
        return {
            order,
            user,
            orderName,
            orderAddress,
            orderComment,
            createOrder,
            error
        }
    }
}
</script>

<style lang="scss" scoped src="./create-order.scss"></style>