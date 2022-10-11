<template>
  <div>
    <v-app style="background-color:rgb(215, 213, 215)">
      <v-container class="text-center">
        <v-row no-gutters>
          <v-col md="6" offset-md="3" sm="6" offset-sm="3">
              <v-container style="background-color:rgb(249, 249, 252) ;">
                <v-col cols="12">
                  <span style="text-align: center; color:#000 ;font-size: 55px; ">เพิ่มข้อมูลใน Stock</span>
                </v-col>
                <br />
                <v-alert type="success" :value="alert">
                  บันทึกข้อมูลสำเร็จ
                </v-alert>

                <v-text-field v-model="Category" label="Category" placeholder="กรอกข้อมูลที่ต้องการเพิ่ม" outlined dense
                  clearable class="ma-2">
                </v-text-field>
                <v-text-field v-model="PartNo" id="1" label="PartNo" placeholder="กรอกข้อมูลที่ต้องการเพิ่ม" outlined
                  dense clearable class="ma-2">
                  {{ abc }}
                </v-text-field>
                <v-text-field v-model="Value" label="Value" placeholder="กรอกข้อมูลที่ต้องการเพิ่ม" outlined dense
                  clearable class="ma-2">
                </v-text-field>
                <v-text-field v-model="quantity" label="quantity" placeholder="กรอกข้อมูลที่ต้องการเพิ่ม" outlined dense
                clearable class="ma-2">
              </v-text-field>

                <v-btn @click="Click1" block style="border-radius: 10px" depressed class="teal " height="50px"
                  width="10px">
                  submit
                </v-btn>
                <v-btn href="/management" dark block style="border-radius: 10px; margin-top: 20px" depressed
                  color="#000" height="50px" width="10px">
                  back
                </v-btn>
              </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import router from '@/router';
export default {
  data() {
    return {
      Category: "",
      PartNo: "",
      Value: "",
      quantity:"",
      alert: false,
    };
  },
  methods: {
   async Click1() {
      let Category = this.Category;
      let PartNo = this.PartNo;
      let Value = this.Value;
      let quantity = this.quantity;
      await this.axios
        .post("https://firstmyapi.onrender.com/insert", { Category, PartNo, Value, quantity})
        .then((response) => {
          console.log(response);
          this.alert = true;
        })
        .catch(function (error) {
          document.write("ส่งข้อมูลไม่สำเร็จ" + "<br>" + "สาเหตุ :" + error);

        });
      setTimeout(() => (this.alert = false), 2000);
      if (this.alert === true) {
        setTimeout(() => (router.push({ path: '/management' })), 2000);
      }
    },
  },
};
</script>

<style>
.btnsub {
  background: rgb(210, 255, 67);
  background: linear-gradient(90deg,
      rgba(210, 255, 67, 1) 0%,
      rgba(137, 255, 113, 1) 44%,
      rgba(84, 255, 233, 1) 92%);
}

.cdm {
  background: rgb(255, 128, 250);
  background: radial-gradient(circle,
      rgba(255, 128, 250, 1) 19%,
      rgba(91, 95, 251, 1) 63%,
      rgba(32, 32, 32, 1) 100%);
}


</style>