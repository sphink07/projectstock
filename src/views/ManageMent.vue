<template>
  <div class="home">
    <v-row no-gutters>
      <v-col>
        <v-app-bar             
        scroll-target="#scrolling-techniques-7"
        height="100"
        style="background-color: #cdcdcd"
        class="hidden-sm-and-down col00">
          <v-container>
            <v-row>

              <p style="margin-top: 30px; font-size: 25px ; color:#ffffff ;" class="hidden-sm-and-down">
                ✍ จัดการข้อมูล</p>
            
              
              <v-spacer></v-spacer>
              <v-text-field
              style=" margin-left:500px; margin-top:28px;"
              class=" mr-5  hidden-sm-and-down"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              solo
            ></v-text-field>
              <v-btn
                class="hidden-sm-and-down"
                href="/management/add"
                dark
                large
                fab
                style="background-color: #00bf00 ; margin-right: 5px ; margin-top: 17px"
                elevation="5"
              >
                <v-icon large> mdi-package-variant-closed-plus </v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-app-bar>
        <!-- ---------------------------------------sm and down------------------------------------- -->
        <div>
          <v-app-bar             
          scroll-target="#scrolling-techniques-7"
          height="100"
          style="background-color: #cdcdcd"
          class="hidden-md-and-up col00">
          <v-text-field
          style=" margin-right:15px ;"
          class="mt-8 hidden-md-and-up"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          solo
        ></v-text-field>
          <v-btn
          class="hidden-md-and-up"
          href="/management/add"
          dark
          fab
          style="background-color: #00bf00 ; margin-right: 5px ;  margin-top: 0px ;"
          elevation="5"
          
        >
              <v-icon> mdi-package-variant-closed-plus </v-icon>
            </v-btn>
          </v-app-bar>
        </div>
          <!-- ---------------------------------------sm and down------------------------------------- -->
        <v-row>
          <v-col>
            <v-data-table 
              height="76vh"
              :headers="headers"
              :items="StocK1"
              :search="search"
              :footer-props="footerProps"
            >

              <template v-slot:[`item.action`]="{ item }" >
                <td style="width: 180px;">
                <v-btn 
                  @click="AlertClick(item.id)"
                  small
                  class="ma-2"
                  width="50"
                  style="background-color: #ff3232"
                  dark
                  elevation="5"
                >
                ลบ
                </v-btn>
                <v-btn
                small
                class="ma-2"
                width="50"
                style="background-color: #356bff"
                dark
                elevation="5"
                >แก้ไข</v-btn
              ></td>
              </template>
            </v-data-table>
            
            <!-- <v-simple-table height="84.4vh"> 
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in StocK1" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.qty }}</td>
                    <td class="text-right">
                      <v-btn
                        small
                        class="ma-2"
                        width="50"
                        style="background-color: #356bff"
                        dark
                        elevation="5"
                        >แก้ไข</v-btn
                      >

                      <v-btn
                        @click="AlertClick(item.id)"
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
            </v-simple-table> -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      StocK1: [],
      ID: "",
      number: 0,
      valll:false,
      search:'',
      footerProps: {'items-per-page-options': [11,20,25]},
      headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Codenumber', value: 'code' },
          { text: 'Quantity', value: 'qty' },
          { text: '', value: 'action' ,},
        ],
    };
  },

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
        })
        .catch(function (error) {
          document.write("ส่งข้อมูลไม่สำเร็จ" + "<br>" + "สาเหตุ :" + error);
        });
    },
    AlertClick(list) {
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
          Swal.fire({title:"ลบสำเร็จ!", text:"ข้อมูลใน stock ถูกลบแล้ว", 
          icon:"success", showConfirmButton: false,})
          .then(() => {
            if(Swal.DismissReason.backdrop){
              this.DeleteItem(codeid);
              window.location.reload();
            }
          })
        }
      });
    },
  },
};
</script>

<style scoped>
  .high {
    height: 500px;
  }
  .col00{
    background: rgb(54,54,54);
    background: linear-gradient(90deg, rgba(54,54,54,1) 0%, rgba(173,173,173,1) 100%);
  }
  ::v-deep .v-data-table-header {
    background-color: #DCDCDC;
  }
</style>