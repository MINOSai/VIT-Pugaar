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
    password: state => {
      return state.password;
    },
    block: state => {
      return state.block;
    },
    floor: state => {
      return state.floor;
    },
    room: state => {
      return state.room_no;
    },
    regno: state => {
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
          "http://127.0.0.1:8000/api/users/" +
          payload.regno +
          "/?format=json", {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }
        )
        .then(response => {
          console.log("Inside store get details",response.data);
          var customResponse = response.data;
          customResponse.password = state.password;
          state = customResponse;
        })
        .catch(e => {
          console.log("error fetching user data",e);
        });
    },
    updateComplaints: (state,payload) => {
      console.log("inside updatecComplaints - before update",store.complaints);
      console.log("inside update complaints - payload",payload);
      state.complaints = payload;
      console.log("inside updatecComplaints - after update",store.complaints);
    }
  },
  //   modules: {
  //     user
  //   }
});
