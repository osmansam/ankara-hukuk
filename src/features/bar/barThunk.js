import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "/api/v1";

//Create Bar
export const createBarThunk = async (url, bar, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseURL}/${url}`, bar);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
