<template>
  <div>
    <v-app-bar
      scroll-target="#scrolling-techniques-7"
      height="100"
      style="background-color: #cdcdcd"
      class="col00"
    >
      <span
        class="hidden-sm-and-down mt-2"
        style="
          margin-top: 10px;
          font-size: 22px;
          margin-right: 35px;
          margin-left: 20px;
          color: #ffffff;
        "
      ><v-icon  color="#FFFF66">mdi-clipboard-text</v-icon> รายการสินค้า 
      </span>
      <v-spacer class="hidden-sm-and-down" ></v-spacer>
      <v-text-field
      style=" margin-left:500px;"
      class=" mr-5 mt-8 hidden-sm-and-down"
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      solo
    ></v-text-field>
    <!-- --------------------------------------sm and down----------------------------------------- -->
    <v-text-field
    class="mt-8 hidden-md-and-up"
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    solo
  ></v-text-field>
  <!-- --------------------------------------sm and down----------------------------------------- -->
    </v-app-bar>
    <v-card height="86vh">
      <v-data-table
        height="77.5vh"
        flat
        :headers="headers"
        :items="StocK1"
        :search="search"
        :footer-props="footerProps"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      StocK1: [],
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Codenumber", value: "code" },
        { text: "Quantity", value: "qty" },
      ],
      footerProps: { "items-per-page-options": [11, 20, 25] },
      search:'',
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/stock").then((response) => {
      this.StocK1 = response.data;
      console.log(response.data);
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
</style>