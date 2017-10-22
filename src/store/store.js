import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: '16BCE0904'
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        updateValue({commit},payload){
            commit('updateValue', payload);
        }
    }
});