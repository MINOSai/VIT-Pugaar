const state ={
    registration_number: '16BCE0587',
    first_name: 'Yaswant',
    last_name: 'Narayan',
    mess: 'F-block mess',
    block: 'F-block',
    floor: '5',
    room_no: '654'
};

const getters = {
    getUserDetails: state => {
        return {
            'regno' : state.registration_number,
            'name' : state.first_name +' '+ state.last_name,
            'mess' : 'F-Block mess',
            'block' : state.block,
            'floor' : state.floor,
            'room' : state.room_no
        }
    },
    name: store => {
        return state.name;
    },
    mess: store => {
        return state.mess;
    }
};

const mutations = {
    updateDetails: (state, payload) => {
        state.registration_number = payload.regno;
        state.mess = payload.mess;
        state.block = payload.block;
        state.floor = payload.floor;
        state.room_no = payload.room;
    }
};

export default {
    state,
    getters,
    mutations
}