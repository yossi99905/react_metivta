import axios from "./axiosInstance";

export const payment = async (data) => {
    try {
        const resp = await axios.post("/payment", data);
        return resp;
    } catch (error) {
        console.log(error);
    }
};