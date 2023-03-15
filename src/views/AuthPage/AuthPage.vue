<template>
    <div class="c-container">
        <form @submit.prevent="" class="auth">
            <div class="auth-row">
                <custom-input v-model="auth.login" name="login" class="auth-row__input" placeholder="login"/>
            </div>
            <div class="auth-row">
                <custom-input v-model="auth.pass" name="pass" class="auth-row__input" placeholder="password"/>
            </div>
            <div class="auth-btn">
                <custom-button @click="authRequests">Войти</custom-button>
            </div>
            <div class="auth-error" v-if="auth.error">Пользователь не найден</div>
        </form>
    </div>
</template>

<script lang="js">
import { useAuth } from '../../store/modules/auth';


export default {
    name: 'AuthPage',
    setup() {
        const auth = useAuth()
        const authRequests = () => {
            if( auth.pass >= 8 ) {
                auth.auth(auth.login, auth.pass)
            } else {
                auth.error = true
            }
        }
        return {
            auth,
            authRequests
        }
    }
}
</script>

<style lang="scss" scoped src="./auth-page.scss">

</style>