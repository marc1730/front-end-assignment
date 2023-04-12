<template>    
    <v-container fluid grid-list-lg>
      <InfoPopup></InfoPopup>
      <v-row>
        <v-col class="background" >
            <div class="header-text-frame-top">
              <h1 class="text-h3">John Doe</h1>
            </div>
            <div class="header-text-frame-bottom">
              <h4>Last Online: 2 days ago</h4>
            </div>
            <v-btn class="btn-send-msg justify-center " raised>
              <v-icon dark>mdi-send</v-icon>  Send Message
            </v-btn>
            <v-btn class="btn-add-friend justify-center" outlined> 
              <v-icon dark>mdi-plus</v-icon> Add Friend
            </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img
              src="@/assets/Avatar.png"
              max-height="150"
              max-width="200"
              contain
              class="image-frame otherColor"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="data-table">
            <TableView ref="childComponent"/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="justify-center" @click="refreshTable">Refresh</v-btn>
        </v-col>
      </v-row>
      
    </v-container>
  </template>
  
<script>
import InfoPopup from '@/components/InfoPopup.vue';
import TableView from '@/components/TableView.vue';
  
  export default{
      name: 'ProfileView',
  
      components: {
        InfoPopup,
        TableView
      },

      methods:{
        refreshTable(){
          // access table component through refs and call the method
          this.$refs.childComponent.refreshTable();
        }
      }
  
    }
  </script>

<style>
.container{
    position: relative;
    width: 100%;
    height: 100%;
}
.background {
  background-color: #4DD0E1;
  width: 100%;
  height: 15em;
}

.image-frame {
  border: 0px solid #ccc;
  position: relative;
  left: 30em;
  top: -12em;
  border-radius: 5%;
  overflow: hidden;
  width: 150px;
  height: 200px;
}

.header-text-frame-top{
  position: relative;
  left: -10em;
  top: 5em;
  color: white;
}

.header-text-frame-bottom{
  position: relative;
  left: -10em;
  top: 6em;
  color: white;
}

.btn-send-msg{
  position: relative;
  left: 15em;
  top: 4em;
  color: white;
}

.btn-add-friend{
  position: relative;
  left: 20em;
  top: 4em;
  color: white;
}

.data-table{
  position: relative;
  left: 0em;
  top: -10em;
}

.otherColor {
  background-color: #d4d4d4;
}
</style>