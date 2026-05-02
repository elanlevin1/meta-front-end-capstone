import React, { useState } from 'react';
import BookingSlot from './BookingSlot'

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const dateChange = e => {
        const selectedDateString = e.target.value;
        const selectedDate = new Date(selectedDateString);
        setDate(selectedDateString);
        dispatch({ type: 'update', date: selectedDate });
    }

    const formData = {
        date: date,
        time: time,
        guests: guests,
        occasion: occasion
    };
    console.log(availableTimes);
    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px", margin: "2rem"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={dateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((time) => (
                    // <option key={time} value={time}>
                    //     {time}
                    // </option>
                    <BookingSlot key={time} time={time}/>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onClick={() => submitForm(formData)}/>
        </form>
    )
}

export default BookingForm;