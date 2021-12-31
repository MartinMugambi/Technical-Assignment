import { LIKE, DISLIKE } from "./types";

type CounterState= {
    likes: number,
    disLikes: number,
}

type ActionState = {
    type: string,
}

const initialState:CounterState = {
    likes: 0,
    disLikes: 0,
}



const counterReducer = (state =initialState, action:ActionState) =>{
        switch(action.type){
            case LIKE:
                return {
                    ...state,
                   likes: state.likes + 1,
                }

                case DISLIKE:
                    return {
                        ...state, 
                         disLikes: state.disLikes - 1,
                    }

                    default: return state;
        }
}


export default counterReducer;