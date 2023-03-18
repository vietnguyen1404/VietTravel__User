import api from "@/api";
import Vue from "vue";

export default {
    actions: {
        async BookingTour(_,options = {}) {
            let response = await Vue.axios({
                method: "POST",
                url: api.BookingTour , 
                data : options
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
