import { GET_PROPERTIES, PROPERTY_LOADING } from "../actions/types";

const initialState = {
  properties: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROPERTY_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
