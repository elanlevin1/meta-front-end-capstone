import './App.css';
import HomePage from './HomePage';
import BookingPage from './Booking/BookingPage';
import ConfirmedBooking from './Booking/ConfirmedBooking';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/booking-confirmation" element={<ConfirmedBooking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
