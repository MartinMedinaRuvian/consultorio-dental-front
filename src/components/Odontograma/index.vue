<template>
  <div>
    <h3 class="text-center text-success">Odontograma</h3>
    <div class="contenedor-odontograma">
      <div
        :class="diente.color"
        class="contenedor-diente"
        v-for="diente of dientes"
        :key="diente.numero"
      >
        <h3>{{ diente.numero }}</h3>
      </div>
    </div>
    <div class="contenedor-informativo">
      <div class="contenedor-info_diente">
        <h3 class="color-diente_enfermo">X</h3>
        <p>Enfermo</p>
      </div>
      <div class="contenedor-info_diente">
        <h3 class="color-diente_en_tratamiento">X</h3>
        <p>En Tratamiento</p>
      </div>
      <div class="contenedor-info_diente">
        <h3 class="color-diente_sano">X</h3>
        <p>Sano</p>
      </div>
    </div>
    <button type="submit" class="btn btn-success mt-3">
      Nueva Observación
    </button>
    <div class="contenedor-observaciones mt-5">
      <h4>Observaciones:</h4>
      <div class="tabla-observaciones mt-3">
        <TablaObservacionesComponent :observaciones="observaciones" />
      </div>
    </div>
  </div>
</template>
<script>
import TablaObservacionesComponent from './TablaObservaciones.vue'
export default {
  components: {TablaObservacionesComponent},
  data() {
    return {
      dientes: [
        { numero: 1, estado: "enfermo", color: "bg-danger" },
        { numero: 2, estado: "tratamiento", color: "bg-primary" },
        { numero: 3, estado: "enfermo", color: "bg-danger" },
        { numero: 4, estado: "sano", color: "bg-secondary" },
        { numero: 5, estado: "sano", color: "bg-secondary" },
        { numero: 6, estado: "sano", color: "bg-secondary" },
        { numero: 7, estado: "sano", color: "bg-secondary" },
        { numero: 8, estado: "sano", color: "bg-secondary" },
      ],
      observaciones: [
        { numeroDiente: 1, nombreDiente: 'Incisivo central', fecha: '2022-03-12', observacion: 'Prueba de observación'},
        { numeroDiente: 2, nombreDiente: 'Incisivo central', fecha: '2022-03-12', observacion: 'Esto es una prueba'}
      ]
    };
  },
};
</script>
<style scoped>
.contenedor-odontograma {
  border: solid #000 1px;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px;
}
.contenedor-diente {
  color: #fff;
  width: 50px !important;
  height: 50px !important;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
}
.contenedor-diente h3 {
  font-size: 17px;
  margin-top: 5px;
}
.contenedor-informativo {
  margin-top: 20px;
  display: flex;
}
.contenedor-info_diente {
  display: flex;
  margin-right: 10px;
}
.color-diente_enfermo {
  color: transparent;
  background-color: #dc3545;
  width: 30px !important;
  height: 30px !important;
  border: solid #000 0.5px;
  border-radius: 10px;
}
.color-diente_en_tratamiento {
  color: transparent;
  background-color: #007bff;
  width: 30px !important;
  height: 30px !important;
  border: solid #000 0.5px;
  border-radius: 10px;
}
.color-diente_sano {
  color: transparent;
  background-color: #6c757d;
  width: 30px !important;
  height: 30px !important;
  border: solid #000 0.5px;
  border-radius: 10px;
}
.contenedor-info_diente p {
  margin-top: 2px;
  margin-left: 5px;
}
</style>