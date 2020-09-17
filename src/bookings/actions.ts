import {typeBooking} from "./reducer";

export const addBooking = (booking: typeBooking) => ({
    type: "ADD_BOOKING",
    payload: booking,
});

export const deleteBooking = (booking: typeBooking) => ({
    type: "DELETE_BOOKING",
    payload: booking,
});

export const assignBooking = (details: any) => ({
    type: "ASSIGN_BOOKING",
    payload: details,
});
