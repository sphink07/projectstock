<template>
  <div>
    <v-card style="height: 14vh; border-radius: 0px" class="col00">
      <v-row no-gutters >
        <v-col class="hidden-sm-and-down mt-7">
          <span
            style="font-size: 22px; margin-left: 20px; color: #ffffff;">
            <v-icon color="#54f3ff">mdi-clipboard-text-outline</v-icon> รายการสินค้าที่เบิกแล้ว
          </span>
        </v-col>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-col> 
          <v-text-field
          class="mr-5 hidden-sm-and-down mt-6"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          solo
        ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <div
    v-if="this.skeleton == false"
    style="position: absolute; top: 45%; left: 50%; right: 50%"
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
    style="position: absolute; top: 40%; left: 38%;"
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
        :items="Datalist"
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
      skeleton:false,
      Datalist:[],
      search:"",
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
        { text: "User", value: "user" },
        { text: "date", value: "time" },     
      ],
      footerProps: { "items-per-page-options": [11, 20, 25] },
    }
  },
  async mounted() {
    await this.axios.post("https://firstmyapi.onrender.com/stockuser").then((response) =>{
      this.Datalist = response.data;
      this.skeleton = true
    })
  },
};
</script>

<style>
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