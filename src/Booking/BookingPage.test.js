import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { initializeTimes, updateTimes } from './BookingPage';
import BookingForm from './BookingForm';

describe('Booking Form', () => {
  const currentDate = new Date();
  const availableTimes = ['17:00', '18:00', '19:00'];
  const handleSubmit = jest.fn();
  const dispatch = jest.fn();

  test('Renders the BookingForm heading', () => {
    render(
      <BookingForm availableTimes={availableTimes}/>
    );
    const headingElement = screen.getByText(/Make Your Reservation/);
    expect(headingElement).toBeInTheDocument();
  })

  test('initializeTimes returns a non-empty array of available booking times', () => {
    const initialTimes = initializeTimes(currentDate);
    expect(initialTimes.length > 0);
  });

  test('updateTimes returns the same value that is provided in the state', () => {
    const result = updateTimes(availableTimes, currentDate);

    expect(result).toEqual(availableTimes);
  });

  test('The correct validation attributes are applied to the HTML element for each BookingForm input field', () => {
    render(
        <BookingForm availableTimes={availableTimes}  submitForm={handleSubmit} />
      );

    const date = screen.getByLabelText(/Choose Date/);
    fireEvent.change(date, { target: { value: '' } });
    fireEvent.blur(date);
    const dateError = screen.getByText(/Please select a valid date/);
    expect(dateError).toBeInTheDocument();

    const time = screen.getByLabelText(/Choose Time/);
    fireEvent.change(time, { target: { value: '' } });
    fireEvent.blur(time);
    const timeError = screen.getByText(/Please select a valid time/);
    expect(timeError).toBeInTheDocument();

    const guests = screen.getByLabelText(/Number of Guests/);
    fireEvent.change(guests, { target: { value: '' } });
    fireEvent.blur(guests);
    const guestsError = screen.getByText(/Please select a valid number of guests between 1 and 10/);
    expect(guestsError).toBeInTheDocument();

    const occasion = screen.getByLabelText(/Choose Occasion/);
    fireEvent.change(occasion, { target: { value: '' } });
    fireEvent.blur(occasion);
    const occasionError = screen.getByText(/Please select a valid occasion/);
    expect(occasionError).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute('disabled');
  });

  test('Form submits successfully with valid inputs', () => {
    render(
        <BookingForm availableTimes={availableTimes} dispatch={dispatch}  submitForm={handleSubmit} />
      );

    const date = screen.getByLabelText(/Choose Date/);
    const currentDateStr = currentDate.toISOString().split('T')[0];
    fireEvent.change(date, { target: { value: currentDateStr } });
    fireEvent.blur(date);

    const time = screen.getByLabelText(/Choose Time/);
    fireEvent.change(time, { target: { value: availableTimes[0] } });
    fireEvent.blur(time);

    const guests = screen.getByLabelText(/Number of Guests/);
    fireEvent.change(guests, { target: { value: '1' } });
    fireEvent.blur(guests);

    const occasion = screen.getByLabelText(/Choose Occasion/);
    fireEvent.change(occasion, { target: { value: 'Birthday' } });
    fireEvent.blur(occasion);

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      date: currentDateStr,
      time: availableTimes[0],
      guests: '1',
      occasion: 'Birthday',
    })
  })
});