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
            
            <ProFile style="margin-top:5px"></ProFile>
            <v-divider></v-divider>
            <br>
        <!-- <v-subheader style="font-size:15px ; margin-left:-3px ;
         margin-bottom:10px ; background-color:#242424 ; color:white ; border-radius: 5px;">Menu</v-subheader> -->
            <v-list-item link href="/">
                <!-- -------------------------------icon sm and dow------------------------- -->
                    <v-list-item-icon style="margin-left:0px" class="hidden-md-and-up">
                        <v-icon color="#FFFF66">mdi-clipboard-text</v-icon>
                    </v-list-item-icon>
                <!-- ----------------------------------------------------------------------- -->
                    <v-btn block style="margin-left:-8px" class="hidden-sm-and-down">
                    <v-list-item-icon>
                        <v-icon color="#FFFF66">mdi-clipboard-text</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >รายการ</v-list-item-title>
                </v-btn>
            </v-list-item>

            <v-list-item link href="/select">
                <!-- -------------------------------icon sm and dow------------------------- -->
                    <v-list-item-icon style="margin-left:0px" class="hidden-md-and-up">
                        <v-icon color="#66FF66">mdi-briefcase-plus-outline</v-icon>
                    </v-list-item-icon>
                <!-- ----------------------------------------------------------------------- -->
                <v-btn block style="margin-left:-8px" class="hidden-sm-and-down">
                    <v-list-item-icon>
                        <v-icon color="#66FF66">mdi-briefcase-plus-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>เบิกของ</v-list-item-title>
                </v-btn>
            </v-list-item> 

            <v-list-item link>
                <!-- -------------------------------icon sm and dow------------------------- -->
                    <v-list-item-icon style="margin-left:0px" class="hidden-md-and-up">
                        <v-icon color="#CCCCFF">mdi-clipboard-text-outline</v-icon>
                    </v-list-item-icon>
                <!-- ----------------------------------------------------------------------- -->
                <v-btn block style="margin-left:-8px" class="hidden-sm-and-down">
                    <v-list-item-icon>
                        <v-icon color="#CCCCFF">mdi-clipboard-text-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>บันทึกย้อนหลัง</v-list-item-title>
                </v-btn>
            </v-list-item>
            
            <v-list-item link>
                <!-- -------------------------------icon sm and dow------------------------- -->
                    <v-list-item-icon style="margin-left:0px" class="hidden-md-and-up">
                        <v-icon color="#87CEFA">mdi-database-cog</v-icon>
                    </v-list-item-icon>
                <!-- ----------------------------------------------------------------------- -->
                <v-btn block style="margin-left:-8px" class="hidden-sm-and-down">
                    <v-list-item-icon>
                        <v-icon color="#87CEFA">mdi-database-cog</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>จัดการคลัง</v-list-item-title>
                </v-btn>
            </v-list-item>

            <v-list-item link>
                <!-- -------------------------------icon sm and dow------------------------- -->
                    <v-list-item-icon style="margin-left:0px" class="hidden-md-and-up">
                        <v-icon color="#eb4c4c">mdi-power</v-icon>
                    </v-list-item-icon>
                <!-- ----------------------------------------------------------------------- -->
                <v-btn block style="margin-left:-8px" class="hidden-sm-and-down">
                    <v-list-item-icon>
                        <v-icon color="#eb4c4c">mdi-power</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>logout</v-list-item-title>
                </v-btn>
            </v-list-item>

        </v-list>
      </v-navigation-drawer>
  </div>

</template>

<script>
import ProFile from '@/components/ProFile.vue';
export default {
   components : { ProFile }
}
</script>

<style scoped>

</style>