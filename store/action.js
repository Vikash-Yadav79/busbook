import { USER_DETAILS, SET_USER,SET_BOOKING_DETAILS, DELETE_BOOKING_DETAIL, SET_NEW_USER } from "./actionType";

export const usersDetails = () => ({
    type: USER_DETAILS, 
    payload: () => {

    }
})

export const setUser = (userDetails) => ({
    type: SET_USER,
    payload: userDetails,
});

export const setNewUser = (registerDetails) => ({
    type: SET_NEW_USER,
    payload: registerDetails,
});

export const setBookingDetails = (bookingDetails) => ({
    type: SET_BOOKING_DETAILS,
    payload: bookingDetails,
});

export const deleteBookingDetail = (bookingId) => ({
    type: DELETE_BOOKING_DETAIL,
    payload: bookingId,
});

