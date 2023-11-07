<template>
  <div>
    <h1>Actualizar Coche</h1>

    <form v-on:submit.prevent="actualizarCoche()" style="width: 500px; margin: 0 auto">
      
      <label>Marca</label>
      <input type="text" v-model="coche.marca" class="form form-control"/>
      <br />
      <label>Modelo</label>
      <input type="text" v-model="coche.modelo" class="form form-control"/>
      <br />
      <label>Conductor</label>
      <input type="text" v-model="coche.conductor" class="form form-control"/>
      <br />
      <label>Imagen</label>
      <input type="text" v-model="coche.imagen" class="form form-control"/>
      <br />
      <button class="btn btn-info">Crear!</button>
    </form>

    <br/> 
    <button @click="volver()" class="btn btn-success">Volver a la lista</button>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
    name: "UpdateCoche",
    data(){
      return{
        coche:{
          idCoche: 0,
          marca: "",
          modelo: "",
          conductor: "",
          imagen: ""
        }
      }
    },
    mounted(){
      service.getCocheId(this.$route.params.id).then(result => {
        this.coche = result;
      })
    },
    methods:{
      volver(){
        this.$router.push("/");
      },
      actualizarCoche(){
        service.updateCoche(this.coche).then(result => {
          console.log(result);
          this.$router.push("/");
        })
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