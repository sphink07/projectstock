<template>
  <div>
    <v-app style="background-color: rgb(215, 213, 215)">
      <v-container class="text-center">
        <v-row no-gutters>
          <v-col md="6" offset-md="3" sm="6" offset-sm="3">
            <v-card>
              <v-container style="background-color: rgb(249, 249, 252)">
                <v-col cols="12">
                  <span style="text-align: center; color: #000; font-size: 55px"
                    >แก้ไขข้อมูล Stock</span
                  >
                </v-col>
                <br />
                <v-text-field
                  v-model="Category"
                  label="Category"
                  placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
                  outlined
                  dense
                  clearable
                  class="ma-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="PartNo"
                  id="1"
                  label="PartNo"
                  placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
                  outlined
                  dense
                  clearable
                  class="ma-2"
                >
                  {{ abc }}
                </v-text-field>
                <v-text-field
                  v-model="Value"
                  label="Value"
                  placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
                  outlined
                  dense
                  clearable
                  class="ma-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="quantity"
                  label="quantity"
                  placeholder="กรอกข้อมูลที่ต้องการเพิ่ม"
                  outlined
                  dense
                  clearable
                  class="ma-2"
                >
                </v-text-field>
                <v-btn
                  @click="sent()"
                  block
                  style="border-radius: 10px"
                  depressed
                  class="teal"
                  height="50px"
                >
                  submit
                </v-btn>
                <v-btn
                  href="/management"
                  dark
                  block
                  style="border-radius: 10px; margin-top: 20px"
                  depressed
                  color="#000"
                  height="50px"
                  width="10px"
                >
                  back
                </v-btn>
              </v-container>
            </v-card>
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
      Category: "",
      PartNo: "",
      Value: "",
      quantity: "",
      id: "",
    };
  },
  mounted() {
    this.id = localStorage.getItem("idfix");
    this.axios
      .get(`https://firstmyapi.onrender.com/select/${this.id}`)
      .then((response) => {
        this.Category = response.data.data.Category;
        this.PartNo = response.data.data.PartNo;
        this.Value = response.data.data.Value;
        this.quantity = response.data.data.quantity;
      })
      .catch(function (error) {
        document.write("ส่งข้อมูลไม่สำเร็จ" + "<br>" + "สาเหตุ :" + error);
      });
  },

  methods: {
    sent() {
      Swal.fire({
        title: "ยืนยันรายการ",
        text: "ต้องการที่จะบันทึกหรือไม่",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#01ba03",
        cancelButtonColor: "#d33",
        confirmButtonText: "ตกลง",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "บันทึกสำเร็จ",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            let id = this.id;
            let Category = this.Category;
            let PartNo = this.PartNo;
            let Value = this.Value;
            let quantity = this.quantity;
            this.axios.post(
              `https://firstmyapi.onrender.com/update`,
              {
                id,
                Category,
                PartNo,
                Value,
                quantity,
              }
            );
            this.$router.push("/management")
            window.location.reload();
          });
        }
      });
    },
  },
};
</script>

<style>
</style>
