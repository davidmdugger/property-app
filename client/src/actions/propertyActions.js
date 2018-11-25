import { GET_PROPERTIES, PROPERTY_LOADING, CREATE_PROPERTY } from "./types";
import axios from "axios";

export const getProperties = () => async dispatch => {
  dispatch(isLoading());

  axios
    .get("api/properties")
    .then(res =>
      dispatch({
        type: GET_PROPERTIES,
        payload: res.data
      })
    )
    .catch(err => console.log("err: ", err));
};

export const createProperty = propertyData => dispatch => {
  axios
    .post("/api/properties", propertyData)
    .then(res =>
      dispatch({
        type: CREATE_PROPERTY,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const isLoading = () => {
  return {
    type: PROPERTY_LOADING
  };
};
