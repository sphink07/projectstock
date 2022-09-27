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
            <v-card height="600" elevation="5">
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
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Codenumber", value: "code" },
        { text: "Codenumber", value: "code" },
        { text: "", value: "action" },
      ],
      rules: [(value) => !!value || "กรอกจำนวนให้ครบถ้วน."],
    };
  },
  components: {},
  mounted() {
    let JsonData = JSON.parse(localStorage.getItem("Iteminlist"));
    this.ListShow = JsonData;
    // console.log(this.ListShow);
  },
  methods: {
    TestSlot() {
      this.textinputfix = this.textinput.filter(function (e) {
        return e;
      });
      if (this.textinputfix.length == this.ListShow.length) {
        for (let i = 0; i < this.textinputfix.length; i++) {
          this.Mixlist[i] = this.ListShow[i].qty - this.textinputfix[i];
        }
        console.log(this.Mixlist);
      } else {

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