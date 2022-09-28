<template>
  <v-app class="color">
    <v-app-bar app dark>
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

      <v-btn
        v-if="vulbtn === true"
        href="https://ipstthailand.com/"
        target="_blank"
        text
      >
        <span class="mr-4">ipst smart platform</span>
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
      <div>
        <v-row no-gutters>
          <v-col cols="2" v-if="!['LogIn' , 'ManageMentFix' , 'ManageMentAdd' , 'SelectList'].includes($route.name)">
            <MeNu></MeNu>
          </v-col>
          <v-flex class="hidden-sm-and-down">
            <router-view />
          </v-flex>
          <v-flex class="hidden-md-and-up"
          v-if="!['home' , 'SeLect' , 'ManageMent' , 'ReCord'].includes($route.name)"
          >
            <router-view />
          </v-flex>
          <v-col cols="10" class="hidden-md-and-up" 
          v-if="!['LogIn' , 'ManageMentFix' , 'ManageMentAdd' , 'SelectList'].includes($route.name)"> 
            <router-view />
          </v-col>

        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import MeNu from "@/components/MeNu.vue";
export default {
  name: "app",
  data: () => ({
    vulbtn: true,
  }),
  components: { MeNu },
  methods: {
    Changg() {},
  },
  mounted() {
    let userchack = localStorage.getItem("UserAdmin")
    if(userchack === "ADMIN1" || userchack === "ADMIN2"){
      console.log("login seccess")
    } else {
      this.$router.push("/login")
    }
  },
  updated() {
    let userchack = localStorage.getItem("UserAdmin")
    if(userchack === "ADMIN1" || userchack === "ADMIN2"){
      console.log("login seccess")
    } else {
      this.$router.push("/login")
    }
  },
};
</script>

<style>
.color {
  background-color: #363636;
}
.main { 
  left: 0px;
  right: 0px;
}

</style>
