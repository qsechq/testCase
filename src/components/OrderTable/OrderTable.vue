<template>
    <table class="c-table">
        <tbody>
            <tr>
                <td class="table-td table-td--sort" @click="$emit('onChange', 'id')">№</td>
                <td class="table-td">Имя клиента</td>
                <td class="table-td table-td--sort" @click="$emit('onChange', 'address')">Адрес</td>
                <td class="table-td">Дата заказа</td>
                <td class="table-td">Статус</td>
                <td class="table-td">Комментарий</td>
            </tr>
            <tr v-for="order in orders" :key="order.id" :class="{ succes: order.status === 'Выполнен' }">
                <td class="table-td">{{ order.id }}</td>
                <td class="table-td">{{ order.name }}</td>
                <td class="table-td">{{ order.address }}</td>
                <td class="table-td">{{ order.date }}</td>
                <td class="table-td">{{ order.status }}</td>
                <td class="table-td">{{ order.comment }}</td>
                <td class="table-td--btn" v-if="user.user.role === 'ADMIN'"><custom-button @click="$emit('onRejected', order.id)"
                        class="table-btn table-btn--reject" /></td>
                <td class="table-td--btn" v-if="order.status != 'Выполнен' && user.user.role ==='ADMIN'"><custom-button
                        @click="$emit('onResolve', order.id)" class="table-btn table-btn--resolve" /></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { onMounted } from 'vue'
import { useUser } from '../../store/modules/user'

/* eslint-disable */
export default {
    props: {
        orders: {
            type: Object,
            required: true,
            default: () => { }
        }
    },
    emits: ['onResolve, onRejected, onChange'],
    name: 'OrderTable',
    setup(props) {
        const user = useUser()
        onMounted(() => {
            user.userInfo()
        })
        return {
            user,
        }
    },
}
</script>

<style lang="scss" scoped src="./order-table.scss"></style>