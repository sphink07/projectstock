<template>
  <div class="home">
    <v-row no-gutters>
      <v-col cols="2" md="2" sm="1">
        <MeNu></MeNu>
      </v-col>
      <v-col cols="10" md="10" sm="11">
        <v-app-bar style="background-color: #d4d4d4">
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
            <v-simple-table height="660px">
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in StocK1" :key="item.userId">
                    <td>{{ item.category }}</td>
                    <td>{{ item.partNo }}</td>
                    <td>{{ item.quantity }}</td>
                    <td class="text-right">
                      <v-btn
                        href="/management/fix"
                        small
                        class="ma-2"
                        width="50"
                        style="background-color: #356bff"
                        dark
                        elevation="5"
                        >แก้ไข</v-btn
                      >

                      <v-btn
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
import MeNu from "@/components/MeNu.vue";
export default {
  data() {
    return {
      StocK1: [],
    };
  },
  components: { MeNu },
  mounted() {
    this.axios.get("http://localhost:3000/stock").then((response) => {
      this.StocK1 = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style>
</style>