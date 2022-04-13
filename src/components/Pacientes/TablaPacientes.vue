<template>
  <div class="mt-5">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Identificación</th>
          <th scope="col">Edad</th>
          <th scope="col">Fecha Nacimiento</th>
          <th scope="col">Dirección</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Fecha registro</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paciente in pacientes" :key="paciente.codigo">
          <td>{{ paciente.codigo }}</td>
          <td>{{ paciente.descripcion }}</td>
          <td>
              <button class="btn btn-outline-warning" @click="editar(paciente)"><span class="icon-Lapiz"></span></button>
              <button class="btn btn-outline-danger ml-2" @click="eliminar(paciente)"><span class="icon-Papelera"></span></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props:{
      pacientes:[]
  },
  methods:{
      eliminar(paciente){
            this.$router.push({ name: 'PacientesEliminar', params: { paciente }})
      },
      editar(paciente){
            this.$router.push({ name: 'PacientesEditar', params: { paciente }})
      }
  }
}
</script>