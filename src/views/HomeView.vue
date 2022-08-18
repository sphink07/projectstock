<template>
<div class="home">
  <v-row no-gutters>
    <v-col cols="2" md="2" sm="1">
      <MeNu></MeNu>
    </v-col>
    <v-col cols="10" md="10" sm="11">
      <ListMain></ListMain>
    </v-col>
  </v-row>  
</div>
</template>

<script>
import MeNu from '@/components/MeNu.vue';
import ListMain from '@/components/ListMain.vue';
  export default {
    name: 'HoMe',
    components : { MeNu, ListMain}
  }
</script>
