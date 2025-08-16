import axios from "./axiosInstance";

export const paymentByEmail = async (data) => {
    try {
        const resp = await axios.post("/payment/email", data);
        return resp;
    } catch (error) {
        console.log(error);
    }
};

export const paymentByCard = async (data) => {
    try {
        const resp = await axios.post("/payment/card", data);
        return resp;
    } catch (error) {
        console.log(error);
    }
};