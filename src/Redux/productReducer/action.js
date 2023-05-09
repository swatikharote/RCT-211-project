import axios from "axios";
import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

const baseURL = "https://real-cyan-gecko-wear.cyclic.app" // server
// const baseURL = "http://localhost:8080" // local

export const getDestination = (limit, paramObj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.get(`${baseURL}/destinations?_limit=${limit}`, paramObj).then((res) => {
        // console.log(res.data)
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
    })
        .catch(() => {
            dispatch({ type: PRODUCT_FAILURE })
        })


}


export const getAccomodation = (id, obj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })

    return axios.get(`${baseURL}/accommodations?destination_id=${id}`, obj).then((res) => {
        console.log(res.data);
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
    }).catch(() => {
        dispatch({ type: PRODUCT_FAILURE })
    })
}

export const addDestination = (newDestination) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios
        .post(`${baseURL}/destinations`, newDestination)
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
        patch(`${baseURL}/destinations/${id}`, data)
        .then((res) => {
            dispatch({ type: PATCH_PRODUCT_SUCCESS })
        }).catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: PRODUCT_FAILURE
            })
        })
}

export const deleteDestination = (id) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios.
        delete(`${baseURL}/destinations/${id}`)
        .then((resp) => {
            dispatch({ type: PATCH_PRODUCT_SUCCESS })
            axios.get(`${baseURL}/destinations?_limit=10`).then((res) => {
                dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
            })
                .catch(() => {
                    dispatch({ type: PRODUCT_FAILURE })
                })

        }).catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: PRODUCT_FAILURE
            })
        })
}
