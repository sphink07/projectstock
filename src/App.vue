<template>
  <v-app>
    <v-app-bar
      app
      color="#1C1C1C"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/stock.png"
          transition="scale-transition"
          width="40"
        />

      <h1 class="shrink mt-1 hidden-sm-and-down">Stock System</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="vulbtn === true" 
        href="https://ipstthailand.com/"
        target="_blank"
        text
      >
        <span class="mr-4" >ipst smart platform</span>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/IPST.png"
          transition="scale-transition"
          width="40"
        />
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
      vulbtn : true
  }),
  methods: {
    Changg(){

    }
  },
};
</script>

<style>
 .color{
  background-color:#363636;
 }
</style>
