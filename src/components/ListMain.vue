<template>
  <div>
    <v-simple-table height="650px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">id</th>
            <th class="text-left">category</th>
            <th class="text-left">part_number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in StocK1" :key="item.userId">
            <td>{{ item.id }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.partNo }}</td>
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
       this.axios
      .get("http://localhost:3000/stock")
      .then((response) => {
        this.StocK1 = response.data;
        console.log(response.data);
      });
      
  },
};
</script>

<style>
</style>