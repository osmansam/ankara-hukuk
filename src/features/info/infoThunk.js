import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "/api/v1";

//Create Info
export const createInfoThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseURL}/${url}`, info);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
