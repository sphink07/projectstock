<template>
  <div>
    <v-app style="background-color:#cdcdcd">
      <v-container class="text-center">
        <v-row no-gutters>
          <v-col md="6" offset-md="3" sm="6" offset-sm="3">
            <v-col cols="12">
              <v-span style="font-size: 30px">เพิ่มข้อมูลใน Stock</v-span>
            </v-col>
            <br />
            <v-text-field
              label="ประเภท"
              placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
              outlined
              dense
              clearable
              class="ma-2"
            ></v-text-field>
            <v-text-field
              label="รหัสสินค้า"
              placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
              outlined
              dense
              clearable
              class="ma-2"
            ></v-text-field>
            <v-text-field
              label="จำนวน"
              placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
              outlined
              dense
              clearable
              class="ma-2"
            ></v-text-field>
            <v-btn block style="border-radius: 10px" depressed class="btnsub">
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
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btnsub {
  background: rgb(255, 248, 10);
  background: linear-gradient(
    90deg,
    rgba(255, 248, 10, 1) 0%,
    rgba(178, 255, 5, 1) 50%,
    rgba(44, 255, 0, 1) 100%
  );
}
</style>