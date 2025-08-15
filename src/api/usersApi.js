import axios from "./axiosInstance";

export const getUsers = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post("/users", user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async ({ id, user }) => {
  try {
    const response = await axios.put(`/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
