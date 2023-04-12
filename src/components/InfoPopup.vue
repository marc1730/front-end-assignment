<template>
    <v-dialog 
    max-width=750 @click:outside="closeDialog" v-model="dialog">
    <!--   style="overflow:auto" transition="dialog-top-transition"-->
        <v-card>
            <v-card-title>
                <h1>{{currentUserInfo.full_name}}</h1>
                <v-spacer></v-spacer>
                <v-btn
                    icon="$close"
                    density="comfortable"
                    variant="plain"
                    class="justify-right"
                    @click="closeDialog()"
                ><v-icon dark>mdi-close-thick</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-container fluid grid-list-lg>
                <v-row>
                    <v-col style="text-align:left">
                        <h3>Date: <span>{{currentUserInfo.b_day}}</span></h3>
                    </v-col>
                </v-row>
            <v-row>
                <v-col style="text-align:left">
                    <h3>Gender: <span>{{currentUserInfo.gender}}</span></h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="text-align:left">
                    <h3>Postcode: <span>{{currentUserInfo.location.postcode}}</span></h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="text-align:left">
                    <h3>State: <span>{{currentUserInfo.location.state}}</span></h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="text-align:left">
                    <h3>Country: <span>{{currentUserInfo.location.country}}</span></h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="text-align:left">
                    <h3>Email: <span>{{currentUserInfo.email}}</span></h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col style="text-align:left">
                    <h3>Cellphone: <span>{{currentUserInfo.cell}}</span></h3>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions} from 'vuex';

export default ({
    name:'InfoPopup',

    computed:{
        dialog: {
            // compute Vuex's state to check current dialog state
            get(){
                return this.$store.state.infoDialog
            },
            // update current dialog state
            set(value){
                this.$store.dispatch('toggleDialogState',value)
            }
        },

        currentUserInfo: {
            // compute Vuex'state to obtain user info from table row
            get(){
                return this.$store.state.currentUserInfo
            }
        }
    },

    methods:{
        ...mapActions(["toggleDialogState"]),
        // always toggle dialog state to true
        showDialog: function(){
            this.$store.dispatch("toggleDialogState",true);
        },
        // always toggle dialog state to false (for cases when user click outside of dialog)
        closeDialog: function(){
            this.$store.dispatch("toggleDialogState",false);
        }
    }
    
})
</script>
