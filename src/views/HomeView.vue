<template>
  <div class="home">
    <v-row no-gutters>
      <v-col>
        <ListMain></ListMain>
      </v-col>
    </v-row>  
  </div>
</template>

<script>
import ListMain from "@/components/ListMain.vue";
export default {
  name: "HoMe",
  components: { ListMain },
};
</script>
