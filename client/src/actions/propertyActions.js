import { GET_PROPERTIES, PROPERTY_LOADING } from "./types";
import axios from "axios";

export const getProperties = () => async dispatch => {
  dispatch(isLoading());
  setTimeout(() => {
    axios
      .get("api/properties")
      .then(res =>
        dispatch({
          type: GET_PROPERTIES,
          payload: res.data
        })
      )
      .catch(err => console.log("err: ", err));
  }, 2000);
};

export const isLoading = () => {
  return {
    type: PROPERTY_LOADING
  };
};
