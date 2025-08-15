import axios from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post("/products", product);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async ({ id, product }) => {
  try {
    const response = await axios.put(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
