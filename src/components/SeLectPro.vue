<template>
  <div>
    <v-app>
      <v-row no-gutters>
        <v-col>
          <v-app-bar
            absolute
            scroll-target="#scrolling-techniques-7"
            height="100"
            style="background-color: #cdcdcd"
            class="hidden-sm-and-down col00"
          >
            <v-row no-gutters>
              <v-col class="mt-6">
                <v-row>
                    <span class=" hidden-sm-and-down mt-2" 
                    style="margin-top:10px ; font-size:22px ; margin-right:35px ; margin-left:20px ; color:#ffffff ; "
                      > ✅ เลือกรายการที่ต้องการเบิก 
                    </span>
                    <v-text-field
                    class="ml-5 mr-5"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    solo
                  ></v-text-field>
                  
                  <v-btn class="mr-10 hidden-sm-and-down" href="/select/list" height="48" 
                  style=" border-radius:10px; margin-left:40px ; background-color:#505050 ; color:#ffffff">
                    <v-badge color="#43a839" inline style>
                      <template v-slot:badge >
                        <div>{{Length}}</div>
                      </template>
                      รายการที่เลือก
                    </v-badge>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-app-bar>
          <!-- -------------------------------------------sm and down--------------------------------------------------- -->
          <v-app-bar
            absolute
            scroll-target="#scrolling-techniques-7"
            height="130"
            class="hidden-md-and-up col00"
          >
            <v-row no-gutters>
              <v-col class="mt-2 text-center">
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                solo
              ></v-text-field>
                <v-btn block elevation="10" style="margin-top:-15px; background-color:#505050 ; color:#ffffff ;" href="/select/list" width="120">
                  <v-badge color="#43a839" inline style>
                    <template v-slot:badge>
                      <div>{{Length}}</div>
                    </template>
                    รายการที่เลือก </v-badge>
                </v-btn>
              </v-col>
            </v-row>
          </v-app-bar>
        </v-col>
      </v-row>
      <v-card height="86vh">
        <v-data-table 
        height="77vh"
        flat
        :headers="headers"
        :items="datafilter"
        :search="search"
        :footer-props="footerProps"
        show-select
        v-model="dataselect"
      ></v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script> 

export default { 
  data() {
    return {
       Length:0,
       datafilter:[],
       dataselect:[],
       datafilter2:[],
       search:'',
       footerProps: {'items-per-page-options': [11,20,25]},
       headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Codenumber', value: 'code' },
          { text: 'Quantity', value: 'qty' },
        ],

    }
  },
  methods: {
  //      Testdata(a) {
  //        let data1 = a
  //       for(let i = 0 ; i < data1.length ; i++ ){
  //        this.datafilter[i] = data1[i].name
  //       }
  //       this.datafilter2 = this.datafilter
  //       console.log(this.datafilter2)
  //      },
  //     Search(){
  //       const resu = this.datafilter2.filter((x) => x == this.dataname)
  //       console.log(resu)
  //  },

  },
mounted() {
      this.axios.get("http://localhost:3000/stock").then((response) => {
      this.datafilter = response.data;
    }); 
},
updated() {
  this.Length = this.dataselect.length
},
};
</script>

<style scoped>
  .wh{
    width: 100vw;
  }
  .col00{
    background: rgb(54,54,54);
    background: linear-gradient(90deg, rgba(54,54,54,1) 0%, rgba(173,173,173,1) 100%);
  }
</style>