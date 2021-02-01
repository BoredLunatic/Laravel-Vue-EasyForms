import FormLoader from "./components/forms/FormLoader.vue";

const LaravelEasyForms = {
  install(Vue) {
    Vue.component("form-loader", FormLoader);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(LaravelEasyForms);
  window.Vue.mixins({
    methods: {
      is_object_empty: function(o) {
        for (var p in o) {
          if (Object.prototype.hasOwnProperty.call(o,p)) {
            return false; 
          } 
        }
        return true;
      },
      is_object: function(o) { 
        return typeof o === "object" 
      },
      is_array: function(o) { 
        return Array.isArray(o) 
      },
      is_file: function(o) { 
        return('File' in window && o instanceof File) ? true : false 
      },
      is_undefined: function(o) { 
        return typeof(o) === 'undefined' 
      },
      snake_to_camel: function(s) {
        return s.toLowerCase().replace(/[-_][a-z0-9]/g, (group) => group.slice(-1).toUpperCase());
      },
      request: function(type, url, data = null, expecting_results = false , showalert = true , parameters = {} , loader = true) {
        var _this = this;
        let default_parameters = { headers: { 'Content-Type': 'application/json' } };
        let send_parameters = { headers: { ...default_parameters, ...parameters } };
        let return_reponse = {};
        return axios[type](url, data, send_parameters)
        .then(response => {
            var request_response = response.data;
            if(this.is_object(request_response)) {
                if(! request_response.success) {
                    if(! this.is_object(request_response.data)) {
                        if(showalert)
                          return_reponse.alert = { text: request_response.data , colour: 'error' };
                    }else{
                        if(showalert)
                          return_reponse.alert = { text: 'Please correct your form errors' , colour: 'error' };
                    }
                    return_reponse.response = request_response;
                } else {
                    if(showalert)
                      return_reponse.alert = { text: 'Connection Error - Please try again' , colour: 'error' };
                    
                }
            } else {
                if(showalert)
                  return_reponse.alert = { text: 'Connection Error - Please try again' , colour: 'error' };
            }
            return_reponse.response = request_response;
            if(loader)  
              return_reponse.loader = false;
  
            console.log( 'THEN' );
            console.log( return_reponse );
            return return_reponse;
        });
      }
    } 
  });
}

export default LaravelEasyForms;
