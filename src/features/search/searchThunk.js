import axios from "axios";
import { checkForUnauthorizedResponse } from "../../utils/axios";
const baseURL = "/api/v1";

export const getAllHabersThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, sort } = thunkAPI.getState().search;

  let url = `/habers?status=${searchStatus}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const resp = await axios.get(`${baseURL}/${url}`);

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
