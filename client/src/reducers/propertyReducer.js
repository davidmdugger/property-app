import {
  GET_PROPERTIES,
  PROPERTY_LOADING,
  CREATE_PROPERTY
} from "../actions/types";

const initialState = {
  properties: [],
  property: {},
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROPERTY_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_PROPERTY:
      return {
        ...state,
        properties: [action.payload, ...state.properties]
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
