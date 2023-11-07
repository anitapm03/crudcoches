<template>
  <div>
    <h1>Lista de coches</h1>
    <div v-if="status == false">
            <img src="../assets/images/loading.gif" />
        </div>
        <table v-else class="table table-hover">
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="car in coches" :key="car">
                    <td>{{car.marca}}</td>
                    <td>{{car.modelo}}</td>
                    <td>
                        <img :src="car.imagen" style="width: 150px; heigth: 150px;">
                        </td>
                    <td>
                        <router-link class="btn btn-warning"
                        :to="'/detalle/'+car.idCoche">
                        Detalle
                        </router-link>
                    </td>
                    <td>
                        <router-link class="btn btn-info"
                        :to="'/update/'+car.idCoche">
                        Update
                        </router-link>
                    </td>
                    <td>
                        <router-link class="btn btn-danger"
                        :to="'/delete/'+car.idCoche">
                        Delete
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
    name: "CochesComponent",
    data(){
        return{
            coches: [],
            status: false
        }
    },
    mounted(){
        service.getCochesFetch().then(result => {
            this.coches = result;
            this.status = true;
        })
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