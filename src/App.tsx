import React from "react";
import {CreateBooking} from "./bookings/components/CreateBooking";
import {useSelector, useDispatch} from "react-redux";
import {BookingState} from "./bookings/reducer";
import {addBooking} from "./bookings/actions";
import {typeBooking} from "./bookings/reducer";
import './App.css';

function App() {
    const bookings = useSelector<BookingState, BookingState["bookings"]>(
        (state) => state.bookings
    );
    const dispatch = useDispatch();

    const onCreateBooking = (booking: typeBooking) => {
        dispatch(addBooking(booking));
    };

    return (
        <>
            <CreateBooking addBooking={onCreateBooking}/>
            <ul>
                {bookings.map((booking: typeBooking) => {
                    return <li key={booking.name}>{booking.name} - {booking.contact} - {booking.address}</li>;
                })}
            </ul>
        </>
    );
}

export default App;
