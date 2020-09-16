import {createStore} from 'redux'
import {bookingsReducer} from './bookings/reducer'

export const store = createStore(bookingsReducer)
