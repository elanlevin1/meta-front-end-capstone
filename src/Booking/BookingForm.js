import React, { useState } from 'react';
import BookingSlot from './BookingSlot'
import './BookingForm.css'

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [data, setData] = useState({date: '', time: '', guests: '', occasion: ''})
    const [touched, setTouched] = useState({date: false, time: false, guests: false, occasion: false})

    const dateChange = e => {
        const selectedDateString = e.target.value;
        const selectedDate = new Date(selectedDateString);
        setData(prev => ({...prev, date: selectedDateString}));
        dispatch({ type: 'update', date: selectedDate });
    }

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
    }

    const getFormIsValid = () => {
        return (
            data.date &&
            data.time &&
            data.guests &&
            data.occasion
        )
    }

    const clearForm = () => {
        setData({date: '', time: '', guests: '', occasion: ''});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData)
        clearForm();
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px", margin: "2rem"}}>
            <div className='input-field'>
                <label htmlFor="res-date">Choose Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={data.date}
                    onChange={dateChange}
                    onBlur={() => setTouched(prev => ({...prev, date: true}))}
                    required/>
                {touched.date && !data.date && handleErrors("date")}
            </div>

            <div className='input-field'>
                <label htmlFor="res-time">Choose Time</label>
                <select
                    id="res-time"
                    value={data.time}
                    onChange={(e) => setData(prev => ({...prev, time: e.target.value}))}
                    onBlur={() => setTouched(prev => ({...prev, time: true}))}
                    required>
                        <option value="" hidden>Choose a Time</option>
                        {availableTimes.map((time) => (
                            // <option key={time} value={time}>
                            //     {time}
                            // </option>
                            <BookingSlot key={time} time={time}/>
                        ))}
                </select>
                {touched.time && !data.time && handleErrors("time")}
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
                    required/>
                {touched.guests && data.guests < 1 && handleErrors("number of guests between 1 and 10")}
            </div>

            <div className='input-field'>
                <label htmlFor="occasion">Choose Occasion</label>
                <select
                    id="occasion"
                    value={data.occasion}
                    onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                    onBlur={() => setTouched(prev => ({...prev, occasion: true}))}
                    required>
                        <option value="" hidden>Choose an Occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                </select>
                {touched.occasion && !data.occasion && handleErrors("occasion")}
            </div>

            <button type="submit" disabled={!getFormIsValid()}>Make Your Reservation</button>
        </form>
    )
}

export default BookingForm;