import React, { useState } from 'react';
import './BookingForm.css'

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [data, setData] = useState({date: '', time: '', guests: '', occasion: 'none'});
    const [touched, setTouched] = useState({date: false, time: false, guests: false});

    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    const dateChange = e => {
        const selectedDateString = e.target.value;
        const selectedDate = new Date(selectedDateString);
        setData(prev => ({...prev, date: selectedDateString}));
        dispatch({ type: 'update', date: selectedDate });
    };

    const handleErrors = (inputFieldType) => {
        return (
            <p className="error">Please select a {inputFieldType}</p>
        )
    };

    const getDateErrorMessage = () => {
        if (data.date && (data.date < today || data.date > maxDateStr)) {
            return handleErrors("valid date");
        }
        if (touched.date && !data.date) {
            return handleErrors("date");
        }
        return null;
    };

    const getTimeErrorMessage = () => {
        if (touched.time && !data.time) {
            return handleErrors("time");
        }
        return null;
    };

    const getGuestsErrorMessage = () => {
        if (touched.guests && !data.guests) {
            return handleErrors("number of guests");
        }
        return null;
    };

    const getFormIsValid = () => {
        return !!(
            data.date &&
            data.time &&
            data.guests &&
            data.occasion
        )
    };

    const clearForm = () => {
        setData({date: '', time: '', guests: '', occasion: 'none'});
        setTouched({date: false, time: false, guests: false});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!getFormIsValid()) {
            setTouched(prev => ({
                ...prev,
                date: true,
                time: true,
                guests: true,
                occasion: true
            }));
            return;
        }

        submitForm(data);
        clearForm();
    };

    return (
        <main className='form-container'>
            <form onSubmit={handleSubmit} noValidate>
                <div className='input-field'>
                    <label htmlFor="res-date">Choose Date</label>
                    <input
                        type="date"
                        id="res-date"
                        min={today}
                        max={maxDateStr}
                        value={data.date}
                        onChange={dateChange}
                        onBlur={() => setTouched(prev => ({...prev, date: true}))}
                        required
                        style={touched.date && !data.date ? {borderColor: '#D32F2F'} : {}}
                        aria-invalid={touched.date && !data.date ? "true" : "false"}
                        aria-describedby={touched.date && !data.date ? "date-error" : undefined}
                    />
                    <div
                        id="date-error"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {getDateErrorMessage()}
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
                        style={touched.time && !data.time ? {borderColor: '#D32F2F'} : {}}
                        aria-invalid={touched.time && !data.time ? "true" : "false"}
                        aria-describedby={touched.time && !data.time ? "time-error" : undefined}
                    >
                        <option value="" hidden disabled>Select time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    <div
                        id="time-error"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {getTimeErrorMessage()}
                    </div>
                </div>

                <div className='input-field'>
                    <label htmlFor="guests">Number of Guests</label>
                    <select
                        id="guests"
                        value={data.guests}
                        onChange={(e) => setData(prev => ({...prev, guests: e.target.value}))}
                        onBlur={() => setTouched(prev => ({...prev, guests: true}))}
                        required
                        style={touched.guests && !data.guests ? {borderColor: '#D32F2F'} : {}}
                        aria-invalid={touched.guests && !data.guests ? "true" : "false"}
                        aria-describedby={touched.guests && !data.guests ? "guests-error" : undefined}
                    >
                        <option value="" hidden disabled>Select number of guests</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                        ))}
                    </select>
                    <div
                        id="guests-error"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {getGuestsErrorMessage()}
                    </div>
                </div>

                <div className='input-field'>
                    <fieldset>
                        <legend>
                            Choose Occasion (optional)
                        </legend>
                        <label>
                            <input
                                type="radio"
                                name="occasion"
                                value="none"
                                checked={data.occasion === "none"}
                                onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                            /> None
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="occasion"
                                value="birthday"
                                checked={data.occasion === "birthday"}
                                onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                            /> Birthday
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="occasion"
                                value="anniversary"
                                checked={data.occasion === "anniversary"}
                                onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}
                            /> Anniversary
                        </label>
                    </fieldset>
                </div>

                <button
                    type="submit"
                    className={!getFormIsValid() ? "button-disabled" : "button-active"}
                    aria-disabled={!getFormIsValid()}
                >
                    Make Your Reservation
                </button>
            </form>
        </main>
    )
}

export default BookingForm;