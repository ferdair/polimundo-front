<template>
  <v-app>
    <v-main>
      <div>
        <v-app-bar color="blue lighten-5">
          <v-toolbar-title>
            <v-btn text to="/">
              <div class="blue--text text--darken-1 font-weight-bold">
                Polimundo.com
              </div>
            </v-btn></v-toolbar-title
          >

          <v-spacer></v-spacer>
        </v-app-bar>
      </div>

      <router-view />
    </v-main>

    <main-footer />
  </v-app>
</template>

<script>
export default {
  name: "Base",
};
</script>
