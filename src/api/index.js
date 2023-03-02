let config = {
    host: process.env.VUE_APP_HOST,
    host_user: process.env.VUE_APP_USER,
    api: process.env.VUE_APP_HOST_API,
  
    /*
     *  Without auth
     * */
  
    Login: "/api/user/login",
    Register : "/api/user/register"
 
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
        if (value && options.prototype.hasOwnProperty.call(options,options[value])) {
          endpoint = endpoint.replace(`{${value}}`, options[value]);
        }
      }
      return endpoint;
    } catch (e) {
      console.log(e);
    }
  };
  
  export default api;
  