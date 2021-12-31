import {FETCH_DATA, ERROR } from "./type";


type dataState = {
  loading: boolean,
   data: any,
   error: boolean,
}

type dataAction = {
    type: string,
    payload: any,
}

const initialState: dataState = {
    loading: true,
    data: [],
    error: false,
}


const catReducer = (state =initialState, action:dataAction)=>{
     switch(action.type){
        case FETCH_DATA:
         return {
          ...state,
           laoding: state.loading= false,
            data: state.data = action.payload,
            error: state.error = false,
         } 
         case ERROR:
         return {
          ...state,
           laoding: state.loading= false,
            data: state.data = [],
            error: state.error = action.payload,
         }

         default: return state;
     }
}

export default  catReducer;