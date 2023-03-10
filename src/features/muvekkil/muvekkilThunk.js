import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "/api/v1";

//Create Muvekkil
export const createMuvekkilThunk = async (url, muvekkil, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseURL}/${url}`, muvekkil);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
//Update Muvekkil
export const updateMuvekkilThunk = async (url, muvekkil, thunkAPI) => {
  try {
    const resp = await axios.put(`${baseURL}/${url}`, muvekkil);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

//Delete Muvekkil
export const deleteMuvekkilThunk = async (url, muvekkil, thunkAPI) => {
  try {
    const resp = await axios.delete(`${baseURL}/${url}`, muvekkil);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
