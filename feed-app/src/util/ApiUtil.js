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

export const signUpApi = async (
    username,
    name,
    emailId,
    phoneNumber,
    password
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/signup`;
    const apiResponse = await axios.post(url, {
      username,
      name,
      emailId,
      phoneNumber,
      password,
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const getFeedsApi = async (token, excludeUsername) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/Posts`;
    const apiResponse = await axios.get(url, {
      headers: { Authorization: frameToken(token) },
      params: { excludeUsername },
    });
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};


export const getBasicProfileApi = async (token, username) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/basicprofile/${username}`;
    const apiResponse = await axios.get(
        url,

        {
          headers: { Authorization: frameToken(token) },
        }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};

export const updateBasicProfileApi = async (
    token,
    position,
    company,
    username,
    skills,
    certification,
    companyAddress,
    interests,
    experience,
    education,
    languages
) => {
  let response = undefined;
  try {
    const url = `${API_BASE_URL}/user/personal/profile`;
    const apiResponse = await axios.put(
        url,
        {
          position,
          company,
          username,
          skills,
          certification,
          companyAddress,
          interests,
          experience,
          education,
          languages,
        },
        {
          headers: { Authorization: frameToken(token) },
        }
    );
    if (apiResponse.status === 200) {
      response = apiResponse.data;
    }
  } catch (err) {
    console.log(err);
  } finally {
    return response;
  }
};