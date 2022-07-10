<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <div
          class="
            text-md-h2 text-sm-h3
            red--text
            text--darken-1
            font-weight-bold
          "
        >
          Encuentra vuelos baratos para tu próximo viaje
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <div class="text-md-h4 text-sm-h5 font-weight-bold">
          Busca y compra fácilmente tu próximo pasaje en avion con Polimundo.com
        </div>
      </v-col>
    </v-row>

    <Buscador></Buscador>
  </v-container>
</template>

<script>
import Buscador from "@/components/Buscador.vue";
export default {
  name: "Home",
  components: { Buscador },
};
</script>
