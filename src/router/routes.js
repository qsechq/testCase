import { OrderPage } from '@/views/OrderPage'
import { AuthPage } from '../views/AuthPage'

export default [
    {
        path: '/auth',
        component: AuthPage,
        name: 'auth'
    },
    {
        path: '/',
        component: OrderPage,
        name: 'OrderPage'
    },
]