import api from "@/api";
import Vue from "vue";
// import _ from "lodash";

export default {
    state: {
        user: JSON.parse(localStorage.getItem("user")) ?? null,
    },
    getters: {
        getUser: (state) => state.user,
    },
    mutations: {
        setUser(state, user) {
            localStorage.setItem("user", JSON.stringify(user));
            state.user = { ...user };
        },
        setLogOut(state) {
            state.user = null;
            localStorage.clear();
        },
    },
    actions: {
        async PostLogin({ commit }, account) {
            let response = await Vue.axios({
                method: "POST",
                url: api.Login,
                data: account,
            });
            if (response.data.code === 200) {
                commit("setUser", response.data.data);
            }
            return response.data;
        },
        logOut({ commit }) {
            commit("setLogOut");
        },
        async Register(_, form) {
            let response = await Vue.axios({
                method: "POST",
                url: api.Register,
                data: form,
            });
            return response.data;
        },
    },
};
