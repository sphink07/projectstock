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
              <v-avatar color="brown" size="40">
                <span class="white--text text-h6">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content style="justify-content: left">
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="white--text text-h5">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
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
              style="border-radius: 5px ; background-color:#282828"
              elevation="10"
            >
              <v-avatar color="brown" style="margin-bottom: 10px" size="60">
                <span class="white--text text-h4">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
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
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
  }),
};
</script>

<style>
</style>