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
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu/Index.vue'),
    meta:{requiereAutorizacion:true}
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
    path: '/registro',
    name: 'Registro',
    component: () => import('@/views/Pacientes/PacienteRegistro.vue'),
    meta:{requiereAutorizacion:true}
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import('@/views/Pacientes/Pacientes.vue'),
    meta:{requiereAutorizacion:true}
  },
  {
    path: '/paciente-editar',
    name: 'PacienteEditar',
    component: () => import('@/views/Pacientes/PacienteEditar.vue'),
    props: true,
    meta:{requiereAutorizacion:true}
  },
  {
    path: '/paciente-eliminar',
    name: 'PacienteEliminar',
    component: () => import('@/views/Pacientes/PacienteEliminar.vue'),
    props: true,
    meta:{requiereAutorizacion:true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const rutaProtegida = to.matched.some(record=> record.meta.requiereAutorizacion);

  if(rutaProtegida && store.state.token === null){
    next({name:'InicioSesion'})
  }else{
    next();
  }
})

export default router
