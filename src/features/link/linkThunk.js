import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "/api/v1";

//Create Link
export const createLinkThunk = async (url, link, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseURL}/${url}`, link);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

//Get Links
export const getLinksThunk = async (url, thunkAPI) => {
  try {
    const resp = await axios.get(`${baseURL}/${url}`);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
