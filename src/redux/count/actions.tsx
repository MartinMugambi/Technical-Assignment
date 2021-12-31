import { LIKE, DISLIKE } from "./types";

export const like:any = () =>{
    return{
        type: LIKE,
    }
}

export const disLike:any = () =>{
    return {
        type: DISLIKE,
    }
}