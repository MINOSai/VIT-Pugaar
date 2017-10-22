import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        regno: '16BCE0904',
        name: 'Yaswant Narayan',
        mess: 'F-Block mess',
        block: 'F-block',
        floor: '5',
        room: '654'
    },
    getters: {
        regno: state => {
            return state.regno;
        },
        name: store => {
            return state.name;
        },
        mess: store => {
            return state.mess;
        }
    },
    mutations: {
        updateregno: (state, payload) => {
            state.regno = payload;
        }
    }
});