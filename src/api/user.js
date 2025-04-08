import { api } from "./axiosInstance";

export const getUserData = async () => {
  try {
    const { data } = await api.get("/auth/me");
    // console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
