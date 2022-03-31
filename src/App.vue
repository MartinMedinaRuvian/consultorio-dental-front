<template>
  <div id="app" class="container">
    <NavegacionLanding />
    <router-view class="contenedor-vistas"/>
    <Footer/>
  </div>
</template>
<script>
import NavegacionLanding from './components/Navegacion/NavegacionLanding.vue'
import NavegacionUsuario from './components/Navegacion/NavegacionUsuario.vue'
import Footer from './components/parciales/Footer.vue'
import { mapGetters } from "vuex";
export default {
  components: { 
    NavegacionLanding, 
    NavegacionUsuario,
    Footer 
  }
}
</script>