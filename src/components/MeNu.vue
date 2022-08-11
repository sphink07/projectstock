<template>
  <div>
      <v-navigation-drawer 
        dark
        permanent
        height="650"
      >
        <v-divider></v-divider>
        <v-list 
          nav
          dense
        >
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon color="#FFFF66">mdi-clipboard-text</v-icon>
                </v-list-item-icon>
                <v-list-item-title>รายการ</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon color="#66FF66">mdi-briefcase-plus-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>เบิกของ</v-list-item-title>
            </v-list-item>            
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon color="#00CCFF">mdi-clipboard-text-clock-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>รายการที่เบิกไปแล้ว</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon color="#DDDDDD">mdi-cog-transfer-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>จัดการคลัง</v-list-item-title>
                </v-list-item>

        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>

export default {
   //
}
</script>

<style>

</style>