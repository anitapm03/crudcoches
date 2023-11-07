<template>
  <div>
    <h1>Eliminar Coche</h1>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();
export default {
    name: "DeleteCoche",
    mounted(){
      service.deleteCocheFetch(this.$route.params.id).then(result => {
        console.log(result);
        this.$router.push("/");
      })
    }
}
</script>

<style>

</style>