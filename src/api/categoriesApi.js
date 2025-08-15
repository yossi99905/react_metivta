import axios from "./axiosInstance";

export const getCategories = async () => {
  try {
    const resp = await axios.get("/categories");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (category) => {
  try {
    const resp = await axios.post("/categories", category);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const resp = await axios.delete(`/categories/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async ({ id, category }) => {
  try {
    const resp = await axios.put(`/categories/${id}`, category);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
