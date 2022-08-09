import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
export const GET_DETAIL = "GET_DETAIL";
export const GET_CONTENT_BY_NAME = "GET_CONTENT_BY_NAME";
export const GET_ALL_CONTENT = "GET_ALL_CONTENT";
export const ACCES_TO_ADMIN = "ACCES_TO_ADMIN";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const UPDATE_USER = "UPDATE_USER";

export function update_user(id, payload, token){
    return async function(dispatch){
        try{
            const response = await axios.put(`http://localhost:3001/api/users/${id}`, 
            {headers: { Authorization: `Bearer ${token}`}},
            {data:payload});
            dispatch({
                type: UPDATE_USER,
            })
        }catch(error){
            console.log(error);
        }
    }
}

export function get_all_users(token) {
  return async (dispatch) => {
    try {
        console.log("hasta aca llego el flujo")
      const response = await axios.get("http://localhost:3001/api/users",
      {headers: { Authorization: `Bearer ${token}` }});
      dispatch({
        type: GET_ALL_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export function acces_to_admin(usuario) {
    return async function (dispatch) {
        const r = await axios.post(`http://localhost:3001/api/users/admin/`, usuario);
        dispatch({
            type: ACCES_TO_ADMIN,
            payload: r.data
        });
    }
};

export function get_all_content(){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/api/contents`);
        dispatch({
            type: GET_ALL_CONTENT,
            payload: response.data
        })
    }
};

export function get_content_by_name(name){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/api/contents?title=${name}`);
        console.log(response)
        dispatch({
            type: GET_CONTENT_BY_NAME,
            payload: [response.data[0]]
        })
    }
}

export function get_detail(id){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/api/contents/${id}`);
        dispatch({
            type: GET_DETAIL,
            payload: response.data
        })
    }
};

export function register(usuario) {
    return async function (dispatch) {
        const r = await axios.post(`http://localhost:3001/api/auth/register`, usuario);
        dispatch({
            type: REGISTER,
            payload: r.data.results
        });
    }
};

export function login(usuario) {
    return async function (dispatch) {
        const r = await axios.post(`http://localhost:3001/api/auth/login`, usuario);
        dispatch({
            type: LOGIN,
            payload: r.data.results
        });
    }
};

export function logout() {
    return async function (dispatch) {
        dispatch({ type: LOGOUT });
    }
};

