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
