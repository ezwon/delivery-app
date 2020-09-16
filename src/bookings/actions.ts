import {typeBooking} from "./reducer";

export type Action = { type: "ADD_BOOKING"; payload: typeBooking };

export const addBooking = (booking: typeBooking): Action => ({
    type: "ADD_BOOKING",
    payload: booking,
});
