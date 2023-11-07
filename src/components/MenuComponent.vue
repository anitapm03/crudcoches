<template>
  <div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

            <router-link to="/" class="navbar-brand">Coches</router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li class="nav-item">
                        <router-link to="/crear" class="nav-link active">Crear un coche</router-link>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>

  </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>

</style>