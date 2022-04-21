<template>
  <div class="text-center container-inicio-sesion">
    <Mensaje :mensaje="mensaje"/>
    <p class="mt-4 titulo-modulo">Registro</p>
    <div class="d-flex justify-content-center align-items-center container">
        <div class="row">
          <form @submit.prevent="registro()" class="formulario">
							<div class="form-group">
								<label for="select">Seleccione Tipo Documento:</label>
								<select id="select" class="form-select form-control" aria-label="Default select example" v-if="tiposDocumentos.length > 0" v-model="usuario.tipoDoc">
									<option :value="tipoDocumento.codigo" v-for="tipoDocumento in tiposDocumentos" :key="tipoDocumento.codigo">{{tipoDocumento.descripcion}}</option>
								</select>
							</div>
							<div class="form-group">
								<input type="text" placeholder="Número Documento" v-model="usuario.NroDoc" class="form-control">
							</div>
              <div class="form-group">
								<input type="text" placeholder="Primer Nombre" class="form-control" v-model="usuario.primerNombre">
              </div>
              <div class="form-group">
								<input type="text" placeholder="Segundo Nombre" class="form-control" v-model="usuario.segundoNombre">
              </div>
              <div class="form-group">
								<input type="text" placeholder="Primer Apellido" class="form-control" v-model="usuario.primerApellido">
              </div>
              <div class="form-group">
								<input type="text" placeholder="Segundo Apellido" class="form-control" v-model="usuario.segundoApellido">
              </div>
							<div class="form-group">
								<label for="select">Seleccione Fecha de Nacimiento:</label>
								<input type="date" class="form-control" v-model="usuario.fechaNacimiento">
              </div>
							<div class="form-group">
								<label for="select">Seleccione Género:</label>
								<select id="select" class="form-select form-control" aria-label="Default select example" v-if="opcionesGenero.length > 0" v-model="usuario.genero">
									<option :value="opcionGenero.valor" v-for="opcionGenero in opcionesGenero" :key="opcionGenero.valor">{{opcionGenero.descripcion}}</option>
								</select>
							</div>
              <div class="form-group">
                  <input type="text" placeholder="Email" class="form-control" v-model="usuario.direccionCorreo">
              </div>
              <div class="form-group">
                  <input type="phone" placeholder="Numero de télefono" class="form-control" v-model="usuario.nroTelefono">
              </div>
              <div class="form-group">
                  <input type="text" placeholder="Dirección de residencia" class="form-control" v-model="usuario.direccionResidencia">
              </div>
              <div class="form-group">
                  <input type="password" placeholder="Contraseña" class="form-control" v-model="usuario.pwd">
              </div>
							<div class="form-group">
								<button type="submit" class="btn btn-success">Guardar</button>
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
           usuario:{tipoDoc:1, genero:'H'},
           usuarioIngresado:{},
           mensaje:{ver:false},
					 tiposDocumentos: [{codigo:1, descripcion:'Cédula'}],
					 opcionesGenero: [{valor:'H', descripcion: 'Hombre'}, {valor:'M', descripcion: 'Mujer'}]
       }
    },
		created () {
			this.verTiposDocumentos()
		},
    methods:{
        crearMensaje(contenido, color){
            this.mensaje.ver = true;
            this.mensaje.contenido = contenido
            this.mensaje.color = color
        },
        registro(){
            this.axios.post('odontologo/crear', this.usuario)
            .then((respuesta)=>{
                if(respuesta.status === 200){                    
                  this.$router.push('/inicio-sesion')
                }
            })
            .catch((error) => {
              this.crearMensaje(error.response.data.mensaje, 'danger')
            })
        },
				verTiposDocumentos () {
					this.tiposDocumentos = [{codigo:1, descripcion:'Cédula'}]
				}
    },
    components:{
        Mensaje
    }
}
</script>