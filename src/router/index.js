import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('@/views/LandingPage/LandingPageInicio.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import('@/views/LandingPage/LandingPageNosotros.vue')
  },
  {
    path: '/inicio-sesion',
    name: 'InicioSesion',
    component: () => import('@/views/Usuario/UsuarioInicioSesion.vue')
  },
  {
    path: '/crear-cuenta',
    name: 'CrearCuenta',
    component: () => import('@/views/Usuario/UsuarioRegistro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
