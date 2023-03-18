import api from "@/api";
import Vue from "vue";

export default {
    actions: {
        async GetListTour(_,options = {}) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListTour,
                params : options
            });

            return response.data;
        },
        async GetTour(_, tourId) {
            let response = await Vue.axios({
                method: "GET",
                // url: api.GetTour,
                // params: { id: tourId },
                url: api.params("GetTour", { id: tourId }),
            });
            return response.data;
        },
    },
};
