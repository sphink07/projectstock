<template>
  <div class="d-flex align-center">
        <v-row no-gutters>
        <v-col md="4" sm="3" xs="hidden"></v-col>
          <v-col md="4" sm="6" xs="12">
            <br>
            <br>
            <h1 style="text-align:center">Login</h1>
            <br>
            <br>
            <v-text-field label="Username/E-mail"
              :rules="rules" hide-details="auto">
            </v-text-field>
            <br>
            <v-text-field label="Password"
              :rules="rules" hide-details="auto">
            </v-text-field>
            <br>
            <br>
            <v-btn block height="35px">Login to system</v-btn>
           
          </v-col><v-col md="4" sm="3" xs="hidden" ></v-col>
        </v-row>
  </div>
</template>

<script>
export default {
name : 'LogIOn',
data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 5) || 'กรอกอย่างน้อย 5 ตัวอักษร',

      ],
      
    }),


}
</script>

<style>

</style>