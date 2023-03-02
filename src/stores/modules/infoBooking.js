export default {
    state: {
        date: null,
        participants: {
            adult: 0,
            children: 0,
            baby: 0,
        },
    },
    getters: {
    },
    mutations: {
        setTotal(state, total) {
            state.total = total;
        },
    },
};
