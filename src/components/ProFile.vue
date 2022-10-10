<template>
  <div>
    <!-- -----------------------------------SM SIZE------------------------------------------- -->
    <v-row
      no-gutters
      class="hidden-md-and-up"
      style="margin-bottom: 10px"
      justify="center"
    >
      <v-col style="text-align: center" class="mr-1">
        <v-menu bottom min-width="150px" rounded offset-y dark>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="#626262" size="40">
                <span class="white--text text-h6">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content style="justify-content: left">
              <div class="mx-auto text-center">
              <v-avatar class="a1" v-if="this.user.fullName == 'Superadmin'" style="margin-bottom: 10px" size="60">
                <span class="white--text text-h5" style="">{{ user.initials }}</span>
              </v-avatar>
              <v-avatar class="a2" v-if="this.user.fullName == 'admin'" style="margin-bottom: 10px" size="60">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <h3 style="margin-top:-15px ;" class="a1" v-if="this.user.fullName == 'Superadmin'">{{ user.fullName }}</h3>
                <h3 style="margin-top:-15px ;" class="a2" v-if="this.user.fullName == 'admin'">{{ user.fullName }}</h3>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
    <!-- ----------------------------------------------------------------------------------------- -->
    <v-row no-gutters class="hidden-sm-and-down">
      <v-list-item-content>
        <div class="mx-auto text-center">
          <v-container>
            <v-card
              height="140"
              class="pt-4"
              style="border-radius: 5px; background-color: #282828"
              elevation="10"
            >
              <v-avatar class="a1" v-if="this.user.fullName == 'Superadmin'" style="margin-bottom: 10px" size="60">
                <span class="white--text text-h5" style="">{{ user.initials }}</span>
              </v-avatar>
              <v-avatar class="a2" v-if="this.user.fullName == 'admin'" style="margin-bottom: 10px" size="60">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <p class="text-caption">
                {{ user.email }}
              </p>
              <h3 style="margin-top:-15px ;" class="a1" v-if="this.user.fullName == 'Superadmin'">{{ user.fullName }}</h3>
              <h3 style="margin-top:-15px ;" class="a2" v-if="this.user.fullName == 'admin'">{{ user.fullName }}</h3>
            </v-card>
          </v-container>
        </div>
      </v-list-item-content>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: "",
      fullName: "",
      email: "ยินดีต้อนรับคุณ",
    },
  }),

  mounted() {
    this.user.fullName = localStorage.getItem("UserAdmin")
    if (this.user.fullName == 'Superadmin'){
      this.user.initials = "SAM"
    } else if(this.user.fullName == 'admin'){
      this.user.initials = "AM"
    } else {
      console.log("avatar ไม่มีข้อมูล")
    }
  },
};
</script>

<style scoped>
.a1{
  background: rgb(255,170,0);
  background: radial-gradient(circle, rgba(255,170,0,1) 6%, rgba(255,89,61,0.9587185215883228) 32%, rgba(41,41,41,1) 77%);
}
.a2{
  background: rgb(0,146,255);
background: radial-gradient(circle, rgba(0,146,255,1) 4%, rgba(75,67,241,0.9587185215883228) 32%, rgba(41,41,41,1) 77%);
}
</style>