import {
  GET_PROPERTIES,
  PROPERTY_LOADING,
  CREATE_PROPERTY,
  DELETE_PROPERTY,
  GET_PROPERTY
} from "./types";
import axios from "axios";

const api = "http://localhost:8080";

export const getProperties = () => dispatch => {
  dispatch(isLoading());

  axios
    .get("/api/properties")
    .then(res =>
      dispatch({
        type: GET_PROPERTIES,
        payload: res.data
      })
    )
    .catch(err => console.log("err: ", err));
};

export const getProperty = id => async dispatch => {
  dispatch(isLoading());

  await axios
    .get(`/api/properties/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROPERTY,
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

// DELETE PROPERTY
export const deleteProperty = id => dispatch => {
  if (
    window.confirm("Are you sure? Deleting this property cannot be undone.")
  ) {
    axios
      .delete(`/api/properties/${id}`)
      .then(
        dispatch({
          type: DELETE_PROPERTY,
          payload: id
        })
      )
      .catch(err => console.log(err));
  }
};

export const isLoading = () => {
  return {
    type: PROPERTY_LOADING
  };
};
