<template>
  <div>
    <!-- -----------------------------------SM SIZE------------------------------------------- -->
    <v-row
      justify="center"
      no-gutters
      class="hidden-md-and-up"
      style="margin-bottom: 10px"
    >
      <v-menu bottom min-width="200px" rounded offset-y dark>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="brown" size="45">
              <span class="white--text text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
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
    </v-row>
    <!-- ----------------------------------------------------------------------------------------- -->
    <v-row justify="left" no-gutters class="hidden-sm-and-down">
      <template v-slot:activator="{ on }">
        <v-btn icon x-large v-on="on">
          <v-avatar color="brown" size="45">
            <span class="white--text text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>

      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="brown" style="margin-bottom: 5px">
            <span class="white--text text-h5">{{ user.initials }}</span>
          </v-avatar>
          <h3>{{ user.fullName }}</h3>
          <p class="text-caption mt-1">
            {{ user.email }}
          </p>
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