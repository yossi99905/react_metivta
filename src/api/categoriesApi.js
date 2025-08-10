import axios from "./axiosInstance";

export const getCategories = async () => {
  try {
    const resp = await axios.get("/categories");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
