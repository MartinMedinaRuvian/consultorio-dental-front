<template>
  <div class="text-center container-inicio-sesion">
      <Mensaje :mensaje="mensaje"/>
      <p class="mt-4 titulo-modulo">Iniciar sesión</p>
      <div class="d-flex justify-content-center align-items-center container">
          <div class="row">
              <form @submit.prevent="iniciarSesion()" class="formulario">
                  <div class="form-group">
                      <input type="text" placeholder="Usuario" class="form-control" v-model="usuario.username">
                  </div>
                  <div class="form-group">
                      <input type="password" placeholder="Contraseña" class="form-control" v-model="usuario.password">
                  </div>
                  <div class="form-group">
                      <button type="submit" class="btn btn-success">Continuar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>
<script>
import Mensaje from '@/components/parciales/Mensaje.vue'
export default {
    data() {
       return{
           usuario:{},
           usuarioIngresado:{},
           mensaje:{ver:false}
       }
    },
    methods:{
        crearMensaje(contenido, color){
            this.mensaje.ver = true;
            this.mensaje.contenido = contenido
            this.mensaje.color = color
        },
        iniciarSesion(){
            this.axios.post('usuarios/inicioSesion', this.usuario)
            .then((respuesta)=>{
                if(respuesta.status === 200){                    
                    this.usuarioIngresado = respuesta.data;
                    if(this.usuarioIngresado.tipo == 1){
                        this.guardarInfoCliente();
                    }else{
                        this.guardarInfoVendedor();
                    }
                }
            })
            .catch((error) => {
              this.crearMensaje(error.response.data.mensaje, 'danger')
            })
        }
    },
    components:{
        Mensaje
    }
}
</script>