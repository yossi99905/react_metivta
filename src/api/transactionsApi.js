import axios from "./axiosInstance";

export const getLastTransactions = (email) => axios.get(`/transactions/${email}`);