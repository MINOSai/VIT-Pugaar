import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        regno: '16BCE0904'
    },
    getters: {
        regno: state => {
            return state.regno;
        }
    },
    mutations: {
        updateregno: (state, payload) => {
            state.regno = payload;
        }
    },
    actions: {
        updateregno({commit},payload){
            commit('updateregno', payload);
        }
    }
});