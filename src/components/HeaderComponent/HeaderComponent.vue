<template>
    <div class="c-header">
        <div class="header-left">
            <nav class="header-nav">
                <ul class="header-nav__list">
                    <li class="header-nav__item">
                        <router-link class="header-nav__link" :to="{ name: 'OrderPage' }">Все Заказы</router-link>
                    </li>
                    <li class="header-nav__item">
                        <router-link class="header-nav__link" :to="{ name: 'CreateOrderPage' }">Добавить заказ</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header-right">
            <div class="header-right__user">
                {{ user.user.name }}
            </div>
            <custom-button class="header-right__btn" @click="user.userLogout()">Выйти</custom-button>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { useUser } from '../../store/modules/user';

export default {
    name: 'HeaderComponent',
    setup() {
        const user = useUser()
        onMounted(() => {
            user.userInfo()
        })
        return {
            user
        }
    }
}
</script>

<style lang="scss" scoped src="./header-component.scss"></style>