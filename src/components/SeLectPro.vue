<template>
  <div>
    <v-app>
      <v-row no-gutters>
        <v-col>
          <v-app-bar
            scroll-target="#scrolling-techniques-7"
            style="height: 14vh"
            class="hidden-sm-and-down col00"
          >
            <v-row no-gutters>
              <v-col class="mt-6">
                <v-row>
                  <span
                    class="hidden-sm-and-down mt-8"
                    style="
                      font-size: 22px;
                      margin-right: 35px;
                      margin-left: 20px;
                      color: #ffffff;
                    "
                  >
                    ✅ เลือกรายการที่ต้องการเบิก
                  </span>
                  <v-text-field
                    class="ml-5 mr-5 mt-6"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    solo
                  ></v-text-field>

                  <v-btn
                    elevation="2"
                    @click="ChackZero()"
                    class="mt-6 mr-10 hidden-sm-and-down"
                    height="48"
                    style="
                      border-radius: 10px;
                      margin-left: 40px;
                      background-color: #505050;
                      color: #ffffff;
                    "
                  >
                    <!-- <v-badge color="#43a839" inline style>
                      <template v-slot:badge>
                        <div>{{ Length }}</div>
                      </template>
                      รายการที่เลือก
                    </v-badge> -->
                    รายการที่เลือก
                    <v-card
                      elevation="5"
                      height="30"
                      width="33"
                      class="ml-4"
                      style="
                        font-size: 20px;
                        padding-top: 4px;
                        border-radius: 6px;
                      "
                      color="#7e7e7e"
                      ><div style="color: #ffffff">{{ Length }}</div></v-card
                    >
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- -------------------------------------------sm and down--------------------------------------------------- -->
          <v-app-bar
            scroll-target="#scrolling-techniques-7"
            height="130"
            class="hidden-md-and-up col00"
          >
            <v-row no-gutters>
              <v-col class="mt-2 text-center">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  solo
                ></v-text-field>
                <v-btn
                  @click="ChackZero()"
                  block
                  elevation="10"
                  style="
                  margin-top: -15px;
                  background-color: #505050;
                  color: #ffffff;
                  "
                  width="120"
                >
                  <v-badge color="#43a839" inline style>
                    <template v-slot:badge>
                      <div>{{ Length }}</div>
                    </template>
                    รายการที่เลือก
                  </v-badge>
                </v-btn>
              </v-col>
            </v-row>
          </v-app-bar>
          <div
            v-if="this.skeleton == false"
            style="position: absolute; top: 45%; left: 45%; right: 50%"
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
            style="position: absolute; top: 40%; left: 40%"
            class="hidden-md-and-up"
          >
            <v-progress-circular
              :size="150"
              :width="15"
              color="#959595"
              indeterminate
            ></v-progress-circular>
          </div>
          <v-card height="75vh" v-if="this.skeleton == true">
            <v-data-table
              height="72vh"
              flat
              :headers="headers"
              :items="datafilter"
              :search="search"
              :footer-props="footerProps"
              show-select
              checkbox-color="#149937"
              v-model="dataselect"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      skeleton:false,
      booleen: true,
      Length: 0,
      datafilter: [],
      dataselect: [],
      datafilter2: [],
      search: "",
      footerProps: { "items-per-page-options": [11, 20, 25] },
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
      ],
    };
  },
  methods: {
    //      Testdata(a) {
    //        let data1 = a
    //       for(let i = 0 ; i < data1.length ; i++ ){
    //        this.datafilter[i] = data1[i].name
    //       }
    //       this.datafilter2 = this.datafilter
    //       console.log(this.datafilter2)
    //      },
    //     Search(){
    //       const resu = this.datafilter2.filter((x) => x == this.dataname)
    //       console.log(resu)
    //  },
    ChackZero() {
      for (let i = 0; i < this.dataselect.length; i++) {
        if (this.dataselect[i].qty <= 0) {
          this.booleen = false;
          break;
        } else {
          this.booleen = true;
        }
      }
      if (this.booleen === true) {
        this.$router.push("/select/list");
      } else {
        Swal.fire({
          title: "ผิดพลาด!!",
          text: "มีรายการที่มีสินค้าหมด ไม่สามารถดำเนินการต่อไปได้",
          icon: "warning",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  async mounted() {
    await this.axios
      .post("https://firstmyapi.onrender.com/stock")
      .then((response) => {
        this.datafilter = response.data;
        this.skeleton = true
        
      });
  },
  updated() {
    this.Length = this.dataselect.length;
    let JsonString = JSON.stringify(this.dataselect);
    localStorage.setItem("Iteminlist", JsonString);
  },
};
</script>

<style scoped>
.wh {
  width: 100vw;
}
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