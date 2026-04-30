import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct initial times', () => {
  const initialTimes = initializeTimes();
  const expectedTimes = [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
  expect(initialTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value that is provided in the state', () => {
  const mockState = ['17:00', '18:00', '19:00']; 
  const action = {};

  const result = updateTimes(mockState, action);

  expect(result).toEqual(mockState);
});