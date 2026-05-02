import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "update":
            return fetchAPI(action.date);
        default:
            return state;
    }
}

export const initializeTimes = (date) => {
    return fetchAPI(date);
}

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, new Date(), initializeTimes);

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/booking-confirmation');
        }
    }

    return (
        <div>
            <h1>Reserve a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />

        </div>
    )
}

export default BookingPage;