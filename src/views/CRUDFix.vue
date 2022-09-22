<template>
  <div>
    <v-container class="text-center">
      <v-row no-gutters>
        <v-col md="6" offset-md="3" sm="6" offset-sm="3">
          <v-col cols="12">
            <span style="font-size: 30px">แก้ไขข้อมูล Stock</span>
          </v-col>
          <br />
          <v-text-field
            label="ประเภท"
            placeholder="กรอกข้อมูลที่ต้องการแก้ไข"
            outlined
            dense
            clearable
            class="ma-2"
          ></v-text-field>
          <v-text-field
            label="รหัสสินค้า"
            placeholder="กรอกข้อมูลที่ต้องการแก้ไข"
            outlined
            dense
            clearable
            class="ma-2"
          ></v-text-field>
          <v-text-field
            label="จำนวน"
            placeholder="กรอกข้อมูลที่ต้องการแก้ไข"
            outlined
            dense
            clearable
            class="ma-2"
          ></v-text-field>
          <v-btn block style="border-radius: 10px" depressed color="success">
            submit
          </v-btn>
          <v-btn
            href="/management"
            dark
            block
            style="border-radius: 10px; margin-top: 20px"
            depressed
            color="#9b9b9b"
          >
            back
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>