import axios from "axios";
import * as actionType from "../constants/productConstants";
import { toast, ToastContainer } from "react-toastify";

const url = "http://hairnodes.us-east-1.elasticbeanstalk.com";
// const url = "http://localhost:5643";

export const getAllProduct = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/product/products`, { headers });
    console.log(data);

    dispatch({ type: actionType.GET_ALL_PRODUCTS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/product/products/${id}`, {
      headers,
    });
    dispatch({ type: actionType.GET_SINGLE_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};
