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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      ],
    }
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