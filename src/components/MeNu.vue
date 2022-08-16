<template>
  <div>
      <v-navigation-drawer 
        dark
        permanent
        height="650"
      >
        <v-list 
          nav
          dense
          flat
          
          
        >
        <v-subheader style="font-size:15px ; margin-left:-3px ;
         margin-bottom:10px ; background-color:#242424 ; color:white ; border-radius: 5px;">Menu</v-subheader>
            <v-list-item link href="/">
                <v-list-item-icon>
                    <v-icon color="#FFFF66">mdi-clipboard-text</v-icon>
                </v-list-item-icon>
                <v-list-item-title>รายการ</v-list-item-title>
            </v-list-item>
            <v-list-item link href="/select">
                <v-list-item-icon>
                    <v-icon color="#66FF66">mdi-briefcase-plus-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>เบิกของ</v-list-item-title>
            </v-list-item>            
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon color="#ff5647">mdi-form-select</v-icon>
                </v-list-item-icon>
                <v-list-item-title>รายการที่เบิกไปแล้ว</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon color="#bdbdbd">mdi-cog-transfer-outline</v-icon>
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

<style scoped>
.Text{
    font-size: 40px
}

</style>