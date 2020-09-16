import { Action } from "./actions"

export interface BookingState {
    bookings: typeBooking[]
}

export type typeBooking = {
    name: string,
    address: string,
    contact: string
}

const initialState = {
    bookings: [

    ]
}

export const bookingsReducer = (state:BookingState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_BOOKING": {
            return {...state, bookings: [...state.bookings, action.payload]}
        }
        default:
            return state
    }
}
