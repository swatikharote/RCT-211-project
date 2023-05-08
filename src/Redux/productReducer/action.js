import axios from "axios";
import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";



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


export const getAccomodation = (id, obj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })

    return axios.get(`https://real-cyan-gecko-wear.cyclic.app/accommodations?destination_id=${id}`, obj).then((res) => {
        console.log(res.data);
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
    }).catch(() => {
        dispatch({ type: PRODUCT_FAILURE })
    })
}

export const addDestination = (newDestination) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios
        .post("https://real-cyan-gecko-wear.cyclic.app/destinations", newDestination)
        .then((res) => {
            dispatch({ type: POST_PRODUCT_SUCCESS })
        }).catch((error) => {
            console.log(error.response.data)
            dispatch({ type: PRODUCT_FAILURE })
        })
}

export const editDestination = (id, data) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.
        patch(`https://real-cyan-gecko-wear.cyclic.app/destinations/${id}`, data)
        .then((res) => {
            dispatch({ type: PATCH_PRODUCT_SUCCESS })
        }).catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: PRODUCT_FAILURE
            })
        })
}

