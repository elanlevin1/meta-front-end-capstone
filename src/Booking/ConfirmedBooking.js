import { useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';

const ConfirmedBooking = () => {
    const location = useLocation();
    const formData = location.state || {};

    return (
        <>
            <section className='flex-grid'>
                <Nav />
            </section>
            {/* CSS styling found in Main.css */}
            <main className='main' style={{minHeight: '100vh'}}>
                <section className="hero-section" style={{flexGrow: 1}}>
                    <div>
                        <h1>Booking Confirmed!</h1>
                        <h3>
                            {formData.date ? (
                                <>Thank you for your reservation on {formData.date} at {formData.time} for {formData.guests} guests. We look forward to serving you at Little Lemon!</>
                            ) : (
                                <>Thank you for your reservation. We look forward to serving you at Little Lemon!</>
                            )}
                        </h3>
                    </div>
                    <div className="welcome-food" style={{alignItems: 'baseline'}}>
                        <img className="image" src="./assets/restaurant-food.jpg" alt="Restaurant hors d'oeuvre"/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ConfirmedBooking;