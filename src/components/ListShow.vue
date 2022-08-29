<template>
<div>
  <v-simple-table height="900px">
    <template v-slot:default>
      <thead style="background-color: #d4d4d4">
        <tr>
          <th class="text-left">category</th>
          <th class="text-left">part_number</th>
          <th class="text-left">quantity</th>
          <th class="text-center">detail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in StocK1" :key="item.userId">
          <td>{{ item.Category }}</td>
          <td>{{ item.PartNo }}</td>
          <td>{{ item.Value }}</td>
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
export default {};
</script>

<style>
</style>