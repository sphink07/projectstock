<template>
  <div class="high">
    <v-navigation-drawer dark permanent>
      <v-list nav dense flat>
        <ProFile></ProFile>
        <v-divider></v-divider>
        <br />
        <!-- <v-subheader style="font-size:15px ; margin-left:-3px ;
         margin-bottom:10px ; background-color:#242424 ; color:white ; border-radius: 5px;">Menu</v-subheader> -->

        <div @click="ClickToggle()">
          <router-link to="/" style="text-decoration: none; color: inherit">
            <v-list-item>
              <!-- -------------------------------icon sm and dow------------------------- -->
              <v-list-item-icon
                style="margin-left: 0px; margin-bottom: 20px"
                class="hidden-md-and-up"
              >
                <v-icon color="#989898" v-if="Btn1 == true"
                  >mdi-clipboard-text</v-icon
                >
                <v-icon color="#FFFF66" v-if="Btn1 == false"
                  >mdi-clipboard-text</v-icon
                >
              </v-list-item-icon>
              <!-- ----------------------------------------------------------------------- -->
              <v-btn
                elevation="5"
                block
                style="background-color: #282828; border-right-color: #ffff66"
                v-bind:class="{ OutLineDisAble: Btn1 }"
                class="mb-5 hidden-sm-and-down OutLineAble"
                height="45"
                outlined
              >
                <v-list-item-icon>
                  <v-icon color="#989898" v-if="Btn1 == true"
                    >mdi-clipboard-text</v-icon
                  >
                  <v-icon color="#FFFF66" v-if="Btn1 == false"
                    >mdi-clipboard-text</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title>รายการ</v-list-item-title>
              </v-btn>
            </v-list-item>
          </router-link>
        </div>

        <div @click="ClickToggle()">
          <router-link
            to="/select"
            style="text-decoration: none; color: inherit"
            @click="ClickToggle2()"
          >
            <v-list-item>
              <!-- -------------------------------icon sm and dow------------------------- -->
              <v-list-item-icon
                style="margin-left: 0px; margin-bottom: 20px"
                class="hidden-md-and-up"
              >
                <v-icon color="#989898" v-if="Btn2 == true"
                  >mdi-briefcase-plus-outline</v-icon
                >
                <v-icon color="#66ff66" v-if="Btn2 == false"
                  >mdi-briefcase-plus-outline</v-icon
                >
              </v-list-item-icon>
              <!-- ----------------------------------------------------------------------- -->
              <v-btn
                elevation="5"
                block
                style="background-color: #282828; border-right-color: #66ff66"
                v-bind:class="{ OutLineDisAble: Btn2 }"
                class="mb-5 hidden-sm-and-down OutLineAble"
                height="45"
                outlined
              >
                <v-list-item-icon>
                  <v-icon color="#989898" v-if="Btn2 == true"
                    >mdi-briefcase-plus-outline</v-icon
                  >
                  <v-icon color="#66ff66" v-if="Btn2 == false"
                    >mdi-briefcase-plus-outline</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title>เบิกของ</v-list-item-title>
              </v-btn>
            </v-list-item>
          </router-link>
        </div>

        <div @click="ClickToggle()">
          <router-link
            to="/record"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item>
              <!-- -------------------------------icon sm and dow------------------------- -->
              <v-list-item-icon
                style="margin-left: 0px; margin-bottom: 20px"
                class="hidden-md-and-up"
              >
                <v-icon color="#989898" v-if="Btn3 == true"
                  >mdi-clipboard-text-outline</v-icon
                >
                <v-icon color="#54f3ff" v-if="Btn3 == false"
                  >mdi-clipboard-text-outline</v-icon
                >
              </v-list-item-icon>
              <!-- ----------------------------------------------------------------------- -->
              <v-btn
                elevation="5"
                block
                style="background-color: #282828; border-right-color: #54f3ff"
                v-bind:class="{ OutLineDisAble: Btn5 }"
                class="mb-5 hidden-sm-and-down OutLineAble"
                height="45"
                outlined
              >
                <v-list-item-icon>
                  <v-icon color="#989898" v-if="Btn3 == true"
                    >mdi-clipboard-text-outline</v-icon
                  >
                  <v-icon color="#54f3ff" v-if="Btn3 == false"
                    >mdi-clipboard-text-outline</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title>บันทึกย้อนหลัง</v-list-item-title>
              </v-btn>
            </v-list-item>
          </router-link>
        </div>

        <div @click="ClickToggle()">
          <router-link
            to="/management"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item>
              <!-- -------------------------------icon sm and dow------------------------- -->
              <v-list-item-icon
                style="margin-left: 0px; margin-bottom: 20px"
                class="hidden-md-and-up"
              >
                <v-icon color="#989898" v-if="Btn4 == true">
                  mdi-database-cog-outline
                </v-icon>
                <v-icon color="#0064ff" v-if="Btn4 == false"
                  >mdi-database-cog-outline</v-icon
                >
              </v-list-item-icon>
              <!-- ----------------------------------------------------------------------- -->
              <v-btn
                elevation="5"
                block
                style="background-color: #282828; border-right-color: #0064ff"
                v-bind:class="{ OutLineDisAble: Btn4 }"
                class="mb-5 hidden-sm-and-down OutLineAble"
                height="45"
                outlined
              >
                <v-list-item-icon>
                  <v-icon color="#989898" v-if="Btn4 == true"
                    >mdi-database-cog-outline</v-icon
                  >
                  <v-icon color="#0064ff" v-if="Btn4 == false"
                    >mdi-database-cog-outline</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-title>จัดการคลัง</v-list-item-title>
              </v-btn>
            </v-list-item>
          </router-link>
        </div>

        
          <router-link
            to="/login"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item>
              <!-- -------------------------------icon sm and dow------------------------- -->
              <v-list-item-icon
                style="margin-left: 0px"
                class="hidden-md-and-up"
              >
                <v-icon color="#eb4c4c">mdi-power</v-icon>
              </v-list-item-icon>
              <!-- ----------------------------------------------------------------------- -->
              <v-btn
                elevation="5"
                block
                style="background-color: #282828; border-right-color: #eb4c4c"
                v-bind:class="{ OutLineDisAble: true }"
                class="hidden-sm-and-down OutLineAble"
                height="45"
                outlined
              >
                <v-list-item-icon>
                  <v-icon color="#eb4c4c">mdi-power</v-icon>
                </v-list-item-icon>
                <v-list-item-title>logout</v-list-item-title>
              </v-btn>
            </v-list-item>
          </router-link>
        
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ProFile from "./ProFile.vue";

export default {
  components: { ProFile },
  data() {
    return {
      Btn1: true,
      Btn2: true,
      Btn3: true,
      Btn4: true,
      Btn5: true,
    };
  },
  methods: {
    ClickToggle() {
      switch (this.$route.name) {
        case "home":
          this.Btn1 = false;
          this.Btn2 = true;
          this.Btn3 = true;
          this.Btn4 = true;
          this.Btn5 = true;

          break;
        case "SeLect":
          this.Btn1 = true;
          this.Btn2 = false;
          this.Btn3 = true;
          this.Btn4 = true;
          this.Btn5 = true;

          break;
        case "ReCordy":
          this.Btn1 = true;
          this.Btn2 = true;
          this.Btn3 = false;
          this.Btn4 = true;
          this.Btn5 = false;
          console.log(this.Btn5);

          break;
        case "ManageMent":
          this.Btn1 = true;
          this.Btn2 = true;
          this.Btn3 = true;
          this.Btn4 = false;
          this.Btn5 = true;

          break;
      }
    },
  },

  mounted() {
    switch (this.$route.name) {
      case "home":
        this.Btn1 = false;
        this.Btn2 = true;
        this.Btn3 = true;
        this.Btn4 = true;
        this.Btn5 = true;

        break;
      case "SeLect":
        this.Btn1 = true;
        this.Btn2 = false;
        this.Btn3 = true;
        this.Btn4 = true;
        this.Btn5 = true;
        console.log(this.Btn2);

        break;
      case "ManageMent":
        this.Btn1 = true;
        this.Btn2 = true;
        this.Btn3 = true;
        this.Btn4 = false;
        this.Btn5 = true;

        break;
    }
    if (this.$route.name == "ReCordy") {
      this.Btn1 = true;
      this.Btn2 = true;
      this.Btn3 = false;
      this.Btn4 = true;
      this.Btn5 = false;
      console.log(this.Btn5);
    }
    console.log(this.$route.name);
  },
};
</script>

<style scoped>
.OutLineAble {
  border-right-width: 7px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
}
.OutLineDisAble {
  border-style: hidden;
}
.high {
  height: 100vh;
}
.center {
  text-align: center;
}
.router-link-exact-active {
  background-color: var(--dark-alt);
  border-right: 5px solid var(--primary);
}
</style>