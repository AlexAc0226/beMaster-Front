/* eslint-disable array-callback-return */
import {
  LOGIN,
  LOGOUT,
  GET_DETAIL,
  GET_ALL_CONTENT,
  GET_CONTENT_BY_NAME,
  GET_ALL_USERS
} from "../actions/index.js";

const initialState = {
  dataUser: [],
  dataAllUser: [],
  dataContent: [],
  dataContentEsp: [],
  details: null,
  loginStatus: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_ALL_USERS:
      return {
        ...state,
        dataAllUser: [action.payload]
      };

    case LOGIN:
      return {
        ...state,
        dataUser: action.payload,
        loginStatus: true
      };
      
    case LOGOUT:
      return {
        ...state,
        dataUser: [],
        details: [],
        loginStatus: false
      };

    case GET_ALL_CONTENT:
        return {
          ...state,
          dataContent: action.payload
        };

    case GET_DETAIL:
      return {
        ...state,
        details: [action.payload]
      };
      
    case GET_CONTENT_BY_NAME:
      return {
        ...state,
        dataContentEsp: [action.payload],
        dataContent: [action.payload],
        details: [action.payload]
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
