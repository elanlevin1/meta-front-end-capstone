import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns a non-empty array of available booking times', () => {
  const initialTimes = initializeTimes(new Date());
  expect(initialTimes.length > 0);
});

test('updateTimes returns the same value that is provided in the state', () => {
  const mockState = ['17:00', '18:00', '19:00'];
  const action = new Date();

  const result = updateTimes(mockState, action);

  expect(result).toEqual(mockState);
});