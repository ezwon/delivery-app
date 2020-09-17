import _ from 'lodash';

export interface BookingState {
    bookings: typeBooking[]
}

export type typeBooking = {
    id: string,
    origin: {
        name: string,
        address: string,
        contact: string
    },
    destination: {
        name: string,
        address: string,
        contact: string
    },
    date: Date
    courier: string
}

const initialState = {
    bookings: [

    ]
}

export const bookingsReducer = (state:BookingState = initialState, action: any) => {
    switch(action.type){
        case "ADD_BOOKING": {
            return {...state, bookings: [...state.bookings, action.payload]}
        }
        case "DELETE_BOOKING": {
            let newList = _.remove(state.bookings, (booking: any) => {
                return booking.id !== action.payload.id;
            });
            return {...state, bookings: newList}
        }
        case "ASSIGN_BOOKING": {

            let newList = state.bookings.map((booking: typeBooking)=>{
                if(booking.id === action.payload.bookingId){
                    booking.courier = action.payload.courier
                }
                return booking;
            })
            return {...state, bookings: newList}
        }
        default:
            return state
    }
}
