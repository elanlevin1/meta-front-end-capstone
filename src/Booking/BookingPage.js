import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            // For now, just return the same times regardless of date
            // Later, you can update this to fetch or calculate times based on action.date
            return initializeTimes();
        default:
            return state;
    }
}

export const initializeTimes = () => {
        return (
            ["17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00"]
        )
    }

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    // const updateTimes = (state, action) => {
    //     return availableTimes;
    // }

    return (
        <div>
            <h1>Reserve a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />

        </div>
    )
}

export default BookingPage;