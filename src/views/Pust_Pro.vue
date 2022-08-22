<template>
<div class="home">
  <v-row no-gutters>
    <v-col cols="2" md="2" sm="1">
      <MeNu></MeNu>
    </v-col>
    <v-col cols="10" md="10" sm="11">
      <SeLectPro></SeLectPro>
    </v-col>
  </v-row>  
</div>
</template>

<script>
import MeNu from "@/components/MeNu.vue";
import SeLectPro from "@/components/SeLectPro.vue";
export default {
  components: { MeNu, SeLectPro },
};
</script>

<style>
</style>