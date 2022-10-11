<template>
  <div>
    <v-app>
      <v-card style="height: 14vh; border-radius: 0px" class="col00">
        <v-row align="center" justify="center">
          <v-col class="hidden-sm-and-down">
            <span
              class="hidden-sm-and-down"
              style="font-size: 22px; margin-left: 20px; color: #ffffff"
              ><v-icon color="#FFFF66">mdi-clipboard-text</v-icon> รายการสินค้า
            </span></v-col
          >
          <v-spacer class="hidden-sm-and-down"></v-spacer>
          <v-col>
            <v-text-field
              style=" ;"
              class="mr-5 hidden-sm-and-down mt-6"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              solo
            ></v-text-field>
            <!-- --------------------------------------sm and down----------------------------------------- -->

            <v-text-field
              style=""
              class="hidden-md-and-up ma-2 pa-2"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- --------------------------------------sm and down----------------------------------------- -->
      </v-card>
      <div
        v-if="this.skeleton == false"
        style="position: absolute; top: 45%; left: 40%; right: 50%"
        class="hidden-sm-and-down"
      >
        <v-progress-circular
          :size="150"
          :width="15"
          color="#959595"
          indeterminate
        ></v-progress-circular>
      </div>
      <div
        v-if="this.skeleton == false"
        style="position: absolute; top: 40%; left: 28%;"
        class="hidden-md-and-up"
      >
        <v-progress-circular
          :size="150"
          :width="15"
          color="#959595"
          indeterminate
        ></v-progress-circular>
      </div>
      <v-card v-if="this.skeleton == true" style="height: 85vh">
        <v-data-table
          height="74vh"
          flat
          :headers="headers"
          :items="StocK1"
          :search="search"
          :footer-props="footerProps"
        ></v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      StocK1: [],
      headers: [
        {
          text: "Category",
          align: "start",
          sortable: false,
          value: "Category",
        },
        { text: "PartNo", value: "PartNo" },
        { text: "Value", value: "Value" },
        { text: "quantity", value: "quantity" },
      ],
      footerProps: { "items-per-page-options": [11, 20, 25] },
      search: "",
      skeleton: false,
    };
  },
  async mounted() {
    await this.axios
      .post("https://firstmyapi.onrender.com/stock")
      .then((response) => {
        this.StocK1 = response.data;
        this.skeleton = true;
      });
  },
};
</script>

<style scoped>
.full {
  position: relative;
  left: -25px;
  right: 0 px;
}
.highlist {
  height: 89.5vh;
}
.col00 {
  background: rgb(54, 54, 54);
  background: linear-gradient(
    90deg,
    rgba(54, 54, 54, 1) 0%,
    rgba(173, 173, 173, 1) 100%
  );
}
::v-deep .v-data-table-header {
  background-color: #dcdcdc;
}
</style>