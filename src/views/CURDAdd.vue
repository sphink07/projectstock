<template>
  <div>
    <v-app>
      <v-container class="text-center">
        <v-row no-gutters>
          <v-col md="6" offset-md="3" sm="6" offset-sm="3">
            <v-col cols="12">
              <span style="font-size: 30px">เพิ่มข้อมูลใน Stock</span>
            </v-col>
            <br />
            <v-alert type="success" :value="alert">
              บันทึกข้อมูลสำเร็จ
            </v-alert>
            <v-text-field
              v-model="name"
              label="ชื่อ"
              placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
              outlined
              dense
              clearable
              class="ma-2"
            ></v-text-field>
            <v-text-field
              v-model="code"
              id="1"
              label="รหัสสินค้า"
              placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
              outlined
              dense
              clearable
              class="ma-2"
            >
              {{ abc }}</v-text-field
            >
            <v-text-field
              v-model="qty"
              label="จำนวน"
              placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
              outlined
              dense
              clearable
              class="ma-2"
            ></v-text-field>
            <v-btn
              @click="Submit()"
              block
              style="border-radius: 10px"
              depressed
              class="btnsub"
            >
              submit
            </v-btn>
            <v-btn
              @click="Goback()"
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
import Swal from "sweetalert2";
export default {
  data() {
    return {
      name: "",
      code: "",
      qty: "",
      alert: false,
    };
  },
  methods: {
    Submit() {
      Swal.fire({
            title: "บันทึกสำเร็จ!",
            text: "ข้อมูลถูกบันทึกใน stock แล้ว ",
            icon: "success",
            showConfirmButton: false,
            timer:1400
          }).then(() => {
            this.Click1()
            this.$router.push("/management")
            window.location.reload();
          });
    },
    async Click1() {
      let name = this.name;
      let code = this.code;
      let qty = this.qty;
      await this.axios
        .post("http://localhost:3000/insert", { name, code, qty })
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          document.write("ส่งข้อมูลไม่สำเร็จ" + "<br>" + "สาเหตุ :" + error);
        });
    },
    Goback() {
      this.$router.push("/management");
    },
  },
};
</script>

<style>
.btnsub {
  background: rgb(210, 255, 67);
  background: linear-gradient(
    90deg,
    rgba(210, 255, 67, 1) 0%,
    rgba(137, 255, 113, 1) 44%,
    rgba(84, 255, 233, 1) 92%
  );
}
.cdm {
  background: rgb(255, 128, 250);
  background: radial-gradient(
    circle,
    rgba(255, 128, 250, 1) 19%,
    rgba(91, 95, 251, 1) 63%,
    rgba(32, 32, 32, 1) 100%
  );
}
</style>