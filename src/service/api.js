import axios from "axios";

const URL =
  "http://react-node-env.eba-33bjp3hj.ap-south-1.elasticbeanstalk.com/";
// const URL = "http://localhost:5643";

export const authenticatesSignup = async (data) => {
  try {
    const registerdata = await axios.post(`${URL}/user/register`, data);
    return registerdata;
  } catch (error) {
    return error.response;
  }
};

export const authenticatesLogin = async (data) => {
  try {
    const logindata = await axios.post(`${URL}/user/login`, data);
    localStorage.setItem("token", logindata.data.token);
    localStorage.setItem("refreshtoken", logindata.data.refreshtoken);
    return logindata;
  } catch (error) {
    return error;
  }
};

export const refreshCall = async (data) => {
  try {
    const logindata = await axios.post(`${URL}/user/refresh-token`, data);

    localStorage.setItem("token", logindata.data.token);
    localStorage.setItem("refreshtoken", logindata.data.refreshtoken);
    return logindata;
  } catch (error) {
    return error;
  }
};
