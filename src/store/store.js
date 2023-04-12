import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({

    // store state for infoDialog for displaying/closing popup
    // store table row user selection information
    state: {
        infoDialog: false,
        currentUserInfo: {}
    },

    getters: {
        getInfoDialogState: state => state.infoDialog,
        getCurrentUserInfo: state => state.currentUserInfo,
    },

    mutations: {
        toggleDialogState(state,value){
            state.infoDialog = value;
        },
        updateCurrentUserInfo(state,value){
            state.currentUserInfo = value;
        }
    },
    
    actions: {
        toggleDialogState({commit}, value){
            commit('toggleDialogState', value);
        },
        updateCurrentUserInfo({commit}, value){
            commit('updateCurrentUserInfo', value);
        }
    }
})

export default store;