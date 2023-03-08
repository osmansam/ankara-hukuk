import { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";

const baseURL = "/api/v1";

//get Baslik

export const getBaslikThunk = async (thunkAPI) => {
  try {
    const resp = await axios.get(`${baseURL}/habers/baslik/`);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
