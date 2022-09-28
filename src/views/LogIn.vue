<template>
  <div>
    <v-app style="background-color: rgb(80, 80, 80)">
      <v-row no-gutters>
        <v-col md="4" offset-md="4" sm="6" offset-sm="3">
          <v-container>
            <!-- <v-card class="mt-10 pb-2" rounded flat> -->
            <v-container>
              <h1
                style="text-align: center; font-size: 40px; color: #ffeb00"
                class="ma-5"
              >
                Login
              </h1>
              <v-text-field
                solo
                label="Username/E-mail"
                :rules="rules"
                hide-details="auto"
                clearable
                v-model="UserName"
              >
              </v-text-field>
              <br />
              <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                solo
                label="Password"
                :rules="rules"
                hide-details="auto"
                clearable
                @click:append="show1 = !show1"
                v-model="PassWord"
              >
              </v-text-field>
              <br />
              <br />
              <v-btn dark block height="50px" class="btncolor" @click="Login()"
                >Login to system</v-btn
              >
              <span>v 0.1</span>
            </v-container>
            <!-- </v-card> -->
          </v-container>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "LogIOn",
  data: () => ({
    ChackUser: "",
    UserName: "",
    PassWord: "",
    show1: false,
    rules: [(value) => !!value || "ไม่มีข้อมูล"],
  }),
  methods: {
    async Login() {
      if (this.UserName === "1" && this.PassWord === "1") {
        this.ChackUser = "ADMIN1";
        localStorage.setItem("UserAdmin", this.ChackUser);
        alert("login sucess");
        await this.$router.push("/");

      } else if (this.UserName === "2" && this.PassWord === "2") {
        this.ChackUser = "ADMIN2";
        localStorage.setItem("UserAdmin", this.ChackUser);
        alert("login sucess");
        await this.$router.push("/");

      } else {
        alert("username หรือ password ไม่ถูกต้อง")
      }
      //     switch (this.UserName && this.PassWord){
      //      case "1" && "1":
      //       this.ChackUser = 'ADMIN1'
      //       localStorage.setItem("UserAdmin" , this.ChackUser)
      //       alert("login sucess")
      //       await this.$router.push("/")
      //     break;

      //     case "2" && "2":
      //       this.ChackUser = 'ADMIN2'
      //       localStorage.setItem("UserAdmin" , this.ChackUser)
      //       alert("login sucess")
      //       await this.$router.push("/")
      //     break;

      //    default: alert("รหัสผ่านไม่ถูกต้อง")
      // }
    },
  },
  mounted() {
    localStorage.clear();
    localStorage.setItem("LoginCode", true);
  },
};
</script>

<style>
.btncolor {
  background: rgb(97, 0, 147);
  background: linear-gradient(
    90deg,
    rgba(97, 0, 147, 1) 0%,
    rgba(11, 11, 190, 1) 50%,
    rgba(0, 212, 255, 1) 100%
  );
}
.backcolor {
  background: rgb(47, 47, 47);
  background: linear-gradient(
    180deg,
    rgba(47, 47, 47, 1) 0%,
    rgba(127, 127, 127, 1) 51%,
    rgba(200, 197, 197, 1) 100%
  );
}
</style>