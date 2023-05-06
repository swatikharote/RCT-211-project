import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";



export const getDestination = (limit, paramObj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.get(`https://real-cyan-gecko-wear.cyclic.app/destinations?_limit=${limit}`, paramObj).then((res) => {
        // console.log(res.data)
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
    })
        .catch(() => {
            dispatch({ type: PRODUCT_FAILURE })
        })



}

