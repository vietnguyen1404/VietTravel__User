let config = {
    host: process.env.VUE_APP_HOST,
    host_user: process.env.VUE_APP_USER,
    api: process.env.VUE_APP_HOST_API,

    /*
     *  Without auth
     * */

    Login: "/api/user/login",
    Register: "/api/user/register",

    //Tour
    GetListTour: "/api/tour/list",
    GetTour: "/api/tour/detail/{id}",
    SearchTour : "/api/tour/list/search-tours",

    //Booking
    BookingTour : "/api/booking/create"
};

let api = new Proxy(config, {
    get(target, name) {
        if (name === "host_user") return Reflect.get(target, name);
        if (name !== "params") {
            return (
                Reflect.get(target, "api").replace(/\/$/, "") +
                Reflect.get(target, name)
            );
        } else {
            return Reflect.get(target, name);
        }
    },
});

api.params = (name, options) => {
    try {
        let endpoint = api[name];
        for (let value in options) {
            if (value &&  Object.prototype.hasOwnProperty.call(options, value)) {
                endpoint = endpoint.replace(`{${value}}`, options[value]);
            }
        }
        return endpoint;
    } catch (e) {
        console.log(e);
    }
};

export default api;
