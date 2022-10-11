    <template>
  <div>
    <v-app class="cbm">
      <v-row no-gutters
        ><v-container>
          <v-col
            md="10"
            offset-md="1"
            sm="10"
            offset-sm="1"
            style="text-align: center"
          >
            <v-card height="700" elevation="5">
              <v-data-table
                height="85vh"
                flat
                :headers="headers"
                :items="ListShow"
                hide-default-footer
                ><template v-slot:[`item.action`]="{ item }">
                  <td style="width: 180px">
                    <v-text-field
                      v-model="textinput[item.id]"
                      :rules="rules"
                      class="mt-7"
                      solo
                      type="number"
                      single-line
                      label="0"
                      min="1"
                      outlined
                    >
                    </v-text-field>
                  </td>
                </template>
              </v-data-table>
            </v-card>
            <v-col>
              <v-container>
                <v-btn
                  @click="backpage()"
                  class="my-8 mr-8 hidden-sm-and-down"
                  height="40"
                  width="250"
                  style="background-color: #d3d3d3"
                >
                  back
                </v-btn>
                <v-btn
                  @click="TestSlot()"
                  class="my-8 cbtn hidden-sm-and-down"
                  height="40"
                  width="250"
                >
                  submit
                </v-btn>
                <!-- ________________________________sm and down_____________________________________ -->
                <v-btn
                  @click="backpage()"
                  class="hidden-md-and-up ma-2"
                  height="40"
                  width="250"
                  style="background-color: #d3d3d3"
                >
                  back
                </v-btn>
                <v-btn
                  @click="TestSlot()"
                  class="cbtn hidden-md-and-up ma-2"
                  height="40"
                  width="250"
                >
                  submit
                </v-btn>
                <!-- ________________________________________________________________________________ -->
              </v-container>
            </v-col>
          </v-col>
        </v-container>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      Mixlist: [],
      textinput: [],
      textinputfix: [],
      ListShow: [],
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
        { text: "", value: "action" },
      ],
      rules: [(value) => !!value || "กรอกจำนวนให้ครบถ้วน."],
    };
  },
  components: {},
  mounted() {
    let JsonData = JSON.parse(localStorage.getItem("Iteminlist"));
    this.ListShow = JsonData;
  },
  methods: {
    TestSlot() {
      this.textinputfix = this.textinput.filter(function (e) {
        return e;
      });
      if (this.textinputfix.length == this.ListShow.length) {
        for (let i = 0; i < this.textinputfix.length; i++) {
          if (this.ListShow[i].quantity >= this.textinputfix[i]) {
            this.Mixlist[i] = this.ListShow[i].quantity - this.textinputfix[i];
          } else {
            Swal.fire({
              text: "มีรายการสินค้าที่ไม่เพียงพอ ตรวจสอบจำนวนที่จะเบิก",
              icon: "warning",
              showConfirmButton: false,
              timer: 2000,
            });
            break;
          }
        }
        if (this.Mixlist.length == this.ListShow.length) {
          Swal.fire({
            title: "ยืนยันรายการ",
            text: "ต้องการที่จะเบิกตามรายการที่เลือก?",
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
              });
              for (let i = 0; i < this.textinputfix.length; i++) {
                let id = this.ListShow[i].id;
                let quantity = this.Mixlist[i];
                this.axios
                  .post("https://firstmyapi.onrender.com/updateqty", { id , quantity })
                  .then(() => {
                    let Category = this.ListShow[i].Category;
                    let PartNo = this.ListShow[i].PartNo;
                    let Value = this.ListShow[i].Value;
                    let quantity = this.textinputfix[i];
                    let user = localStorage.getItem("UserAdmin")
                    this.axios.post("https://firstmyapi.onrender.com/insertuser" , 
                    {Category , PartNo , Value , quantity , user}).catch(function (error) {
                    document.write(
                      "ส่งข้อมูลไปเพิ่มตาราง user ไม่สำเร็จ" + "<br>" + "สาเหตุ :" + error
                        );
                      });
                    }).catch(function (error) {
                    document.write(
                      "ส่งข้อมูลไม่สำเร็จ" + "<br>" + "สาเหตุ :" + error
                      );
                    });
              }
              Swal.fire({
                      title: "บันทึกสำเร็จ",
                      icon: "success",
                      timer: 2000,
                      showConfirmButton: false,
                    }).then(() => {
                      this.$router.push("/")
                    });
                    
            } else {
              this.Mixlist = [];
              console.log(this.Mixlist);
            }
          });
        } else {
          Swal.fire({
            text: "มีรายการสินค้าที่ไม่เพียงพอ ตรวจสอบจำนวนที่จะเบิก",
            icon: "warning",
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(this.Mixlist)
        }
      } else {
        Swal.fire({
          text: "มีรายการที่ยังกรอกจำนวนไม่ครบ",
          icon: "warning",
          showConfirmButton: false,
          timer: 1800,
        });
      }
      if (this.ListShow.length <= 0) {
        Swal.fire({
          text: "ไม่มีข้อมูลทำการเลือกข้อมูลก่อน",
          icon: "warning",
          showConfirmButton: false,
          timer: 1800,
        });
        this.$router.push("/select");
      }
    },
    backpage() {
      this.$router.push("/select");
    },
  },
};
</script>

<style scoped>
.cbtn {
  background: rgb(210, 255, 67);
  background: linear-gradient(
    90deg,
    rgba(210, 255, 67, 1) 0%,
    rgba(137, 255, 113, 1) 44%,
    rgba(84, 255, 233, 1) 92%
  );
}
.cbm {
  background: rgb(54, 54, 54);
  background: linear-gradient(
    90deg,
    rgba(54, 54, 54, 1) 0%,
    rgba(173, 173, 173, 1) 100%
  );
}
</style>