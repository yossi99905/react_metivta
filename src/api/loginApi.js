import axios from "./axiosInstance";

export const login = async (data) => {
    try {
        const resp = await axios.post("/users/login", data, { withCredentials: true });
        return resp;
    } catch (error) {
        console.log(error);
    }
};