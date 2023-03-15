import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  try {
    if ( localStorage.getItem('user') === null) {
      next(authRoute ? null : { name: 'auth' })
    } else {
      localStorage.getItem('user')
      next(authRoute ? { name: 'OrderPage' } : null)
    }
  } catch (error) {
    if ( localStorage.getItem('user') === null) {
      next(authRoute ? null : { name: 'auth' })
    }
  }
})


export default router
