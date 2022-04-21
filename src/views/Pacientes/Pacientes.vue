<template>
<div class="text-center">
    <Mensaje :mensaje="mensaje" />
    <h5 class="text-success">Pacientes</h5>
    <div class="contenedor-filtro_general">
      <div class="contenedor-filtro">
        <label for="" class="col-md-12">Seleccione filtro:</label>
        <select class="form-select form-control col-md-12" aria-label="Seleccione el filtro" v-model="filtroPor">
          <option value="nombres" selected>Nombres </option>
          <option value="apellidos">Apellidos</option>
          <option value="identificacion">Identificación</option> 
        </select>
      </div>
      <div class="contenedor-input">
        <label for="" class="col-md-12">Buscar por {{ filtroPor }}:</label>
        <div class="contenedor-input_buscar">
          <input @keypress="verPacientes()" type="text" class="form-control text-center formulario" placeholder="Ingrese el dato" v-model="filtro">
          <button class="btn btn-outline-success ml-2" @click="verPacientes()"><span class="icon-Lupa"></span></button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success mt-3" data-toggle="modal" data-target="#categoriaGuardarModal">
        Nuevo
    </button>
    <ModalGuardar/>
    <Tabla :pacientes="pacientes"/>
</div>
</template>
<script>
import Tabla from '@/components/Pacientes/TablaPacientes.vue'
import ModalGuardar from '@/components/Pacientes/ModalGuardarPacientes.vue'
import Mensaje from '@/components/parciales/Mensaje.vue'
export default {
  components:{
    Tabla,
    ModalGuardar,
    Mensaje
  },
  data(){
    return{
        pacientes:[],
        mensaje:{ver:false},
        filtroPor: 'nombres',
        filtro:''
    }
  },
  created(){
    this.verPacientes()
  },
  methods:{
    verPacientes(){
        let filtro = this.filtro
        this.axios.get('pacientes/' + filtro)
        .then(respuesta =>{
            this.pacientes = respuesta.data
        })
        .catch((error)=>{
            this.crearMensaje(error.response.data.mensaje, 'danger')
        })
    }
  }
}
</script>
<style lang="css">
  .contenedor-filtro_general {
    margin-top: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
  } 
  .contenedor-input {
    margin-left: 10px;
  }
  .contenedor-input_buscar {
    display: flex;
  }
</style>