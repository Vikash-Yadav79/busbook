
import usersDetails from "../utils/Users";
import { USER_DETAILS, CURRENT_USER } from "./ActionType";

const initialState = {
    currentUser: {},
    userDetails: usersDetails,
   
};

export const mainReducer = (state = initialState , action) => { 
    const {type,payload } = action;
    switch(type){
        case CURRENT_USER:{
            return {...state, currentUser: payload}
        }
        case USER_DETAILS:{
            return {...state, usersDetails : payload}
        }
        default:{
            return {...state}
          }

    }
}

