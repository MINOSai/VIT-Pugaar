import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import user from './modules/user'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {
    getUserDetails: state => {
      return {
        'regno': state.registration_number,
        'name': state.first_name + ' ' + state.last_name,
        'mess': 'F-Block mess',
        'block': state.block,
        'floor': state.floor,
        'room': state.room_no
      }
    },
    getUserComplaints: state => {
      return state.complaints;
    },
    mess: store => {
      return state.mess;
    }
  },
  mutations: {
    updateDetails: (state, payload) => {
      state.registration_number = payload.regno;
      state.mess = payload.mess;
      state.block = payload.block;
      state.floor = payload.floor;
      state.room_no = payload.room;
    }
  },
  //   modules: {
  //     user
  //   }
});
