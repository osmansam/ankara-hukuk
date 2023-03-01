import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "/api/v1";

//Create Lawyer
export const createLawyerThunk = async (url, lawyer, thunkAPI) => {
  try {
    const resp = await axios.post(`${baseURL}/${url}`, lawyer);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
