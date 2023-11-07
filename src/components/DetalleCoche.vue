<template>
  <div>
    <h1>Detalle del coche</h1>
    <br/>
    <h2>ID coche: {{$route.params.id}}</h2>
    <br />
    <div v-if="status == false">
      <img src="../assets/images/loading.gif" />
    </div>

    <div v-else>
      <h2 >Marca y modelo: {{coche.marca}}, {{coche.modelo}}</h2>
      <br/>
      <h3>Conductor: {{coche.conductor}}</h3>
      <br/>
      <img :src="coche.imagen" style="width: 300px; heigth: 300px;" />
    </div>
    <br/>
    <button @click="volver()" class="btn btn-success">Volver a la lista</button>
    
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
    name: "DetalleCoche",
    data(){
      return{
        coche: null,
        status: false
      }
    },
    mounted(){
      service.getCocheIdFetch(this.$route.params.id).then(result => {
        this.coche = result;
        this.status = true;
      })
    },
    methods: {
      volver(){
        this.$router.push("/");
      }
    }
}
</script>

<style>
/* {
    "idCoche": 0,
    "marca": "string",
    "modelo": "string",
    "conductor": "string",
    "imagen": "string"
  } */
</style>