import React, { useState } from 'react';
import BookingSlot from './BookingSlot'
import './BookingForm.css'

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [data, setData] = useState({date: '', time: '', guests: '', occasion: ''});
    const [touched, setTouched] = useState({date: false, time: false, guests: false, occasion: false});

    const dateChange = e => {
        const selectedDateString = e.target.value;
        const selectedDate = new Date(selectedDateString);
        setData(prev => ({...prev, date: selectedDateString}));
        dispatch({ type: 'update', date: selectedDate });
    };

    const formData = {
        date: data.date,
        time: data.time,
        guests: data.guests,
        occasion: data.occasion,
    };

    const handleErrors = (inputFieldType) => {
        return (
            <p className="error">Please select a valid {inputFieldType}</p>
        )
    };

    const getFormIsValid = () => {
        return !!(
            data.date &&
            data.time &&
            (Number(data.guests) >= 1 && Number(data.guests) <= 10) &&
            data.occasion
        )
    };

    const clearForm = () => {
        setData({date: '', time: '', guests: '', occasion: ''});
    };

    const touchAllFields = () => {
        setTouched(prev => ({
            ...prev,
            date: true,
            time: true,
            guests: true,
            occasion: true
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!getFormIsValid()) {
            touchAllFields();
            return;
        }

        submitForm(formData);
        clearForm();
    };

    return (
        <form onSubmit={handleSubmit} noValidate style={{display: "grid", maxWidth: "200px", gap: "20px", margin: "2rem"}}>
            <div className='input-field'>
                <label htmlFor="res-date">Choose Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={data.date}
                    onChange={dateChange}
                    onBlur={() => setTouched(prev => ({...prev, date: true}))}
                    required
                    aria-invalid={touched.date && !data.date ? "true" : "false"}
                    aria-describedby={touched.date && !data.date ? "date-error" : undefined}
                />
                <div
                    className="error-message"
                    id="date-error"
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {touched.date && !data.date && handleErrors("date")}
                </div>
            </div>

            <div className='input-field'>
                <label htmlFor="res-time">Choose Time</label>
                <select
                    id="res-time"
                    value={data.time}
                    onChange={(e) => setData(prev => ({...prev, time: e.target.value}))}
                    onBlur={() => setTouched(prev => ({...prev, time: true}))}
                    required
                    aria-invalid={touched.time && !data.time ? "true" : "false"}
                    aria-describedby={touched.time && !data.time ? "time-error" : undefined}
                >
                    <option value="" hidden>Choose a Time</option>
                    {availableTimes.map((time) => (
                        // <option key={time} value={time}>
                        //     {time}
                        // </option>
                        <BookingSlot key={time} time={time}/>
                    ))}
                </select>
                <div
                    className="error-message"
                    id="time-error"
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {touched.time && !data.time && handleErrors("time")}
                </div>
            </div>

            <div className='input-field'>
                <label htmlFor="guests">Number of Guests</label>
                <input
                    type="number"
                    id="guests"
                    placeholder="Number of Guests"
                    min="1"
                    max="10"
                    value={data.guests}
                    onChange={(e) => setData(prev => ({...prev, guests: e.target.value}))}
                    onBlur={() => setTouched(prev => ({...prev, guests: true}))}
                    required
                    aria-invalid={touched.guests && (data.guests < 1 || data.guests > 10) ? "true" : "false"}
                    aria-describedby={touched.guests && !data.guests ? "guests-error" : undefined}
                />
                <div
                    className="error-message"
                    id="guests-error"
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {touched.guests && (data.guests < 1 || data.guests > 10) && handleErrors("number of guests between 1 and 10")}
                </div>
            </div>

            <div className='input-field'>
                <label htmlFor="occasion">Choose Occasion</label>
                <select
                    id="occasion"
                    value={data.occasion}
                    onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                    onBlur={() => setTouched(prev => ({...prev, occasion: true}))}
                    required
                    aria-invalid={touched.occasion && !data.occasion ? "true" : "false"}
                    aria-describedby={touched.occasion && !data.occasion ? "occasion-error" : undefined}
                >
                    <option value="" hidden>Choose an Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <div
                    className="error-message"
                    id="occasion-error"
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {touched.occasion && !data.occasion && handleErrors("occasion")}
                </div>
            </div>

            <button
                type="submit"
                className={!getFormIsValid() ? "button-disabled" : "button-active"}
                aria-disabled={!getFormIsValid()}
            >
                Make Your Reservation
            </button>
        </form>
    )
}

export default BookingForm;