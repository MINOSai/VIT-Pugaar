const state ={
    regno: '16BCE0587',
    name: 'Yaswant Narayan',
    mess: 'F-Block mess',
    block: 'F-block',
    floor: '5',
    room: '654'
};

const getters = {
    regno: state => {
        return state.regno;
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