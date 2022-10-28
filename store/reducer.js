
import usersDetails from "../src/screen/utils/Users";
import { USER_DETAILS, SET_USER, SET_BOOKING_DETAILS, DELETE_BOOKING_DETAIL, SET_NEW_USER } from "./actionType";

const initialState = {
    currentUser: {},
    userDetails: usersDetails,
    bookingDetails: [],
};

export const mainReducer = (state = initialState , action) => { 
    const {type,payload } = action;
    switch(type){
        case SET_USER:{
            return {...state, currentUser: payload}
        }
        case USER_DETAILS:{
            return {...state, usersDetails : payload}
        }
        case SET_BOOKING_DETAILS: {
            const details = [...state.bookingDetails];
            details.push(payload);
            return {...state, bookingDetails: [...details]};
        }
        case SET_NEW_USER: {
            const details = [...state.userDetails];
            details.push({...payload});
            console.log(details, 'New User');
            return {...state, userDetails: [...details]};
        }
        case DELETE_BOOKING_DETAIL: {
            const details = [...state.bookingDetails];
            const index = details.findIndex((detail) => detail.bookingId === payload);
            details.splice(index, 1);
            return {...state, bookingDetails: [...details]};
        }
        default:{
            return {...state}
        }

    }
}

