<template>
  <div class="home">
    <v-row no-gutters>
      <v-col cols="2" md="2" sm="1">
        <MeNu></MeNu>
      </v-col>
      <v-col cols="10" md="10" sm="11">
        <v-app-bar style="background-color: #d4d4d4" elevate-on-scroll>
          <v-container>
            <v-row>
              <v-span style="margin-top: 5px; font-size: 18px"
                >จัดการข้อมูล</v-span
              >
              <v-spacer></v-spacer>
              <v-btn
                href="/management/add"
                dark
                small
                fab
                style="background-color: #00bf00"
                elevation="5"
              >
                <v-icon> mdi-package-variant-closed-plus </v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-app-bar>
        <v-row>
          <v-col>
            <v-simple-table height="835px">
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in StocK1" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.qty }}</td>
                    <td class="text-right">
                      <v-btn
                        @click="Testclick"
                        
                        small
                        class="ma-2"
                        width="50"
                        style="background-color: #356bff"
                        dark
                        elevation="5"
                        >แก้ไข</v-btn
                      >

                      <v-btn
                        @click="Alertclick(item.id)"
                        small
                        class="ma-2"
                        width="50"
                        style="background-color: #ff3232"
                        dark
                        elevation="5"
                      >
                        ลบ
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import MeNu from "@/components/MeNu.vue";
export default {
  data() {
    return {
      StocK1: [],
      ID: "",
      number: 0,
    };
  },
  components: { MeNu },
  mounted() {
    this.axios.get("http://localhost:3000/stock").then((response) => {
      this.StocK1 = response.data;
      console.log(response.data);
    });
  },
  methods: {
    DeleteItem(codeid) {
      this.axios
        .delete(`http://localhost:3000/delete`, { data: { id: codeid } })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch(function (error) {
          document.write("ส่งข้อมูลไม่สำเร็จ" + "<br>" + "สาเหตุ :" + error);
        });
    },
    Alertclick(list) {
      this.number = list;
      let codeid = this.number;
      Swal.fire({
        title: "WARNING !!!",
        text: "ยืนยันที่จะลบหรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ตกลง",
        cancelButtonText:"ยกเลิก"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("ลบสำเร็จ!", "ข้อมูลใน stock ถูกลบแล้ว", "success");
          this.DeleteItem(codeid)
        }
      });
    },
  },
};
</script>

<style>
</style>