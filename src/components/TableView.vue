<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="res"
      :items-per-page="itemsPerPage"
      :page.sync="page"
      single-select
      :search="search"
      :sort-by="[]"
      multi-sort
      @page-count="pageCount = $event"
      @click:row="(item)=>handleClick(item)"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import {mapActions} from 'vuex'

export default {
  name: 'TableView',
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      selected: [],
      search: '',
      res:[],
      headers: [
        { text: 'Date of Birth',value: 'b_day', align: 'start'},
        { text: 'Name', value: 'full_name' , align: 'start'},
        { text: 'Gender', value: 'gender', align: 'start'},
        { text: 'Country', value: 'location.country', align: 'start'},
        { text: 'Email', value: 'email', align: 'start'}
      ]
    }
  },

  // call API when UI is in created phase in its life cycle hook
  async created(){
    this.getData();
  },
  
  methods:{
    ...mapActions(["toggleDialogState"]),

    handleClick(item) {
      this.$store.dispatch("updateCurrentUserInfo",item);
      this.$store.dispatch("toggleDialogState",true);
    },

    refreshTable(){
      this.getData();
    },

    // GET request for data from API
    async getData(){
      const reponse = await axios.get('https://randomuser.me/api/?results=20')
                              .catch((err) => console.log(err));
      this.res = reponse.data.results;
      this.res = this.res.map(function(e){
        e.full_name = e.name.first + ' ' + e.name.last;
        e.b_day = new Date(e.dob.date).toISOString().substring(0, 10);
        e.gender = e.gender.charAt(0).toUpperCase() + e.gender.slice(1).toLowerCase();
        return e;
      });
    }

  }
}
</script>