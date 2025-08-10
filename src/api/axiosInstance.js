import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

export default axios.create({
    // baseURL: "https://node-metivta.onrender.com"
    baseURL: "http://localhost:3003",
    withCredentials: true
});