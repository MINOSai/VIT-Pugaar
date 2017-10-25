const state ={
    regno: '16BCE0587',
    name: 'Yaswant Narayan',
    block: 'F-block',
    floor: '5',
    room: '654'
};

const getters = {
    getDetails: state => {
        return {
            'regno' : state.registration_number,
            'name' : state.first_name + state.last_name,
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
        state = payload;
    }
};

export default {
    state,
    getters,
    mutations
}