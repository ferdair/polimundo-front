<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <Buscador></Buscador>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-row class="mt-5">
        <v-col cols="12" v-for="vuelo in vuelosList" :key="vuelo.id">
          <v-card>
            <v-container>
              <v-row justify="space-between">
                <v-col cols="4">
                  <p class="text-h5">{{ vuelo.aerolinea }}</p>
                </v-col>
                <v-col cols="4">
                  <p class="text-h4 blue--text">{{ vuelo.precio }}</p></v-col
                >
              </v-row>
              <v-row justify="start">
                <v-col cols="1"
                  ><v-icon color="blue">radio_button_checked </v-icon> </v-col
                ><v-col cols="6" class="text-left">
                  <span class="font-weight-bold blue--text">{{
                    vuelo.hora_salida
                  }}</span>
                  - {{ vuelo.ciudad_origen }}</v-col
                >
              </v-row>
              <v-row justify="start">
                <v-col cols="1"><v-icon>more_vert </v-icon> </v-col>
              </v-row>
              <v-row justify="start">
                <v-col cols="1"><v-icon>place </v-icon> </v-col>
                <v-col cols="4" class="text-left"
                  ><span class="font-weight-bold">{{
                    vuelo.hora_llegada
                  }}</span>
                  -
                  {{ vuelo.ciudad_destino }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4"
                  ><v-icon color="blue">flight </v-icon>
                  {{ vuelo.n_escalas }} escala<template
                    v-if="vuelo.n_escalas > 0"
                    >s</template
                  >
                </v-col>
                <v-col cols="4"
                  ><v-icon>watch_later </v-icon> {{ vuelo.duracion }}h
                </v-col>
                <v-col cols="4">
                  <v-btn color="warning" dark> Seleccionar </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Buscador from "@/components/Buscador.vue";

export default {
  name: "Search",
  components: { Buscador },
  computed: {
    vuelosList() {
      return this.$store.state.vuelos.lista;
    },
  },
};
</script>
