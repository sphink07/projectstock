<template>
  <div>
    <v-simple-table height="910px">
      <template v-slot:default>
        <thead style="background-color:#d4d4d4;">
          <tr>
            <th class="text-left">category</th>
            <th class="text-left">part_number</th>
            <th class="text-left">quantity</th>
            <th class="text-center">detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in StocK1" :key="item.userId">
            <td>{{ item.name }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.qty }}</td>
            <td class="text-center">
              <v-btn small style="border-radius: 5px">
                <v-icon>mdi-card-text-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      StocK1: [],
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/stock").then((response) => {
      this.StocK1 = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style>
</style>