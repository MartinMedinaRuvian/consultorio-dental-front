<template>
  <div>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col"># de Diente</th>
          <th scope="col">Nombre Diente</th>
          <th scope="col">Fecha</th>
          <th scope="col">Observación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="observacion in observaciones" :key="observacion.codigo">
          <td>{{ observacion.numeroDiente }}</td>
          <td>{{ observacion.nombreDiente }}</td>
          <td>{{ observacion.fecha }}</td>
          <td>{{ observacion.observacion }}</td>
          <td>
            <button class="btn btn-outline-warning" @click="editar(observacion)">
              <span class="icon-Lapiz"></span>
            </button>
            <button
              class="btn btn-outline-danger ml-2"
              @click="eliminar(observacion)"
            >
              <span class="icon-Papelera"></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    observaciones: [],
  },
  methods: {
    eliminar(observacion) {
      this.$router.push({ name: "observacionEliminar", params: { observacion } });
    },
    editar(observacion) {
      this.$router.push({ name: "observacionEditar", params: { observacion } });
    },
  },
};
</script>