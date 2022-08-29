<template>
  <div>
    <v-app>
      <v-row no-gutters>
        <v-col>
          <v-app-bar
            absolute
            scroll-target="#scrolling-techniques-7"
            height="70"
            style="background-color: #cdcdcd"
            class="hidden-sm-and-down"
          >
            <v-row no-gutters>
              <v-col class="mt-6">
                <v-row>
                  <v-span class="mt-3 ml-4 mr-10 hidden-sm-and-down"
                    >เลือกรายการที่ต้องการเบิก
                  </v-span>
                  <v-autocomplete clearable small-chips solo></v-autocomplete>
                  <v-btn class="mr-5 mt-2 ml-5 hidden-sm-and-down" href="/select/list">
                    <v-badge color="green" content="10">
                      รายการที่เลือก
                    </v-badge>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-app-bar>
          <v-app-bar
            absolute
            scroll-target="#scrolling-techniques-7"
            height="130"
            style="background-color: #cdcdcd"
            class="hidden-md-and-up"
          >
            <v-row no-gutters>
              <v-col class="mt-2">
                <v-autocomplete clearable small-chips solo></v-autocomplete>
              </v-col>
              <v-btn block style="margin-top:-15px" href="/select/list">
                <v-badge color="green" content="10"> รายการที่เลือก </v-badge>
              </v-btn>
            </v-row>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>