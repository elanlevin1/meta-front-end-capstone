import './Main.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Main = () =>  {
    const navigate = useNavigate();

    return  (
        <main className="main">
            <section className="hero-section">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h3>We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </h3>
                    <button onClick={() => navigate('/booking')}>Reserve a table</button>
                </div>
                <div className="welcome-food">
                    <img className="image" src="./assets/restaurant-food.jpg" alt="Restaurant hors d'oeuvre"/>
                </div>
            </section>

            <section className="highlights">
                {/* <div> */}
                    <h1>This week's specials!</h1>
                    <button>Online Menu</button>
                {/* </div> */}
                {/* <div> */}
                    {food.map(item => (
                        <Specials
                            key={item.id}
                            {...item}
                        />
                    ))}
                {/* </div> */}
            </section>

            <section className="testimonials">
                <h1>Testimonials</h1>
                {reviews.map(item => (
                        <CustomersSay
                            key={item.id}
                            {...item}
                        />
                    ))}
            </section>

            <section className="about">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h3>About us text here</h3>
                </div>
                <div>
                    <img className="image" src="./assets/Mario-and-Adrian-B.jpg" alt="Restaurant owners Mario and Adrian"/>
                </div>
            </section>
        </main>
    )
}

const Specials = ({imgSrc, food, price, description}) => {
    return (
        <div className='menu-card'>
            <img className="image" src={imgSrc} alt={food}/>
            <h4>{food}</h4>
            <h4>{price}</h4>
            <h5>{description}</h5>
            <h5>Order a delivery</h5>
        </div>
    )
}

const food = [
    {id: 1, imgSrc: "./assets/greek-salad.jpg", food: "Greek salad", price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
    {id: 2, imgSrc: "./assets/bruschetta.jpg", food: "Bruschetta", price: "$12.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
    {id: 3, imgSrc: "./assets/lemon-dessert.jpg", food: "Lemon dessert", price: "$12.99",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
]

const CustomersSay = ({imgSrc, name, reviewText}) => {
    return (
        <div className='testimonial'>
            <h4>Rating</h4>
            {/* <img className="image" src={imgSrc} alt={`Review by ${name}`}/> */}
            <h4>{name}</h4>
            <h5>{reviewText}</h5>
        </div>
    )
}

const reviews = [
    {id: 1, imgSrc: '', name: 'Phineas', reviewText: 'Excellent food'},
    {id: 2, imgSrc: '', name: 'Stacy', reviewText: 'Excellent food'},
    {id: 3, imgSrc: '', name: 'Candace', reviewText: 'Excellent food'},
    {id: 4, imgSrc: '', name: 'Jeremy', reviewText: 'Excellent food'}
]

export default Main;