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
    password: store => {
      return state.password;
    },
    block: store => {
      return state.block;
    },
    floor: store => {
      return state.floor;
    },
    room: store => {
      return state.room_no;
    },
    regno: store => {
      return state.registration_number;
    }
  },
  mutations: {
    updateDetails: (state, payload) => {
      state.registration_number = payload.regno;
      state.mess = payload.mess;
      state.block = payload.block;
      state.floor = payload.floor;
      state.room_no = payload.room;
    },
    fetchUserDetails: (state, payload) => {
      axios.get(
          "http://192.168.43.40:8000/api/users/" +
          payload.regno +
          "/?format=json", {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }
        )
        .then(response => {
          var customResponse = response.data;
          customResponse.password = state.password;
          state = customResponse;
        })
        .catch(e => {
          console.log("error fetching user data",e);
        });
    }
  },
  //   modules: {
  //     user
  //   }
});
