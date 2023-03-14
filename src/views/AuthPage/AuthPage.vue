<template>
    <div class="c-container">
        <form class="auth">
            <div class="auth-row">
                <custom-input v-model="auth.login" name="login" class="auth-row__input" placeholder="login"/>
            </div>
            <div class="auth-row">
                <custom-input v-model="auth.pass" name="pass" class="auth-row__input" placeholder="password"/>
            </div>
            <div class="auth-btn">
                <custom-button>Войти</custom-button>
            </div>
        </form>
    </div>
</template>

<script lang="js">
import { useAuth } from '../../store/modules/auth';


export default {
    name: 'AuthPage',
    setup() {
        const auth = useAuth()
        return {
            auth
        }
    }
}
</script>

<style lang="scss" scoped src="./auth-page.scss">

</style>