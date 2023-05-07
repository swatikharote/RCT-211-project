import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST ,PATCH_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS} from "./actionType";

const initialState={
  isLoading :false,
  products : [],
  isError :false

}

export const reducer=(state =initialState,{type,payload})=>{
switch (type) {
    case PRODUCT_REQUEST:{
        return{
            ...state ,isLoading:true,
        }
    }
    case PRODUCT_FAILURE:{
        return{...state ,isError:true,isLoading:false}
    }
    case GET_PRODUCT_SUCCESS:{
        return{...state ,isLoading:false,products:payload}
    }
    case POST_PRODUCT_SUCCESS:{
        return{...state , isLoading:false}
    }
    case PATCH_PRODUCT_SUCCESS:{
        return{...state ,isLoading:false}
    }
    case DELETE_PRODUCT_SUCCESS:{
        return{...state ,isLoading:false}
    }
       
        
      

    default:
       return state
}
}