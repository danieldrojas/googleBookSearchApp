
import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&apikey=AIzaSyC50jasZIMiI90vIhXUrCmR3piz8PaXyCI";

export default {
    getBook: function (query) {
        
        return axios.get(URL + query + APIKEY);
    }
};
