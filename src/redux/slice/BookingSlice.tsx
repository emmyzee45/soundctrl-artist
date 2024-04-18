import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingProps } from "@types";

const initialState = {
    bookings: [] as BookingProps[],
    isLoading: false,
    error: false
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        getBookingStart: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        getBookingSuccess: (state, action: PayloadAction<BookingProps[]>) => {
            state.bookings = action.payload;
            state.isLoading = false;
        },
        getBookingFailure: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        addBookingStart: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        addBookingSuccess: (state, action: PayloadAction<BookingProps>) => {
            state.bookings.push(action.payload);
            state.isLoading = false;
        },
        addBookingFailure: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        updateBookingStart: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        updateBookingSuccess: (state, action: PayloadAction<BookingProps>) => {
            state.bookings[
                state.bookings.findIndex((item) => item._id === action.payload._id)
            ] = action.payload;
            state.isLoading = false;
        },
        updateBookingFailure: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        deleteBookingStart: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        deleteBookingSuccess: (state, action) => {
            state.bookings.splice(
                state.bookings.findIndex((item) => item._id === action.payload._id), 1
            );
            state.isLoading = false;
        },
        deleteBookingFailure: (state) => {
            state.error = true;
            state.isLoading = false;
        }
    }
});

export const {
    getBookingFailure,
    getBookingStart,
    getBookingSuccess,
    updateBookingFailure,
    updateBookingSuccess,
    updateBookingStart,
    addBookingFailure,
    addBookingStart,
    addBookingSuccess,
} = bookingSlice.actions;

export default bookingSlice.reducer;