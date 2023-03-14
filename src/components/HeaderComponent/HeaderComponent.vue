<template>
    <div class="c-header">
        <div class="header-left">
            <nav class="header-nav">
                <ul class="header-nav__list">
                    <li class="header-nav__item">
                        <router-link class="header-nav__link" :to="{ name: 'OrderPage' }">Все Заказы</router-link>
                    </li>
                    <li class="header-nav__item">
                        <router-link class="header-nav__link" :to="{ name: 'auth' }">Добавить заказ</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header-right">
            <div class="header-right__user">
                TEstrest
            </div>
            <custom-button class="header-right__btn">Выйти</custom-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped src="./header-component.scss"></style>