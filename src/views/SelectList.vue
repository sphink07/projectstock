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
            <v-card height="600" elevation="5"> </v-card>
            <v-col>
              <v-container>
                <v-btn
                  href="/select"
                  class="my-8 mr-8 hidden-sm-and-down"
                  height="40"
                  width="250"
                  style="background-color: #d3d3d3"
                >
                  back
                </v-btn>
                <v-btn class="my-8 cbtn hidden-sm-and-down" height="40" width="250">
                  submit
                </v-btn>
                <!-- ________________________________sm and down_____________________________________ -->
                <v-btn
                  href="/select"
                  class="hidden-md-and-up ma-2"
                  height="40"
                  width="250"
                  style="background-color: #d3d3d3"
                >
                  back
                </v-btn>
                <v-btn class=" cbtn hidden-md-and-up ma-2" height="40" width="250">
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
export default {
  components: {},
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
  background: rgb(255, 128, 250);
  background: radial-gradient(
    circle,
    rgba(255, 128, 250, 1) 19%,
    rgba(91, 95, 251, 1) 63%,
    rgba(32, 32, 32, 1) 100%
  );
}
</style>