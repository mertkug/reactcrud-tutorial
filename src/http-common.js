import axios from "axios"

export default axios.create({
    baseURL : "https://654e4b47cbc325355742b0b8.mockapi.io/api/",
    headers : {
        "Content-type" : "application/json"
    }
});