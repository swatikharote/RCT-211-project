import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const Login = (userDetails) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    console.log(userDetails);
    return axios.post("https://reqres.in/api/login", userDetails).then((res) => {
        console.log(res.data)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: LOGIN_FAILURE })
    })
}