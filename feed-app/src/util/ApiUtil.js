import axios from "axios";
import { API_BASE_URL } from "../common/constants";
const frameToken = (token) => `Bearer ${token}`;

export const loginApi = async (username, password) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/login`;
    const apiResponse = await axios.post(url, { username, password });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (e) {
    console.log(e);
  } finally {
    return response;
  }
};