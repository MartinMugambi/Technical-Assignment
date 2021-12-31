import { LOADING, FETCH_DATA, ERROR } from "./type";
import axios from "axios";

const  API_KEY ='b762c93e-42b7-4b2c-8eee-f975887fa69e';

 

export const loading = () =>{
    return {
        type: LOADING,
    }
}

export const fecthdata = (data: any) =>{
    return {
       type: FETCH_DATA,
       payload: data,
    }
}

export const err = (error: string) =>{
    return {
        type: ERROR,
         payload: error,
    }
}

export const  data = () => {
    return (dispatch: any) =>{
      dispatch(loading);
      axios.get(`https://api.thecatapi.com/v1/breeds?${API_KEY}`).then(response =>{
        const data:any = response.data;
        dispatch(fecthdata(data));
      }).catch(err =>{
        const msg:any = err.message;
        dispatch(err(msg))
      })
    }
}