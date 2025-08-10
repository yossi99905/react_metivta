import axios from "./axiosInstance";

export const getStudents = () => axios.get("/students");

export const getLastTransactions = (email) => axios.get(`/transactions/${email}`);