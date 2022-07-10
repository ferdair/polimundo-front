<template>
  <v-card tile>
    <v-row justify="center" no-gutters>
      <v-col cols="6" md="3" class="mt-2 pl-2">
        <v-text-field label="Origen" outlined>
          <template v-slot:append-outer
            ><v-btn icon v-bind="attrs" v-on="on">
              <v-icon left> swap_horiz </v-icon></v-btn
            ></template
          >
        </v-text-field>
      </v-col>

      <v-col cols="5" md="2" class="mt-2">
        <v-text-field label="Destino" outlined></v-text-field>
      </v-col>
      <v-col cols="4" md="2" class="mt-2 pl-3">
        <v-text-field
          label="Fecha de Salida"
          outlined
          type="date"
        ></v-text-field>
      </v-col>
      <v-col cols="4" md="2" class="mt-2">
        <v-text-field
          label="Fecha de Retorno"
          outlined
          type="date"
        ></v-text-field>
      </v-col>
      <v-col cols="4" md="2" class="mt-4">
        <v-btn color="success" to="/search">
          <v-icon left>search </v-icon>
          Busqueda
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Buscador",
};
</script>
