<template>
  <div class="text-center container-inicio-sesion">
    <Mensaje :mensaje="mensaje"/>
    <p class="mt-4 titulo-modulo">Registro Paciente</p>
    <div class="d-flex justify-content-center align-items-center container">
        <div class="row">
          <form @submit.prevent="registro()" class="formulario">
							<div class="form-group">
								<label for="select">Seleccione Tipo Documento:</label>
								<select id="select" class="form-select form-control" aria-label="Default select example" v-if="tiposDocumentos.length > 0" v-model="paciente.id_tipo_documento">
									<option :value="tipoDocumento.id" v-for="tipoDocumento in tiposDocumentos" :key="tipoDocumento.id">{{tipoDocumento.nombre}}</option>
								</select>
							</div>
							<div class="form-group">
								<input type="text" placeholder="Número Documento" v-model="paciente.documento" class="form-control">
							</div>
              <div class="form-group">
								<input type="text" placeholder="Nombres" class="form-control" v-model="paciente.nombre">
              </div>
              <div class="form-group">
								<input type="text" placeholder="Apellidos" class="form-control" v-model="paciente.apellido">
              </div>
							<div class="form-group">
								<label for="select">Seleccione Fecha de Nacimiento:</label>
								<input type="date" class="form-control" v-model="paciente.fecha_nacimiento">
              </div>
							<div class="form-group">
								<label for="select">Seleccione Género:</label>
								<select id="select" class="form-select form-control" aria-label="Default select example" v-if="opcionesGenero.length > 0" v-model="paciente.genero">
									<option :value="opcionGenero.id" v-for="opcionGenero in opcionesGenero" :key="opcionGenero.id">{{opcionGenero.descripcion}}</option>
								</select>
							</div>
              <div class="form-group">
                  <input type="text" placeholder="Email" class="form-control" v-model="paciente.email">
              </div>
              <div class="form-group">
                  <input type="phone" placeholder="Numero de télefono" class="form-control" v-model="paciente.telefono">
              </div>
              <div class="form-group">
                  <input type="text" placeholder="Dirección de residencia" class="form-control" v-model="paciente.direccion">
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
           paciente:{id_tipo_documento:1, genero:'H', estado:0},
           pacienteIngresado:{},
           mensaje:{ver:false},
					 tiposDocumentos: [{id:1, nombre:'Cédula'}],
					 opcionesGenero: [{id:1, descripcion: 'Hombre'}, {id:2, descripcion: 'Mujer'}]
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
            this.axios.post('pacientes', this.paciente)
            .then((respuesta)=>{
              console.warn(respuesta, 'R pacientes')
            })
            .catch((error) => {
              this.crearMensaje(error.response.data.mensaje, 'danger')
            })
        },
				verTiposDocumentos () {
					this.axios.get('tipodocumentolistar', {
             headers: {
                Authorization: localStorage.getItem('token')
             }
          }) 
          .then((respuesta) => {
            console.warn(respuesta)
            this.tiposDocumentos = respuesta.data
          })
				}
    },
    components:{
        Mensaje
    }
}
</script>